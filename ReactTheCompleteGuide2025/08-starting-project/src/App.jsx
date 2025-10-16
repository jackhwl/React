import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='easy' second={1} />
        <TimerChallenge title='not easy' second={5} />
        <TimerChallenge title='getting tough' second={10} />
        <TimerChallenge title='pros only' second={15} />
      </div>
    </>
  );
}

export default App;
