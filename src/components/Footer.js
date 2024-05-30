import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fa fa-facebook-f"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </div>
        <div class="credit">
          created by <span>Muhammad Ahsan</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
