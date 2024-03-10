import React from 'react'
import './Footer.css'
import deleviryboy from '../Assert/delivery-boy.svg'

const Footer = () => {
  return (
<>
<section className='footer'>
<footer>
  <div className="container">
  {/* <img src={deleviryboy} alt=""  className='deleviryboy'/> */}
    <div className="sec aboutus">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ducimus quam exercitationem, a esse placeat? Cum excepturi facilis iusto architecto.</p>
      <ul className='sci'>
      <li><a href="#"></a><i class="fa-brands fa-x-twitter"></i></li>
      <li><a href="#"></a><i class="fa-brands fa-facebook"></i></li>
      <li><a href="#"></a><i class="fa-brands fa-instagram"></i></li>
      <li><a href="#"></a><i class="fa-brands fa-whatsapp"></i></li>
      </ul>
    </div>
    <div className="sec quicklinks">
      <h2>Support</h2>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="sec quicklinks">
      <h2>Shop</h2>
      <ul>
        <li><a href="#">Rice Menu</a></li>
        <li><a href="#">Coffee</a></li>
        <li><a href="#">BBQ Chicken</a></li>
        <li><a href="#">Dessert</a></li>
      </ul>
    </div>
    <div className="sec contacte">
      <h2>Conatct us</h2>
      <ul className='info'>
<li>
  <span><i class="fa-solid fa-phone"></i></span>
 <p> <a href="#">+91 565258782</a> </p>
</li>
<li>
  <span><i class="fa-solid fa-envelope"></i></span>
 <p> <a href="maiilto:foodie@gmail.com">foodie@gmail.com</a> </p>
</li>
      </ul>
    </div>
  </div>
</footer>
<div className="copyrightText">
  <p>Copyright 2023 Foodie | All Rights Reserved</p>
</div>

</section>
</> 
 )
}

export default Footer