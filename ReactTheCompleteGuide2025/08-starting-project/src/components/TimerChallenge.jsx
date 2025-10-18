import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, second}) {
  const timer = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(second * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < second * 1000;
  if (timeRemaining <= 0){
    clearInterval(timer.current);
    setTimeRemaining(second * 1000);
    dialogRef.current.showModal();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  }
  const handleStop = () => {
    dialogRef.current.showModal();
    clearInterval(timer.current);
  }
  return (
    <>
    <ResultModal ref={dialogRef} result='lost' targetTime={second}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer inactive'}</p>
    </section>
    </>
  );
}