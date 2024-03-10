import React, { useRef, useState} from 'react'
import "./Header.css"
import cart from '../Assert/cart.png'
import {Container} from "reactstrap"
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

// import { useCart } from 'react-use-cart'

// const{
//     totalItems
//   }= useCart();

// // const nav_list = [
// //     {
// //         diplay:'Home',
// //         url : '#'
// //     },
// //     {
// //         diplay:'About us',
// //         url : '#'
// //     },
// //     {
// //         diplay:'Menu',
// //         url : '#'
// //     },
// //     {
// //         diplay:'Recipe',
// //         url : '#'
// //     },
// //     // {
// //     //     diplay:'Contact Us',
// //     //     url : '#'
// //     // },
// ]


const Header = ({ scrollToSection, popularMenuRef, reviewsRef, menueRef }) => {
    
    const [transparent,setTransparent] = useState('header')
    const addbg =() => {
      if(window.scrollY >= 10){
        setTransparent('header activeHeader')
      }
      else{
        setTransparent('header')
      }
    }
    window.addEventListener('scroll',addbg);

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle("active");

    const{
        totalUniqueItems,
      }= useCart();
    
  return (
<>
<header className={transparent}>
    <Container>
        <div className="navigation">
            <div className="logo">
                <h2>
                    <span><i class="fa-solid fa-utensils"></i></span>Foodie
                </h2>
            </div>
            <div className="nav_menu" ref={menuRef}>
                <div className="nav_list_wrapper gap-5">
                <ul className="nav_list " onClick={menuToggle} rel={popularMenuRef}>
                    {/* {
                        nav_list.map((items,index)=>(
                            <li className="nav_item"key={index}><a href={items.url} onClick={menuToggle} >{items.diplay}</a></li>
                        ))
                    } */}

                    <li><Link to='/' >Home</Link></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#" >Contact us</a></li>
                    <li><a href="#" >blog</a></li>
                    
                </ul>
                <div className="menu_right">
                <div className="custom_search">
                  <input type="text" placeholder='search items...' />
                  <span><i class="fa-solid fa-magnifying-glass"></i></span>  
                </div>
            </div>
            </div>
            </div>

            <div className="nav-login-cart">
        {/* <button>LogIn</button> */}
        <Link to='/cart'><img src={cart} alt="" /></Link> 
        <div className="nav-cart-count">{totalUniqueItems}</div>
    </div>
            
            <div className="mobile_menu" onClick={menuToggle}>
                <span><i class="fa-solid fa-bars"></i></span>
            </div>
        </div>
    </Container>

</header>

</>


    )
}

export default Header