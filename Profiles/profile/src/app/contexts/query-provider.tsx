'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState,  } from "react"

export const QueryContext = createContext<{ 
    query: string; 
    setQuery: Dispatch<SetStateAction<string>>
}>
    ({ 
        query: '', 
        setQuery: () => {} 
    })
const QueryContextProvider = QueryContext.Provider
export default function QueryProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState<string>('')

    return (
        <QueryContextProvider value={{ query, setQuery }}>
            {children}
        </QueryContextProvider>
    )
}