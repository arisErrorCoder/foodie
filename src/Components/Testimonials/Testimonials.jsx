import React from "react";
import "./Testimonials.css";
import customer1 from "../Assert/customer/c1.png";
import customer2 from "../Assert/customer/c2.png";
import customer3 from "../Assert/customer/c3.png";
import { Col, Container, Row } from "reactstrap";

const Testimonials = () => {

  const customerReview =[

    {
      username: "Sriganth",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perferendis facere explicabo consequatur assumenda voluptates asperiores laborum accusantium veniam ipsa.",
      pic:customer1,
      nickname:"@koiyapalam"
    },
    {
      username: "Suresh",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati? Eum sed earum facilis explicabo.",
      pic:customer2,
      nickname:"@unknown"
    },
    {
      username: "Sanjay",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, obcaecati? Eum sed earum facilis explicabo.",
      pic:customer3,
      nickname:"@master"
    },
    
  ]
  return (
    <>
<Container>
<section className="testimonials mt-5 ">
  <div className="testimonial-heading">
    <h1>#Our Motivation Pill</h1>
    <h2>What Our Customer Says</h2>
  </div>


{
  customerReview.map((items,index)=>(
  <div className="testimonial-box-conatainer" key={index}>
    <div className="testimonial-box">
      <div className="box-top">
        <div className="profile">
          <div className="profile-img">
            <img src={items.pic} alt="" />
          </div>
          <div className="name-user">
            <strong>{items.username}</strong>
            <span>{items.nickname}</span>
          </div>
          <div className="reviews">
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          <i class="ri-star-line"></i>
          </div>
        </div>
      </div>
      <div className="client-comment">
          <p>{items.review}</p>
        </div>
    </div>
  </div>
  ))
}
</section>
</Container>

    </>
  );
}

export default Testimonials;
