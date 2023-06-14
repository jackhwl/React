import { useEffect, useState } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [counter, setCounter] = useState(0);
  const buttonClicked = () => setCounter(counter + 1);

  useEffect(() => {
    const fetchHouse = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouse();
  }, []);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };
  return (
    <>
      {counter}
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRowMem key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={buttonClicked}>
        Counter Increase
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
