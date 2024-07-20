import { useEffect, useState } from 'react';
import '../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';
import '../scripts_css/audioslave.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [productType, setProductType] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Data fetched is not an array:", data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error(err);
        setProducts([]);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleTypeChange = (e) => {
    setProductType(e.target.value);
  };

  function renderProducts(products) {
    let filteredProducts = [...products];

    if (sortOrder) {
      filteredProducts.sort((a, b) => sortOrder === 'lowToHigh' ? a.Price - b.Price : b.Price - a.Price);
    }

    if (productType) {
      filteredProducts = filteredProducts.filter(product => product.TypeOf.split(', ').includes(productType));
    }

    return (
      <div>
        <BouncyBalls />
        <div className="products-grid">
          {filteredProducts.map((product, i) => (
            <div key={i} className="Card" onClick={() => handleProductClick(product)}>
              <div>
                <img src={product.ImgPath} alt={product.Name} />
              </div>
              <h2>{product.Name}</h2>
              <p>${product.Price}</p>
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
        <div>
          <label>Sort by Price:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Lowest to Highest</option>
            <option value="highToLow">Highest to Lowest</option>
          </select>
        </div>
        <div>
          <label>Filter by Type:</label>
          <select value={productType} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Speaker">Speaker</option>
            <option value="Wired">Wired</option>
            <option value="WaterProof">WaterProof</option>
            <option value="Surround">Surround Sound</option>
            <option value="NoiseCancel">Noise Canceling</option>
            <option value="Gaming">Gaming</option>
            <option value="HeadPhones">Headphones</option>
            <option value="Special">Special</option>
          </select>
        </div>
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
