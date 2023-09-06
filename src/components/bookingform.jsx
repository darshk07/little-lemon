import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BookingForm = () => {

    const navigate = useNavigate();
    // const res = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js');
    // console.log(res);
    const functionHandler = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const time = e.target.time.value;
        const guests = e.target.guests.value;
        const occasion = e.target.occasion.value;
        navigate('/reservations');
    }

    return (
        <div className="booking-page">
            <h1>Register a Table</h1>
            <div className="booking-form">
                <form onSubmit={functionHandler}>
                    <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" name="date" />
                    <label for="res-time">Choose time</label>
                    <select id="res-time" name="time">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" />
                    <label for="occasion">Occasion</label>
                    <select id="occasion" name="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button className="btn" type="submit" onClick={()=>{navigate('/')}}>Make your Reservation</button>
                </form>
            </div>
        </div>
    )
}
