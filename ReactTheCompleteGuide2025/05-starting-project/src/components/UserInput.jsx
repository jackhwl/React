export default function UserInput({name, label, value, handleChange}) {
    console.log(name, value)
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type="number" defaultValue={value} onChange={()=>handleChange(name, event)}/>
        </div>
    )
}