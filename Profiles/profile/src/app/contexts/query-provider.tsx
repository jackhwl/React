"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState,  } from "react"

export const QueryContext = createContext<{ 
    query: string; 
    setQuery: Dispatch<SetStateAction<string>>
}>
    ({ 
        query: '', 
        setQuery: () => {} 
    })

export function useQuery1() {
    return useContext(QueryContext)
}

export default function QueryProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState<string>('')

    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            {children}
        </QueryContext.Provider>
    )
}