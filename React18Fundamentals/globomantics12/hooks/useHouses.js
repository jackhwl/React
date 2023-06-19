import { useEffect, useState } from "react";

const useHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouse = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouse();
  }, []);

  return { houses, setHouses };
};

export default useHouses;
