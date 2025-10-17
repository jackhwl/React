import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, second}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialogRef = useRef();

  const handleStart = () => {
    timer.current =setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, second * 1000);
    setTimerStarted(true);
  }
  const handleStop = () => {
    clearTimeout(timer.current);
  }
  return (
    <>
    <ResultModal ref={dialogRef} result='lost' targetTime={second}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerExpired ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
    </section>
    </>
  );
}