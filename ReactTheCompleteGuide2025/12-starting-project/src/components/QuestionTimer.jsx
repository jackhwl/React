import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("Setting timeout");
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    },[timeout, onTimeout]);

    useEffect(() => {
        console.log("Starting interval");
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 100);
        }, 100);
        return () => clearInterval(interval);
    },[])

    return <progress id="question-timer" value={remainingTime} max={timeout} />
}