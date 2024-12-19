// useState er en av flere hooks i React.
// useEffect er en annen.

// useEffect lar oss kjøre "side code" etter kriterier vi gir.
// f.eks definere kode som KUN skal kjøre når component loader
// og ikke hver gang den re-rendrer.

/* useEffect(() => {
    
  });  ---> useEffect kjøres på hver render*/

/* useEffect(() => {
    
  }, []);  ---> useEffect kjøres KUN når komponenten mountes*/

/* useEffect(() => {
    
  }, [count]);  ---> useEffect kjøres KUN når 'count' oppdateres*/

import { useState, useEffect } from "react";
export default function App() {
  const fruitsData = [
    {
      id: 1,
      name: "Apple",
      color: "Red",
      calories: 52,
      price: 1.5,
    },
    {
      id: 2,
      name: "Banana",
      color: "Yellow",
      calories: 96,
      price: 0.8,
    },
    {
      id: 3,
      name: "Orange",
      color: "Orange",
      calories: 43,
      price: 1.2,
    },
    {
      id: 4,
      name: "Grapes",
      color: "Green",
      calories: 67,
      price: 2.5,
    },
    {
      id: 5,
      name: "Mango",
      color: "Yellow",
      calories: 60,
      price: 1.8,
    },
    {
      id: 6,
      name: "Strawberry",
      color: "Red",
      calories: 33,
      price: 2.0,
    },
  ];
  const [fruits, setFruits] = useState(fruitsData);
  const [newName, setNewName] = useState();
  const [newColor, setNewColor] = useState();
  const [newPrice, setNewPrice] = useState();

  function handleAddFruit() {
    const fruitToAdd = {
      name: newName,
      color: newColor,
      price: newPrice,
    };
    setFruits((prev) => [...prev, fruitToAdd]);
  }

  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <h3>{fruit.name}</h3>
              <p>{fruit.color}</p>
              <strong>{fruit.price}</strong>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Enter fruit name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter fruit color"
        onChange={(e) => setNewColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter fruit price"
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <p>{newName}</p>
      <p>{newColor}</p>
      <p>{newPrice}</p>
      <button onClick={handleAddFruit}>Add fruit</button>
    </>
  );
}
