import { useRef } from "react";
import { useState } from "react";
export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);
  const handleClick = () => {
    //const name = playerName.current.value;
    setName(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {name ? name : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
