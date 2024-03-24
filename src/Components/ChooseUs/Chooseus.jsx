import React from 'react';
import './Chooseus.css';
import offerimg from '../Assert/offer_img.png';
import { Col, Container, Row } from 'reactstrap';
import freeship from '../Assert/free-shipping-icon.png';
import cash from '../Assert/credit-card-icon.png';
import food from '../Assert/dish-spoon-knife-icon.png';

const Chooseus = () => {
  return (
    <>
    <Container>
      <section className='mt-5' id='about'>
        <Row>
          <Col lg='6' md='6' className='d-flex align-item-center justify-content-center'>
            <img src={offerimg} alt="" />
          </Col>
          <Col lg='6' md='3'>
            <div className="choose_content">
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offer you</h2>
              <p>We pride ourselves in providing top-notch services and features to enhance your experience.</p>
            </div>
            <div className="features mt-4">
              <div className="festure1 d-flex align-items-center gap-5">
                <div className="single_feature">
                  <span><img className='freeship' src={freeship} alt="" /></span>
                  <h6>Free Home Delivery</h6>                </div>
                <div className="single_feature">
                  <span><img className='cash' src={cash} alt="" /></span>
                  <h6>Easy Returns & Refunds</h6>
                </div>
                <div className="single_feature">
                  <span><img className='food' src={food} alt="" /></span>
                  <h6>Hygienic Food Practices</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      </Container>
    </>
  );
}

export default Chooseus;
