export type ResumeTheme = 'modern' | 'professional' | 'minimalist' | 'creative' | 'executive' | 'ivy-league' | 'tech-scout' | 'wall-street' | 'designer' | 'glacier' | 'scholar' | 'zurich' | 'redline';

export interface ThemeConfig {
    id: ResumeTheme;
    name: string;
    description: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        background: string;
    };
    fonts: {
        heading: string;
        body: string;
    };
    layout: {
        columns: number; // 1 or 2
        sidebarSide?: 'left' | 'right';
        headerStyle: 'full-width' | 'centered' | 'sidebar';
    };
}

export const RESUME_THEMES: Record<ResumeTheme, ThemeConfig> = {
    'ivy-league': {
        id: 'ivy-league',
        name: 'The Ivy League',
        description: 'Prestigious, serif-based layout. The gold standard for Finance, Law, and Academia.',
        colors: {
            primary: '#000000',
            secondary: '#262626',
            accent: '#e5e5e5',
            text: '#171717',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-serif',
            body: 'font-serif'
        },
        layout: {
            columns: 1,
            headerStyle: 'full-width'
        }
    },
    'tech-scout': {
        id: 'tech-scout',
        name: 'Tech Scout',
        description: 'A clean, modern grid layout. Perfect for Developers and Product Managers.',
        colors: {
            primary: '#0f172a', // Slate-900
            secondary: '#334155', // Slate-700
            accent: '#f1f5f9', // Slate-100
            text: '#020617', // Slate-950
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-sans',
            body: 'font-sans'
        },
        layout: {
            columns: 1,
            headerStyle: 'full-width'
        }
    },
    'wall-street': {
        id: 'wall-street',
        name: 'Wall Street',
        description: 'High-density, executive layout with subtle blue accents.',
        colors: {
            primary: '#1e40af', // Blue-800
            secondary: '#1e3a8a', // Blue-900
            accent: '#eff6ff', // Blue-50
            text: '#172554', // Blue-950
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-serif',
            body: 'font-sans'
        },
        layout: {
            columns: 1,
            headerStyle: 'full-width'
        }
    },
    'designer': {
        id: 'designer',
        name: 'The Creative',
        description: 'Two-column layout with a bold sidebar for skills and portfolio links.',
        colors: {
            primary: '#be185d', // Pink-700
            secondary: '#831843', // Pink-900
            accent: '#fdf2f8', // Pink-50
            text: '#1f2937',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-sans',
            body: 'font-sans'
        },
        layout: {
            columns: 2, // Triggers sidebar logic
            sidebarSide: 'left',
            headerStyle: 'sidebar'
        }
    },
    'glacier': {
        id: 'glacier',
        name: 'The Performer',
        description: 'Bold teal header with photo support. Perfect for creative professionals.',
        colors: {
            primary: '#2A9D8F', // Teal
            secondary: '#264653', // Dark Slate
            accent: '#E9C46A', // Gold accent
            text: '#264653',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-sans',
            body: 'font-sans'
        },
        layout: {
            columns: 2,
            sidebarSide: 'left', // Visual sidebar
            headerStyle: 'full-width'
        }
    },
    'scholar': {
        id: 'scholar',
        name: 'The Academic',
        description: 'Rigorous, serif-based layout with high information density.',
        colors: {
            primary: '#000000',
            secondary: '#4b5563',
            accent: '#e5e7eb',
            text: '#111827',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-serif',
            body: 'font-serif'
        },
        layout: {
            columns: 1,
            headerStyle: 'balanced'
        }
    },
    'zurich': {
        id: 'zurich',
        name: 'Zurich Modern',
        description: 'Swiss-style precision. Clean photo integration and minimalist grid.',
        colors: {
            primary: '#0F172A', // Slate 900
            secondary: '#334155', // Slate 700
            accent: '#F1F5F9', // Slate 100
            text: '#0F172A',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-sans',
            body: 'font-sans'
        },
        layout: {
            columns: 1,
            headerStyle: 'modern'
        }
    },
    'redline': {
        id: 'redline',
        name: 'Executive Line',
        description: 'Sharp, timeline-based layout with bold red accents.',
        colors: {
            primary: '#DC2626', // Red 600
            secondary: '#991B1B', // Red 800
            accent: '#FEF2F2', // Red 50
            text: '#1F2937',
            background: '#ffffff'
        },
        fonts: {
            heading: 'font-sans',
            body: 'font-sans'
        },
        layout: {
            columns: 1,
            headerStyle: 'left'
        }
    }
};
