
// import createContext from './cardContext';
// import React, {useContext } from 'react';

// // Create a context object
// const CardContext = createContext();

// // Create a provider component
// export default function CardProvider({ children }) {
//   // Define your card data or state here
//   const cardData = [ 
//     {
        
//         "title": "Love Babbar",
//         "description": "450 Questions curated by love Babbar"
//     },
//     {
//          "title": "Striver SDE Sheet",
//         "description": "DSA questions curated by Striver"
//     },
//     {
//          "title": "Neetcode 150",
//         "description": "150 ques curated by NeetCode"
//     },
//     {
//          "title": "Leetcode",
//         "description": "Leetcode questions"
//     },
//     {
//         "title": "Striver A to Z",
//         "description": "Basics to advance questions"
//     },
//     {
//          "title": "CSES Problem Set",
//         "description": "Collection of algorithmic problems."
//     }
// ]


//   return (
//     <CardContext.Provider value={cardData}>
//       {children}
//     </CardContext.Provider>
//   );
// }


import { CardProvider } from './cardContext';
import CustomCard from './CustomCard';

function App() {
  return (
    <CardProvider>
      {/* Your other components */}
      <CustomCard />
    </CardProvider>
  );
}

export default App;


