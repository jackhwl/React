import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout);
    },[timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prev => prev - 1000);
        }, 1000);
    })

    return <progress id="question-timer" value={remainingTime} max={timeout} />
}