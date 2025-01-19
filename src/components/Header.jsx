import { NavLink } from "react-router";
import "../assets/stylesheets/header.css";

function Header() {
    return (
    <header className="header-class">
        <div className="header-container">
            <div className="header-container-child logo-wrapper">
                <NavLink to="/">
                    {/* <img className="logo" src={logo} /> */}
                    <img className="logo" src="/src/assets/images/cart_logo.png" />
                </NavLink>
            </div>
            
            <div className="header-container-child logo-title">Welcome to G-commerce!</div>
            
            <div className="header-container-child header-nav">
                <input type="text" placeholder="Search ..." />

                <NavLink to="cart">
                    <button>Shopping Cart</button>
                </NavLink>
            </div>
        </div>
    </header>
    );
}

export default Header;