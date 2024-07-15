import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  function renderProducts() {
    return products.map((product, i) => (
      <div key={i}>
        <h3>{product.Name}</h3>
        <p>{product.Price}</p>
        <p>{product.Description}</p>
        <img src={product.ImgPath} alt={product.Name} />
      </div>
    ));
  }

  return (
    <main>
      <h1>Products</h1>
      {renderProducts()}
    </main>
  );
}

