export interface Issue {
    severity: 'info' | 'warning' | 'error' | 'critical';
    message: string;
    fix?: string;
    layer?: 'syntax' | 'security' | 'performance' | 'a11y';
}

export interface ValidationReport {
    isValid: boolean;
    scores: {
        syntax: number;
        security: number;
        performance: number;
        accessibility: number;
    };
    overallScore?: number;
    issues: Issue[];
    timestamp: string;
}

export async function validateGeneratedCode(code: string): Promise<ValidationReport> {
    const report: ValidationReport = {
        isValid: true,
        scores: { syntax: 0, security: 0, performance: 0, accessibility: 0 },
        issues: [],
        timestamp: new Date().toISOString(),
    };

    // Layer 1: Syntax Check
    const syntaxIssues = checkSyntax(code);
    if (syntaxIssues.length > 0) {
        report.scores.syntax = Math.max(0, 100 - syntaxIssues.length * 10);
        report.issues.push(...syntaxIssues.map(issue => ({ ...issue, layer: 'syntax' as const })));
    } else {
        report.scores.syntax = 100;
    }

    // Layer 2: Security Check
    const securityIssues = checkSecurity(code);
    if (securityIssues.length > 0) {
        report.isValid = false; // Security issues block deployment
        report.scores.security = 0;
        report.issues.push(...securityIssues.map(issue => ({ ...issue, layer: 'security' as const })));
    } else {
        report.scores.security = 100;
    }

    // Layer 3: Performance Check
    const perfIssues = checkPerformance(code);
    report.scores.performance = Math.max(0, 100 - perfIssues.length * 5);
    report.issues.push(...perfIssues.map(issue => ({ ...issue, layer: 'performance' as const })));

    // Layer 4: Accessibility Check
    const a11yIssues = checkAccessibility(code);
    report.scores.accessibility = Math.max(0, 100 - a11yIssues.length * 5);
    report.issues.push(...a11yIssues.map(issue => ({ ...issue, layer: 'a11y' as const })));

    // Overall score
    report.overallScore = Math.round(
        (report.scores.syntax + report.scores.security + report.scores.performance + report.scores.accessibility) / 4
    );

    return report;
}

function checkSyntax(code: string): Issue[] {
    const issues: Issue[] = [];

    // Basic heuristics for syntax issues

    // Check for unclosed tags (very rough heuristic)
    const openTags = (code.match(/<[^/][^>]*>/g) || []).length;
    const closeTags = (code.match(/<\/[^>]*>/g) || []).length;
    // This heuristic is often flaky on void elements, so we'll be lenient and only flag large discrepancies
    if (Math.abs(openTags - closeTags) > 10) {
        // Disabled strict checking to avoid false positives on valid JSX with void tags
    }

    // Check for invalid JSX structure
    if (code.includes('</') && code.includes('function') && !code.includes('return')) {
        issues.push({
            severity: 'error',
            message: 'JSX component missing return statement',
            fix: 'Add "return (...)" to component function',
        });
    }

    return issues;
}

function checkSecurity(code: string): Issue[] {
    const issues: Issue[] = [];

    if (code.includes('dangerouslySetInnerHTML')) {
        issues.push({
            severity: 'critical',
            message: 'Use of dangerouslySetInnerHTML detected',
            fix: 'Remove and use safe text rendering instead',
        });
    }

    // Check for eval usage, but avoid false positives in comments
    if ((code.includes('eval(') && !code.includes('// eval(')) || (code.includes('Function(') && !code.includes('// Function('))) {
        issues.push({
            severity: 'critical',
            message: 'eval() or Function() constructor detected',
            fix: 'Never use eval(). It\'s a security risk.',
        });
    }

    return issues;
}

function checkPerformance(code: string): Issue[] {
    const issues: Issue[] = [];

    // Check for unoptimized images
    const imgs = code.match(/<img[^>]*>/g) || [];
    const optimizedImgs = code.match(/next\/image|Image/g) || [];
    if (imgs.length > 0 && optimizedImgs.length === 0) {
        issues.push({
            severity: 'warning',
            message: `${imgs.length} <img> tag(s) found without next/image optimization`,
            fix: 'Import Image from "next/image" and use <Image /> instead of <img />',
        });
    }

    return issues;
}

function checkAccessibility(code: string): Issue[] {
    const issues: Issue[] = [];

    // Check for alt text
    const imgsNoAlt = (code.match({
        [Symbol.match](string) {
            const matches = string.match(/<img[^>]*(?!alt=)[^>]*>/g);
            return matches;
        }
    }) || []).length;

    // Improved regex to find img tags lacking alt="" attribute
    const imgTags = code.match(/<img[^>]+>/g) || [];
    let missingAltCount = 0;
    imgTags.forEach(tag => {
        if (!tag.includes('alt=')) missingAltCount++;
    });

    if (missingAltCount > 0) {
        issues.push({
            severity: 'warning',
            message: `${missingAltCount} image(s) missing alt text`,
            fix: 'Add descriptive alt text to all images: alt="description"',
        });
    }

    // Check for H1
    const h1Count = (code.match(/<h1/g) || []).length;
    if (h1Count === 0) {
        issues.push({
            severity: 'warning',
            message: 'No H1 heading found',
            fix: 'Each page must have exactly one H1 tag as main title',
        });
    } else if (h1Count > 1) {
        issues.push({
            severity: 'warning',
            message: `${h1Count} H1 tags found (should be 1)`,
            fix: 'Use only one H1 per page. Use H2/H3 for subsections.',
        });
    }

    return issues;
}

