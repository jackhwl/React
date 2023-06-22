import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import navValues from "../helpers/navValues";

const navigationContext = React.createContext(navValues.home);

const App = () => {
  return (
    <>
      <Banner>Providing houses all over the world</Banner>
    </>
  );
};

export { navigationContext };
export default App;
