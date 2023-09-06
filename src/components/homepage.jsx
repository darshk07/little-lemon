import React from 'react'
import { FoodCard } from './foodcard'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <div className="hero-strap"></div>
            <div className="brand-bar">
                <div className="h1">Little Lemon</div>
                <div className="h2">Chicago</div>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="btn" onClick={() => { navigate('/booking') }}>Reserve a Table</button>
            </div>
            <img className="main-img" src="restauranfood.jpg" alt="" />

            <div className="menu-heading">
                <p>This Weeks Specials!</p>
            </div>
            <button className="btn menu-btn">Online Menu</button>
            <div className="menu">
                <FoodCard imgsrc="greeksalad.jpg" name="Greek salad" price="$12.99" />
                <FoodCard imgsrc="bruchetta.svg" name="Bruchetta" price="$5.99" />
                <FoodCard imgsrc="lemondessert.jpg" name="Lemon Dessert" price="$5.00" />
            </div>
        </div>
    )
}
