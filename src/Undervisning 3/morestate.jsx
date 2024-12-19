// State - Hva er state?
// useState - en React hook
import { useState } from "react";

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

  // Fjern en frukt fra listen når vi trykker på den.

  function handleRemove(id) {
    setFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));
  }
  function handleAddFruit() {
    const pear = {
      id: 6,
      name: "Pear",
      color: "Green",
      calories: 33,
      price: 3.0,
    };
    setFruits((prevFruits) => [...prevFruits, pear]);
  }
  return (
    <>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id} onClick={() => handleRemove(fruit.id)}>
              <h3>{fruit.name}</h3>
              <p>{fruit.color}</p>
              <strong>{fruit.price}</strong>
            </li>
          );
        })}
      </ul>
      <button onClick={handleAddFruit}>Add a fruit!</button>
    </>
  );
}
