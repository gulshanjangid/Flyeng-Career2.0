"use client"

import React from 'react';
import { ResumeTheme, RESUME_THEMES } from '@/lib/resume-themes';
import { cn } from '@/lib/utils';
import { ResumeData } from "@/lib/types";
import { TemplateIvyLeague } from './resume-templates/template-ivy-league';
import { TemplateTechScout } from './resume-templates/template-tech-scout';
import { TemplateWallStreet } from './resume-templates/template-wall-street';
import { TemplateDesigner } from './resume-templates/template-designer';
import { TemplateMinimalistPlus } from './resume-templates/template-minimalist-plus';
import { TemplateGlacier } from './resume-templates/template-glacier';
import { TemplateScholar } from './resume-templates/template-scholar';
import { TemplateZurich } from './resume-templates/template-zurich';
import { TemplateRedline } from './resume-templates/template-redline';

interface ResumePreviewProps {
    data: ResumeData;
    theme: ResumeTheme;
    scale?: number;
    onSectionClick?: (section: string) => void;
    customColor?: string;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, theme, scale = 1, onSectionClick, customColor }) => {
    const config = RESUME_THEMES[theme];

    const renderTemplate = () => {
        const props = { data, config, onSectionClick, customColor };

        switch (theme) {
            case 'ivy-league':
            case 'executive':
                return <TemplateIvyLeague {...props} />;
            case 'tech-scout':
            case 'modern':
                return <TemplateTechScout {...props} />;
            case 'wall-street':
            case 'professional':
                return <TemplateWallStreet {...props} />;
            case 'designer':
            case 'creative':
                return <TemplateDesigner {...props} />;
            case 'minimalist':
                return <TemplateMinimalistPlus {...props} />;
            case 'glacier':
                return <TemplateGlacier {...props} />;
            case 'scholar':
                return <TemplateScholar {...props} />;
            case 'zurich':
                return <TemplateZurich {...props} />;
            case 'redline':
                return <TemplateRedline {...props} />;
            default:
                return <TemplateIvyLeague {...props} />;
        }
    };

    return (
        <div
            className={cn(
                "resume-preview-wrapper origin-top relative bg-white shadow-2xl",
                "print:shadow-none print:!transform-none print:!w-[210mm] print:!min-h-[297mm]"
            )}
            style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                width: '210mm',
                minHeight: '297mm',
                marginBottom: scale < 1 ? `${(scale - 1) * 1100}px` : 0,
            }}
        >
            <div className="resume-document p-8 print:p-[10mm]">
                {renderTemplate()}
            </div>
        </div>
    );
};
