import CardContext from "./cardContext";
import { useState } from "react";
const CardState = ({ children }) => {
  const initialCardData = {
    someValue: "Initial Value",
    // Add other properties as needed
  };
  const [cardData, setCardData] = useState(initialCardData);

  // Function to update card data
  const updateCardData = (newData) => {
    setCardData(newData);
  };

  // You can define functions to update the cardData here

  return (
    <CardContext.Provider value={{ cardData, updateCardData }}>
      {children}
    </CardContext.Provider>
  );
};
 export default CardState;