import React from 'react'
import './ProductCard.css'
import {useCart} from "react-use-cart"
import './Pro.css'
import cart from'../Assert/empty-cart.png'
const ProductCard = (props) => {
    const { addItem }= useCart();
    const{title,cover,desc,price}= props.items
  return (
<>
<div className="single_product card__article">
            <div className="product-img d-flex align-items-center justify-content-center">
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
                {/* <div className="d-flex align-items-center justify-content-between">
                    <span className='price'>Price:$ <span>{price}</span></span>
                    <span onClick={()=> addItem(props.items)}><i class="ri-shopping-cart-fill"></i></span>
                </div> */}
              <p><span className='price'>Price:₹ <span>{price}</span></span></p>
                 <div className="card__data">
               <span className='card__desc' onClick={()=> addItem(props.items)}><img style={{width:"30px"}} src={cart} alt="" /> ADD TO CART</span>
                </div>
                </div>
                </div>
</>
    )
}

export default ProductCard