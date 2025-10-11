import UserInput from "./components/UserInput"
import Result from "./components/Result"
import {calculateInvestmentResults as calculate} from "./util/investment"
import { useState } from "react"

const INPUT_BOXES = [
  {name: 'initialInvestment', label: 'INITIAL INVESTMENT', value:15000},
  {name: 'annualInvestment', label: 'ANNUAL INVESTMENT', value:900},
  {name: 'expectedReturn', label: 'EXPECTED RETURN', value:6},
  {name: 'duration', label: 'DURATION', value:10}
]

function App() {
  const initParams = {
    initialInvestment: 15000,
    annualInvestment:900,
    expectedReturn:6,
    duration:10,
  }
  const [userParams, setUserParams] = useState(INPUT_BOXES)

  //const result = calculate(userParams)
  const calculateResult = (userParamsInput) => {
    const iniParams = userParamsInput.reduce((acc, cur) => {
      acc[cur.name] = cur.value
      return acc
    }, {})
    //console.log(iniParams)
    return calculate(iniParams)
  }


  const handleChange = (name, event) =>{
    setUserParams((prevParams) => prevParams.map(item => item.name === name ? {...item, value: +event.target.value} : item)

    )
  }
  return (
    <>
    <div id="user-input">
      {
        userParams.map(({name, label, value}) =>  
        <UserInput key={name} name={name} label={label} value={value} handleChange={handleChange}  />)
      }
    </div>
    <Result result={calculateResult(userParams)} />
    </>
  )
}

export default App
