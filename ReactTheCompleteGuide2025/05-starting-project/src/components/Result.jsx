export default function Result({result}) {
    //console.log(result)
    return (
      <table id="result">
      <thead>
        <tr>
        <th>Year</th>
        <th>Investment Value</th>                
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map(item => (
            <tr key={item.year}>
                <td>{item.year}</td>
                <td>{Math.round(item.valueEndOfYear)}</td>
                <td>{Math.round(item.interest)}</td>
                <td></td>
                <td>{item.annualInvestment}</td>
            </tr>
        ))}
      </tbody>
    </table>
    )
}