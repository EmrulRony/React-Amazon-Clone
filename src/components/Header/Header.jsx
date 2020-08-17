import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <nav className="header">
            <Link to='/login'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                {/* 1st link */}
                <Link to='/login' className='header__link'>
                    <div className="header__option">
                        <span>Hello Rony</span>
                        <span>Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
