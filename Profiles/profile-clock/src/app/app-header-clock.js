'use client'

import { useEffect, useState } from "react";
import AppShowSun from "./app-show-sun"

export default function AppHeaderClock({ isoDateString, children }) {
    const [currentDate, setCurrentDate] = useState(new Date(isoDateString))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate((oldDate) => new Date(oldDate.getTime() + 1000))
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            {new Date(currentDate).toLocaleTimeString()}
            <div>
                {children}
                <AppShowSun isoDateString={currentDate} />
            </div>

        </div>
    )
  }