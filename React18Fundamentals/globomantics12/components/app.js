import { useCallback, useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import navValues from "../helpers/navValues";

const navigationContext = React.createContext(navValues.home);

const App = () => {
  const navigate = useCallback(
    (navTo = setNav({ current: navTo, navigator })),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={{ nav }}>
      <Banner>Providing houses all over the world</Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
