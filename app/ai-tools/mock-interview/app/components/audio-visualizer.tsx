import { useRef, useEffect } from "react";

export const SiriWave = ({ isActive }: { isActive: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let phase = 0;
        let animationFrameId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!isActive) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);
                ctx.lineTo(canvas.width, canvas.height / 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                ctx.stroke();
                return;
            }
            const centerY = canvas.height / 2;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${i === 0 ? '99,102,241' : i === 1 ? '236,72,153' : '34,197,94'}, ${0.5 - i * 0.1})`;
                ctx.lineWidth = 2;
                for (let x = 0; x < canvas.width; x++) {
                    const y = centerY + Math.sin(x * 0.02 + phase + i) * 20 * Math.sin(x * 0.01);
                    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            phase += 0.1;
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(animationFrameId);
    }, [isActive]);
    return <canvas ref={canvasRef} width={300} height={100} className="w-full h-full rounded-lg bg-black/20 backdrop-blur-sm" />;
};
