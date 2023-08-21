import React from 'react'

export const FoodCard = (props) => {
  return (
    <div className="foodcard">
      <img src={props.imgsrc} alt="" />
      <div className="description">
        <div className="name">{props.name}</div>
        <div className="price">{props.price}</div>
        <div className="about">The famous greek salad of crispy lettuce, peppers,
          olives and our Chicago style feta cheese, garnished with crunchy garlic
          and rosemary croutons.</div>
        <div className="order">Order a Delivery <i class="fa-solid fa-truck"></i></div>
      </div>
    </div>
  )
}
