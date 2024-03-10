import React from 'react'
import './Popularmenu.css'
import { Col, Container, Row } from 'reactstrap'
import { menu } from '../Productdata/Productdata'
import PopularDishCard from '../Product_card/PopularDishCard'
const Popularmenu = () => {
  return (
<>
<section className='mt-5'>
<Container>
    <Row>
        <Col lg='12'className='mb-5' >
            <h1>Popular Menu</h1>
            <h2>TASTE BETTER </h2>
        </Col>
        {
menu.map(items=>(
    <Col lg='3'key={items.id}>
<PopularDishCard items={items}/>
    </Col>
))
        }
    </Row>
</Container>
</section>
</>
  )
}

export default Popularmenu