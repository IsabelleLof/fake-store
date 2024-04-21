import React from 'react';
import { Link } from 'react-router-dom';
import productSearch from '../Assets/search-button.png';
import './Navbar.css';

export default function Navbar (props) {


    return (
        <div className='navbar'>
            <div>
                <Link to='/' >
                    <button className='navbar-title'>Fake Store</button>
                </Link>
                <ul className='navbar-links-container'>
                    <li className='navbar-links'>Men's</li>
                    <li className='navbar-links'>Women's</li>
                    <li className='navbar-links'>Children</li>
                    <li className='navbar-links'>Sport</li>
                </ul>
            </div>
            <div>
                <div className='search-container'>
                    <input onChange={props.handleProductSearchInput} value={props.productSearchValue} className='search-input' placeholder='Search product name...' />
                    <button onClick={props.productSearchSubmit} className='search-button'>
                        <img src={productSearch} alt='product button' />
                    </button>
                </div>
                <div className='navbar-link-buttons-container'>
                    <Link to='/cart' >
                        <button className='navbar-link-buttons'>View Cart</button>
                    </Link>
                    <Link to='/contact' >
                        <button className='navbar-link-buttons'>Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}