import { useState } from "react";

export default function TimerChallenge({title, second}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = () => {
    setTimerStarted(true);
    setTimeout(() => setTimerExpired(true), second * 1000);
  }
  const handleStop = () => {

  }
  return (
    <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
        <p className={timerExpired ? 'active' : undefined}>{timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
    </section>
  );
}