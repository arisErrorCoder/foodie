import React, { useEffect, useState, } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { fastFoodMenuProduct,riceMenuProduct,pizzaMenuProduct,coffeeMenuProduct,dessertMenuProduct } from '../Productdata/Dishes'
import ProductCard from '../Product_card/ProductCard'
import './MenuPack.css'

const MenuPack = () => {


  const [filter,setFilter]=useState('RICE-MENU')
  const[product, setProduct]=useState(riceMenuProduct)
  useEffect(()=>{
if(filter==='RICE-MENU'){
  setProduct(riceMenuProduct)
}
if(filter==='Pizza'){
  setProduct(pizzaMenuProduct)
}
if(filter==='Fast-Food'){
  setProduct(fastFoodMenuProduct)
}
if(filter==='Dessert'){
  setProduct(dessertMenuProduct)
}
if(filter==='Coffee'){
  setProduct(coffeeMenuProduct)
}
  },[filter])

  return (
<>
<section className='menu-pack mt-5' id='MENU'>
    <Container>
        <Row>
            <Col lg='12' className='text-center' id='menu'><h2>Our Menu Pack</h2></Col>
            <Col lg='12' className='text-center mb-5 '><h1>#Order eat repeat</h1></Col>
            <Col lg='12' className='text-center mb-4 button_container'>
                <button className={`btn ${filter ==='Fast-Food'? 'active_button': ''}`}onClick={()=> setFilter('Fast-Food')}>Fast Food</button>
                <button className={`btn ${filter ==='RICE-MENU'? 'active_button': ''}` }onClick={()=> setFilter('RICE-MENU')}>Rice Menu</button>
                <button className={`btn ${filter ==='Pizza'? 'active_button': ''}` }onClick={()=> setFilter('Pizza')}>Pizza</button>
                <button className={`btn ${filter ==='Dessert'? 'active_button':''}`} onClick={()=> setFilter('Dessert')}>Dessert</button>
                <button className={`btn ${filter ==='Coffee'? 'active_button': ''}`}onClick={()=> setFilter('Coffee')}>Coffee</button>
            </Col>
            {
               product.map((items)=>(
                <Col lg='3'key={items.id} className='mb-3'><ProductCard items={items}/></Col>
               )) 
            }
        </Row>
        <div className="button_containe">
        <Button>View All Products</Button>
        </div>
    </Container>
</section>
</>
  )
}

export default MenuPack