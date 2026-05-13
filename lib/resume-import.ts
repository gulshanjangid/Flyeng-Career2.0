
import { ResumeData } from "./types";
import { initialResumeState } from "./resume-builder-constants";
import { toast } from "sonner";

export const handleImportResumeLogic = async (
    setResume: (data: ResumeData) => void,
    setIsUnsavedImport: (val: boolean) => void,
    setMode: (val: 'builder' | 'analyzer') => void,
    setShowLanding: (val: boolean) => void,
    setIsImporting: (val: boolean) => void,
    setIsGenerating: (val: boolean) => void,
    setLoadingAI: (val: string | null) => void
) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.docx,.txt';
    input.onchange = async (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);
        const startTime = Date.now();

        try {
            // DYNAMICALLY IMPORT HEAVY LIBRARIES HERE
            const [pdfjsModule, mammothModule, tesseractModule] = await Promise.all([
                import('pdfjs-dist'),
                import('mammoth'),
                import('tesseract.js')
            ]);
            
            const pdfjsLib = pdfjsModule;
            const mammoth = mammothModule.default || mammothModule;
            const Tesseract = tesseractModule.default || tesseractModule;

            // Initialize Worker
            if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
                 pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
            }

            // Extract text from file
            let text = "";

            if (file.type === "application/pdf") {
                const buff = await file.arrayBuffer();
                const doc = await pdfjsLib.getDocument({ data: buff }).promise;
                for (let i = 1; i <= doc.numPages; i++) {
                    const page = await doc.getPage(i);
                    const content = await page.getTextContent();

                    // Smart Layout Reconstruction: Sort by Y (desc) then X (asc)
                    const items = (content.items as any[]).map(item => ({
                        str: item.str,
                        x: item.transform[4],
                        y: item.transform[5],
                        h: item.height || item.transform[3], // height might be in transform
                    }));

                    // Sort logic: Top to Bottom, Left to Right
                    items.sort((a, b) => {
                        // Group by line (allow small variance in Y)
                        const yDiff = Math.abs(a.y - b.y);
                        if (yDiff < 5) {
                            return a.x - b.x; // same line, sort left to right
                        }
                        return b.y - a.y; // different lines, sort top to bottom
                    });

                    let pageText = "";
                    let lastY = -999;

                    items.forEach(item => {
                        if (lastY !== -999 && Math.abs(item.y - lastY) > 6) {
                            pageText += "\n";
                        }
                        // Add space if items are far apart horizontally? 
                        // For now simple concat with space is safer than missing words
                        pageText += item.str + " ";
                        lastY = item.y;
                    });

                    text += pageText + "\n";
                }
            } else if (file.type.includes("word") || file.name.endsWith(".docx")) {
                text = (await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() })).value;
            } else {
                text = await file.text();
            }

            if (text.length < 50 && file.type === "application/pdf") {
                console.log("Text extraction failed. Attempting OCR...");
                toast.info("Image-based PDF detected. Applying OCR (this may take a moment)...");

                const buff = await file.arrayBuffer();
                const doc = await pdfjsLib.getDocument({ data: buff }).promise;
                let ocrText = "";

                for (let i = 1; i <= Math.min(doc.numPages, 3); i++) { // Limit to 3 pages for speed
                    const page = await doc.getPage(i);
                    const viewport = page.getViewport({ scale: 2.0 }); // High scale for better OCR
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    if (context) {
                        await page.render({ canvasContext: context, viewport: viewport }).promise;
                        const dataUrl = canvas.toDataURL('image/png');
                        const result = await Tesseract.recognize(dataUrl, 'eng');
                        ocrText += result.data.text + "\n";
                    }
                }
                if (ocrText.length > 50) {
                    text = ocrText;
                    console.log("OCR Successful");
                }
            }

            if (text.length < 30) {
                throw new Error("Could not extract text from file. Please try converting to a simple text file.");
            }

            // --- RESET STATE BEFORE PARSING ---
            setResume(initialResumeState);

            // --- Parse with improved logic (Local) ---
            const { parseResumeLocally } = await import('@/lib/resume-parser');
            const parsedResume = parseResumeLocally(text);

            // Ensure minimum animation time
            const elapsed = Date.now() - startTime;
            if (elapsed < 3000) {
                await new Promise(r => setTimeout(r, 3000 - elapsed));
            }

            setResume(parsedResume);
            setIsUnsavedImport(true); // Mark as temporary until edited/saved
            setMode('builder'); // Ensure we are in builder mode
            setShowLanding(false);
            toast.success(`Imported resume for ${parsedResume.personalInfo.fullName}`);

        } catch (error: any) {
            console.error('Import error:', error);
            toast.error(`Failed to import: ${error.message}`);
        } finally {
            setIsImporting(false);
            setIsGenerating(false);
            setLoadingAI(null);
        }
    };
    input.click();
};
