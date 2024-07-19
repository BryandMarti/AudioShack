import { useEffect, useState } from 'react';
import '../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';
import '../scripts_css/audioslave.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  function renderProducts(products) {
    return (
      <div>
        <BouncyBalls />
        <div className="products-grid">
          {products.map((product, i) => (
            <div key={i} className="Card" onClick={() => handleProductClick(product)}>
              <div>
                <img src={product.ImgPath} alt={product.Name} />
              </div>
              <h2>{product.Name}</h2>
              <p>${product.Price}</p>
              <details>
                <summary>Description</summary>
                <p>{product.Description}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className='ProductsFilter'>
        <h1>Products</h1>
      </div>
      {renderProducts(products)}

      {selectedProduct && (
        <div className="popup">
          <div className="Content">
            <span className="close-button" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedProduct.Name}</h2>
            <img src={selectedProduct.ImgPath} alt={selectedProduct.Name} />
            <p>${selectedProduct.Price}</p>
            <p>{selectedProduct.Description}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;
