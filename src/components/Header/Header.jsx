import LogoIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <LogoIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        <input
          type="text"
          name="header__searchInput"
          className="header__searchInput"
          placeholder="Input Heare"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemOne">Hello Guset</span>
          <span className="nave__itemTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemOne">Your</span>
          <span className="nave__itemTwo">Shop</span>
        </div>

        <div className="nav__itmBasket">
          <ShoppingBasketIcon />
          <span className="nav__basketCount nav__itemTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
