import React from 'react'
import "./Car.css"
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap'
import Home from '../Pages/Home'
import { useCart } from 'react-use-cart'
import empty from '../Assert/shopping.png'
// import { useNavigate  } from "react-router-dom";

const handleSubmit =(Event) =>{
    Event.preventDefault();
}

// const navigate = useNavigate();

// const handleBookAppointmentClick = () => {
//   navigate("/Home");
// };


const shippingThreshold = 300; // Set your shipping threshold here
  const shippingFee = 150; 

const Car = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }= useCart();

    const getTotalPriceOfItem = (itemId) => {
        let total = 0;
        items.forEach(item => {
            if (item.id === itemId) {
                total += (item.quantity * item.price);
            }
        });
        return total;
        
    };

    if(isEmpty) return <h1 className='text-center  cart_empty'> <img  style={{width:"250px"}} src={empty} alt="" /> Your CART is EMPTY</h1>
    
    return (
        
<>
<Container className='cart-container'>
<link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
<div class="container bootstrap snippets bootdey">
    <div class="col-md-9 content">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-info panel-shadow">
                    <div class="panel-heading">
                        <h3>
                            <img class="img-circle img-thumbnail" src="https://bootdey.com/img/Content/user_3.jpg"/>
                           <span>Leo Das</span> 
                        </h3>
                    </div>
                    <div class="panel-body"> 
                        <div class="table-responsive">
                        <table class="table">
                            <thead>

                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total Price</th>
                            </tr>
                            </thead>
                            <tbody>
                    {items.map((item,index)=>{ 
                        return(
                                <tr key={index}>
                                    <td><img src={item.cover} class="img-cart"/></td>
                                    <td><strong>{item.title}</strong><p>{item.desc}</p></td>
                                    <td>
                                    <form class="form-inline" onSubmit={handleSubmit}>
                                        <input class="form-control" type="text" value={item.quantity}
                                        />
                                        <button class="btn btn-default" 
                                        onClick={()=> updateItemQuantity(item.id,item.quantity +1)}
                                        > +
                                        </button>
                                        <button class="btn btn-default"onClick={()=> updateItemQuantity(item.id,item.quantity -1)} > -
                                        </button>
                                        <a href="#" class="btn btn-primary" onClick={()=> removeItem(item.id)}><i class="fa fa-trash-o"></i></a>
                                    </form>
                                    </td>
                                    <td>₹{item.price}</td>
                                    <td>₹{getTotalPriceOfItem(item.id)}</td>
                                </tr>
                               )
                            })} 
                                <tr>
                                    <td colspan="6">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Total Product</td>
                                    <td>{totalItems}</td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right">Total Shipping Fee</td>
                                    <td>
                                        {cartTotal >= shippingThreshold ? `₹${shippingFee}` : "Free"}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="text-right"><strong>Total</strong></td>
                                    <td>₹{cartTotal+20}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
<Link to="/menu"><a href="#" class="btn btn-success mt-4 "><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Continue Shopping</a>
</Link>
                <a href="#" class="btn btn-primary pull-right mt-4">Next<span class="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        </div>
    </div>
</div>
</Container>
</>
  )
}

export default Car