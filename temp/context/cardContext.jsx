// import {createContext} from "react";

// const sheetContext = createContext();

// export default sheetContext;

import React, { createContext, useContext } from 'react';

// Create a context object
const CardContext = createContext();

// Create a provider component
export function CardProvider({ children }) {
  // Define your card data or state here
  const cardData = {
    image: 'your_image_url',
    title: 'Your Card Title',
    description: 'Your Card Description',
  };

  return (
    <CardContext.Provider value={cardData}>
      {children}
    </CardContext.Provider>
  );
}

// Create a custom hook to access the card data
export function useCard() {
  return useContext(CardContext);
}

const [notes, setNotes] = useState(false);

const handleIconClick = () => {
  setNotes(!notes);
  
};


<td>
<DescriptionOutlinedIcon onClick={handleIconClick}/>        
{notes && <BasicModalDialog onClose={() => setNotes(false)} />}          
</td>