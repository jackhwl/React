import { useState } from "react"
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  const handleClick = () => {
      setIsEditing(editing => !editing)
      if (!isEditing) name = playerName
  }

  const handleKeyUp = (event) => {
    setPlayerName(event.target.value)
  }

  return (
    <li key={name}>
      <span className="player">
        {isEditing ? <input type="text" onKeyUp={handleKeyUp} required defaultValue={name} /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}