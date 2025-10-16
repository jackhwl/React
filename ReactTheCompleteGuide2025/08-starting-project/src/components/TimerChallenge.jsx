export default function TimerChallenge({title, second}) {
  return (
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{second} second{second >1 ? 's' : ''}</p>
        <p><button>Start Challenge</button></p>
        <p>Time is running...</p>
    </section>
  );
}