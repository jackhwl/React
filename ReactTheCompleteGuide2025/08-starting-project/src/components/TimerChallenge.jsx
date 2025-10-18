import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, second}) {
  const timer = useRef();
  const modalRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(second * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < second * 1000;
  if (timeRemaining <= 0){
    clearInterval(timer.current);
    setTimeRemaining(second * 1000);
    modalRef.current.open();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  }
  const handleStop = () => {
    modalRef.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
    <ResultModal ref={modalRef} result='lost' targetTime={second}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer inactive'}</p>
    </section>
    </>
  );
}