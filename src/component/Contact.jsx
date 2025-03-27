import React from 'react'
import {  FaMailBulk, FaMap, FaPhone, FaSearchLocation } from 'react-icons/fa'
import { Form } from 'react-router-dom'
import Product from '../reusable/Product'

const Contact = () => {
  return (
    <div>
        <section className="about-section">
            <h1 className="about-title">Contact Us</h1>
        </section>
        <section className='contact-section'>
            <div>
                <FaSearchLocation className='icon'/>
                <h1>Physical Address <br/> <span>Kubwa Abuja, Nigeria</span></h1>
            </div>
            <div>
                <FaMailBulk className='icon'/>
                <h1>Email Address <br/> <span>Tobiojuolape23@gmail.com</span></h1>
            </div>
            <div>
                <FaPhone className='icon'/>
                <h1>Phone Numbers <br/> <span>(+234) 8131225692</span></h1>
            </div>
        </section>
        <section>
            
        </section>
        <Product/>
    </div>
  )
}

export default Contact