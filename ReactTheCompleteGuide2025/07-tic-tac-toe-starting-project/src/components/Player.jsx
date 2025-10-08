import { useState } from "react"
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  return (
    <li key={name}>
      <span className="player">
        {isEditing ? <input type="text" required defaultValue={name} /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  )
}