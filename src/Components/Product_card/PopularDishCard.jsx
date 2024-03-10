import React from 'react'
import './ProductCard.css'
import {useCart} from "react-use-cart"
const PopularDishCard = (props) => {
    const{title,cover,desc}= props.items
  return (
<>
<div className="single_product card__article">
            <div className="product-img d-flex align-items-center justify-content-center  ">
                <img src={cover} alt="" />
            </div>
            <div className="product_content">
                <div className="rating text-center">
                    <span><i class="ri-star-line"></i></span>
                    <span><i class="ri-star-line"></i></span>
                    <span><i class="ri-star-line"></i></span>
                    <span><i class="ri-star-line"></i></span>
                    <span><i class="ri-star-line"></i></span>

                </div>
                <h6 className='text-center'>{title}</h6>
                <p>{desc}</p>
                </div>
                </div>
</>
    )
}

export default PopularDishCard