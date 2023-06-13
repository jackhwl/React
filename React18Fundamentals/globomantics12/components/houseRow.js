import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house: { address, country, price } }) => (
  <tr>
    <td>{address}</td>
    <td>{country}</td>
    <td>{currencyFormatter.format(price)}</td>
  </tr>
);

export default HouseRow;
