"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface LoaderContextType {
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
    loaderText: string
    setLoaderText: (text: string) => void
    type: 'intro' | 'route'
    setType: (type: 'intro' | 'route') => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true) // Start true for initial load
    const [loaderText, setLoaderText] = useState("FLYENG CAREER")
    const [type, setType] = useState<'intro' | 'route'>('intro')

    const value = React.useMemo(() => ({
        isLoading,
        setIsLoading,
        loaderText,
        setLoaderText,
        type,
        setType
    }), [isLoading, loaderText, type])

    return (
        <LoaderContext.Provider value={value}>
            {children}
        </LoaderContext.Provider>
    )
}

export function useLoader() {
    const context = useContext(LoaderContext)
    if (context === undefined) {
        throw new Error('useLoader must be used within a LoaderProvider')
    }
    return context
}
