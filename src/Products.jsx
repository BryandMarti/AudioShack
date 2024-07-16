import { useEffect, useState } from 'react';
import './scripts_css/audioslave.css'
import Home from './home';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  function renderProducts(products) {
    return (
      <div className="products-grid">
        {products.map((product, i) => (
          <div key={i} className="product-card">
            <h3>{product.Name}</h3>
            <p>{product.Price}</p>
            <p>{product.Description}</p>
            <img src={product.ImgPath} alt={product.Name} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <main>
      <Home/>
      <h1>Products</h1>
      {renderProducts(products)}
    </main>
  );
}

export default Products;
