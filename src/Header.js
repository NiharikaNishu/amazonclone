import React from 'react';
import logo from'./images/logo.jpg';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ShoppingCart } from '@material-ui/icons';

function Header() {
    return (
        <nav className="header">
        {/* logo */}
        <Link to="/login">
            <img className="header_logo" src = {logo}></img>
        </Link>

        {/* search-box */}
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>

        {/* buttons */}
        <div className="header_nav">
          {/* sign in & login */}
          <Link to="/login" className="header_link">
            <div className="header_option">
                <span className="header_optionlineone">Hello,</span>
                <span className="header_optionlinetwo">Sign In</span>
            </div>
          </Link>
          {/* return & order */}
          <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionlineone">Return</span>
                <span className="header_optionlinetwo">& Orders</span>
            </div>
          </Link>
          {/* made in india */}
          <Link to="/" className="header_link">
            <div className="header_option">
                <span className="header_optionlineone">Made in </span>
                <span className="header_optionlinetwo">INDIA</span>
            </div>
          </Link>
           {/* cart */}
           <Link to="/checkout" className="header_link">
            <div className="header_optioncart">
              <ShoppingCart />
              <span classname="header_optionlinetwo header_cartCount">0</span>
            </div>
           </Link>
        </div>
        </nav>
    )
}

export default Header 
