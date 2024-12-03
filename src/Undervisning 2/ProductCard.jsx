export default function Card({ data: { name, specs, price } }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{specs}</p>
      <h1>{price}</h1>
    </>
  );
}
