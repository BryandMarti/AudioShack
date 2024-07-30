import { useEffect, useState } from 'react';
import '../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';
import '../scripts_css/audioslave.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [productType, setProductType] = useState('');
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.Id]) {
        updatedCart[product.Id].quantity += 1;
      } else {
        updatedCart[product.Id] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId].quantity += 1;
      return updatedCart;
    });
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  const calculateTotalCost = () => {
    return Object.values(cart).reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  const renderProducts = (products) => {
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
              <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCart = () => {
    const cartItems = Object.values(cart);
    if (cartItems.length === 0) return <p>Your cart is empty</p>;

    return (
      <div className="cart">
        {cartItems.map((item) => (
          <div key={item.Id} className="cart-item">
            <p>{item.Name} - ${item.Price}</p>
            <div className="cart-item-controls">
              <button onClick={() => decrementQuantity(item.Id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.Id)}>+</button>
            </div>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total: ${calculateTotalCost().toFixed(2)}</h3>
        </div>
      </div>
    );
  };

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
        <div className="cart-container">
        {renderCart()}
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
            <button onClick={(e) => { e.stopPropagation(); addToCart(selectedProduct); }}>Add to Cart</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;
