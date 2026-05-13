"use client"

import React, { createContext, useContext, useReducer, ReactNode } from "react"
import { COMPONENT_TEMPLATES, BuilderComponent, ComponentType } from "./builder-config"

export interface BuilderState {
    components: BuilderComponent[]
    selectedId: string | null
    mode: 'ai' | 'visual'
    device: 'desktop' | 'tablet' | 'mobile'
    history: BuilderComponent[][]
    historyIndex: number
    files: any[] // For AI Architect file tree
    xrayMode: boolean
}

const initialState: BuilderState = {
    components: [],
    selectedId: null,
    mode: 'ai',
    device: 'desktop',
    history: [[]],
    historyIndex: 0,
    files: [],
    xrayMode: false
}

type BuilderAction =
    | { type: 'ADD_COMPONENT'; payload: { type: string } }
    | { type: 'ADD_COMPONENT_DIRECT'; payload: BuilderComponent }
    | { type: 'UPDATE_COMPONENT'; payload: { id: string; updates: Partial<BuilderComponent> } }
    | { type: 'DELETE_COMPONENT'; payload: string }
    | { type: 'SELECT_COMPONENT'; payload: string | null }
    | { type: 'SET_MODE'; payload: 'ai' | 'visual' }
    | { type: 'SET_DEVICE'; payload: 'desktop' | 'tablet' | 'mobile' }
    | { type: 'REORDER_COMPONENTS'; payload: BuilderComponent[] }
    | { type: 'SET_COMPONENTS'; payload: BuilderComponent[] }
    | { type: 'UNDO' }
    | { type: 'REDO' }
    | { type: 'SET_FILES'; payload: any[] }
    | { type: 'TOGGLE_XRAY' }

const BuilderContext = createContext<{
    state: BuilderState
    dispatch: React.Dispatch<BuilderAction>
} | undefined>(undefined)

const builderReducer = (state: BuilderState, action: BuilderAction): BuilderState => {
    switch (action.type) {
        case 'ADD_COMPONENT':
            const newComp = { ...COMPONENT_TEMPLATES[action.payload.type as ComponentType], id: Math.random().toString(36).substr(2, 9) }
            // Fallback if template not found for type
            if (!newComp.type) return state
            const addedHistory = [...state.history.slice(0, state.historyIndex + 1), [...state.components, newComp]]
            return {
                ...state,
                components: [...state.components, newComp],
                history: addedHistory,
                historyIndex: state.historyIndex + 1
            }
        case 'ADD_COMPONENT_DIRECT':
            const directHistory = [...state.history.slice(0, state.historyIndex + 1), [...state.components, action.payload]]
            return {
                ...state,
                components: [...state.components, action.payload],
                history: directHistory,
                historyIndex: state.historyIndex + 1
            }
        case 'UPDATE_COMPONENT':
            const updatedComps = state.components.map(c => c.id === action.payload.id ? { ...c, ...action.payload.updates } : c)
            const updateHistory = [...state.history.slice(0, state.historyIndex + 1), updatedComps]
            return {
                ...state,
                components: updatedComps,
                history: updateHistory,
                historyIndex: state.historyIndex + 1
            }
        case 'DELETE_COMPONENT':
            const filteredComps = state.components.filter(c => c.id !== action.payload)
            const deleteHistory = [...state.history.slice(0, state.historyIndex + 1), filteredComps]
            return {
                ...state,
                components: filteredComps,
                selectedId: null,
                history: deleteHistory,
                historyIndex: state.historyIndex + 1
            }
        case 'SELECT_COMPONENT':
            return { ...state, selectedId: action.payload }
        case 'SET_MODE':
            return { ...state, mode: action.payload }
        case 'SET_DEVICE':
            return { ...state, device: action.payload }
        case 'REORDER_COMPONENTS':
            return { ...state, components: action.payload }
        case 'SET_COMPONENTS':
            const setHistory = [...state.history.slice(0, state.historyIndex + 1), action.payload]
            return {
                ...state,
                components: action.payload,
                history: setHistory,
                historyIndex: state.historyIndex + 1
            }
        case 'UNDO':
            if (state.historyIndex > 0) return { ...state, components: state.history[state.historyIndex - 1], historyIndex: state.historyIndex - 1 }
            return state
        case 'REDO':
            if (state.historyIndex < state.history.length - 1) return { ...state, components: state.history[state.historyIndex + 1], historyIndex: state.historyIndex + 1 }
            return state
        case 'SET_FILES':
            console.log("Reducer: Setting files", action.payload)
            return { ...state, files: action.payload }
        case 'TOGGLE_XRAY':
            return { ...state, xrayMode: !state.xrayMode }
        default:
            return state
    }
}

export function BuilderProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(builderReducer, initialState)

    return (
        <BuilderContext.Provider value={{ state, dispatch }}>
            {children}
        </BuilderContext.Provider>
    )
}

export function useBuilder() {
    const context = useContext(BuilderContext)
    if (context === undefined) {
        throw new Error('useBuilder must be used within a BuilderProvider')
    }
    return context
}
