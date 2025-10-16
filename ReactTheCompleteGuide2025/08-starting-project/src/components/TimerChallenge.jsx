import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, second}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  const handleStart = () => {
    setTimerStarted(true);
    timer.current =setTimeout(() => setTimerExpired(true), second * 1000);
  }
  const handleStop = () => {
    clearTimeout(timer.current);
  }
  return (
    <>
    {timerExpired && <ResultModal result='lost' targetTime={second} />}
    <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerExpired ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
    </section>
    </>
  );
}