import { useState } from "react";
import useHouses from "../hooks/useHouses";
import HouseRow, { HouseRowMem } from "./houseRow";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "../helpers/loadingStatus";

const HouseList = () => {
  const { houses, setHouses, loadingState } = useHouses();
  const [counter, setCounter] = useState(0);
  const buttonClicked = () => setCounter(counter + 1);

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

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
