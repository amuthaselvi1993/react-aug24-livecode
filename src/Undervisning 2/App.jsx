// Props
import ProductCard from "./ProductCard";

function App() {
  const productInfo = [
    {
      name: 'Acer Chromebook 315 15,6" FHD',
      specs: "Celeron N4020, 4 GB RAM, 64 GB eMMC, Google Chrome OS",
      price: "1 990,-",
    },
    {
      name: 'Samsung Galaxy Chromebook Go 14" HD',
      specs: "Celeron N4500, 4 GB RAM, 32 GB eMMC, Google Chrome OS",
      price: "3 990,-",
    },
  ];

  return (
    <>
      <h1>Laptops:</h1>

      {productInfo.map((product) => {
        return <ProductCard data={product} />;
      })}
    </>
  );
}

export default App;
