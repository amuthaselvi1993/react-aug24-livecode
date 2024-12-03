import MyComponent from "./MyComponent";

function App() {
  const fruits = ["Apple", "Banana", "Pear", "Mango", "Peach", "Strawberry"];
  const loggedIn = false;
  return (
    <>
      {loggedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>}
      <MyComponent />
      <ul>
        {fruits.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
