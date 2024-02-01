import "./Product.css";
import PropTypes from "prop-types";

import StarIcon from "@mui/icons-material/Star";
const Product = ({ title, price, rating, image }) => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p className="product__tital">{title}</p>
          <small>$</small>
          <strong className="product__price">{price}</strong> <br />
          <div>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="product__rating" />
              ))}
          </div>
        </div>
        <img src={image} alt="" className="product__imgage" />
        <button className="btn__addProduct">Add to basket</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.node,
  price: PropTypes.node,
  rating: PropTypes.node,
  image: PropTypes.node,
};

export default Product;
