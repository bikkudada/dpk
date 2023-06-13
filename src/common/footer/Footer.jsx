import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DPK</h1>
            <p>DPK Ecommerce is a thriving online platform that offers a comprehensive range of products and services to meet the diverse needs of its customers. With a strong emphasis on convenience, reliability, and customer satisfaction, DPK Ecommerce has established itself as a trusted destination for online shopping.

At its core, DPK Ecommerce functions as a virtu</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>balaju,16,kathmandu </li>
              <li>Email: bikal.dawadi@gmail.com</li>
              <li>Phone: +977 98127362329</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
