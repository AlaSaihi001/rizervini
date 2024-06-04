import React from 'react'
import "./App.css"
import Footer from './Footer'

export default function AboutUs() {
  return (
    <><br/><br/><br/>
      <section className='sec3'></section>
      <div className='team'>
        <div>
          <h1>Meet Our Team</h1><br/>
          <p>We are a dedicated team committed to exceptional service.</p>
        </div>
        <div className='team-members'>
          <div  className="member">
            <img alt='' src='./AlaSaihi.jpg'/>
            <h2>Ala Eddine Saihi</h2>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div  className="member">
            <img alt='' src='./JawaherFakraoui.jpg'/>
            <h2>Jawaher Fakraoui</h2>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>            
          </div>
          <div  className="member">
            <img alt='' src='./RihabDakhlaoui.jpg'/>
            <h2>Rihab Dakhlaoui</h2>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>            
          </div>
          <div  className="member">
            <img alt='' src='./SarraOuni.jpg'/>
            <h2>Sarra Ouni</h2>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>            
          </div>
        </div>
      </div>


      <div className='contact-bloc'>
        <div>
          <h1>Contact Information</h1><br/>
          <p>Have any questions or want to make a reservation? Get in touch with us!</p><br/><br/>
          <div className='iconsss'>
            <i class="fa-solid fa-envelope"></i>
            <h2>Email</h2>
            <p>Send us an email</p>
            <p className='und'>info@rizervini.tn</p>
            <br/>
            <i class="fa-solid fa-phone"></i>
            <h2>Phone</h2>
            <p>Call us now</p>
            <p className='und'>+216 99 999 999</p>
            <br/>
            <i class="fa-solid fa-location-dot"></i>
            <h2>Office</h2>
            <p>Visit ower location</p>
            <p className='und'>123 Sample ST, Tunisia</p>
            <br/>
          </div>
        </div>
        <div>
          <img alt='' src='./Hotelf.jpeg'/>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </>
  )
}
