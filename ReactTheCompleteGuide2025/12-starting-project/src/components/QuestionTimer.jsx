import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("Setting timeout");
        setTimeout(onTimeout, timeout);
    },[timeout, onTimeout]);

    useEffect(() => {
        console.log("Starting interval");
        setInterval(() => {
            setRemainingTime(prev => prev - 100);
        }, 100);
    },[])

    return <progress id="question-timer" value={remainingTime} max={timeout} />
}