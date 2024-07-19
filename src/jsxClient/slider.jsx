import React, { useState } from 'react';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
import Modal from './modal';
import '../scripts_css/slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className='SliderTitleDiv'>
        <h2 className='SliderTitle'>Most Common Products</h2>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="LinktoProducts"
            onClick={() => handleCardClick(product)}
          >
            <div className="StoreCards">
              <img className="SliderImage" src={product.ImgPath} alt={product.Name} />
              <h3>{product.Name}</h3>
              <p>${product.Price}</p>
            </div>
          </div>
        ))}
      </Slider>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductSlider;
