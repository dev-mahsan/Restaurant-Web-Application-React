import React, { createRef, useRef } from 'react'
import { cart } from "../Data"

const Navbar = () => {

    //When user clicks on search icon this method will be called to show separately the search bar

    //we use useRef, when we want to directly interact with the DOM element
    //It allows you to create a reference of that DOM element so that you can access it in your React Component
    const searchRef = useRef()
    const cartRef = useRef()
    const navbarRef = useRef()

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    };

    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    }

    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    }

    return (
        <>
            <header className='header'>
                <div className='store-logo' style={{ letterSpacing: '2px', color: '#fff', fontSize: '1.6rem' }}><span style={{ color: '#fff' }}>/</span>SIDDBISTRO</div>
                <nav className='navbar' ref={navbarRef}>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#menu'>Menu</a>
                    <a href='#products'>Products</a>
                    <a href='#review'>Review</a>
                    <a href='#contact'>Contact</a>
                    <a href='#blogs'>Blog</a>
                </nav>

                <div className='icons'>
                    <div className="fa fa-search" onClick={searchHandler}></div>
                    <div className="fa fa-shopping-cart" onClick={cartHandler}></div>
                    <div className="fa fa-bars" id='menu-btn' onClick={navbarHandler}></div>
                </div>

                <div className="search-form" ref={searchRef}>
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className="fa fa-search"></label>
                </div>

                <div className="cart-items-container" ref={cartRef}>
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index * Math.random()}>
                            <span className="fa fa-times-circle" style={{ fontSize: '20px' }}></span>
                            <img src={item.img} alt="" />
                            <div className="content">
                                <h3>cart item 01</h3>
                                <div className="price">$10.99/-</div>
                            </div>
                        </div>
                    ))}
                    <a href="#" className="btn">
                        checkout now
                    </a>
                </div>
            </header>
        </>
    )
}

export default Navbar