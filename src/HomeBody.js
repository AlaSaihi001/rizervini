import React from 'react'
import "./App.css" 
import Footer from './Footer'


export default function HomeBody() {
    return (<>
        <section className='secc'></section>
        <div className="text">
            <h2>Discover the best reservation services in <br /><span>TUNISIA</span></h2>
        </div>
        <div className="sec2"></div>
        <div className='HomeContainer1'>
            <div >
                <h1>Discover the easiest way to reserve your favorite venues in Tunisia</h1><br/><br/>
                <h4>Our reservation service simplifies the process, saving you time and effort.</h4>
                <div className='text1'><br/>
                    <div className='c1'><br/><br/><br/>
                        <h3>Convenient</h3><br/>
                        <p>Browse through a wide selection of venues and book with confidence.</p>
                    </div>
                    <div><br/><br/><br/>
                        <h3>Reliable</h3><br/>
                        <p>Count on us to ensure a seamless reservation experience for your special occasion.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="Hotel1.jpg" alt='1' className='img1'/>
            </div>
        </div>
        <div className="container">
            <h1 className='title'>STATE OF INTEREST</h1>
            <div className="place-to-go">
                <div class="row">
                    <img src="/kasserine.jpg" className='Kasserine'  alt="" />
                    <h3>Kasserine</h3>
                </div>
                <div class="row">
                    <img src="/sousse.webp" className='Sousse'  alt="" />
                    <h3>Sousse</h3>
                </div>
                <div class="row">
                    <img src="/Sfax.jpg" className='Sfax'  alt="" />
                    <h3>Sfax</h3>
                </div>
                <div class="row">
                    <img src="/Tunis.jpg" alt="" />
                    <h3>Tunis</h3>
                </div>
                <div class="row">
                    <img src="/monastir.jpg" alt="" />
                    <h3>Monastir</h3>
                </div>
                <div class="row">
                    <img src="/Mahdia.jpg" alt="" />
                    <h3>Mahdia</h3>
                </div>
                <div class="row">
                    <img src="/Kairouan.webp" alt="" />
                    <h3>Kairouan</h3>
                </div>
                <div class="row">
                    <img src="/Tozeur.jpg" alt="" />
                    <h3>Tozeur</h3>
                </div>
            </div>
            <div className='find'><button className="btn-more">Find out more</button></div>
        </div>
        
    
        <div className="container">
            <h1 className='title'>Image Gallery</h1>
            <h2>Browse through our stunning collection of past event photos</h2>
        <div className="gallery">
            <div>
                <img alt='' src='photo1.jpg' width={400}></img><br/>
                <img alt='' src='photo2.jpg'></img><br/>
                <img alt='' src='photo3.jpg'></img>
            </div>
            <div>
                <img alt='' src='photo7.jpg'></img><br/>
                <img alt='' src='photo8.png'></img><br/>
                <img alt='' src='photo9.webp'></img><br/>
                <img alt='' src='photo10.jpg'></img><br/>
            </div>
            <div>
                <img alt='' src='photo4.jpg'></img><br/>
                <img alt='' src='photo5.jpg'></img><br/>
                <img alt='' src='photo6.jpg'></img>
            </div>
        </div>
        <div className='find'><button className="btn-more">Find out more</button></div>
        </div>
    
        <div className="newsletter">
            <div className="newsletter__bg grid">
                <div>
                <h2 className="newsletter__title">CONTACT US</h2>
                <p className="newsletter__description">
                Feel free to get in touch with us, we will be happy to answer any questions.
                </p>
                </div>
        
                <form action="" className="newsletter__subscribe">
                <input type="email" placeholder="Enter your email" className="newsletter__input" />
                <div className="button"><a href="#" className="btn">SUBSCRIBE</a></div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>

    )

    
}




































/*
        <>
            <div className='HomeContainer1'>
                <div >
                    <h1>Discover the easiest way to reserve your favorite venues in Tunisia</h1><br></br>
                    <h4>Our reservation service simplifies the process, saving you time and effort.</h4>
                    <div className='text1'>
                        <div>
                            <h3>Convenient</h3>
                            <p>Browse through a wide selection of venues and book with confidence.</p>
                        </div>
                        <div>
                            <h3>Reliable</h3>
                            <p>Count on us to ensure a seamless reservation experience for your special occasion.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={'https://i.pinimg.com/564x/f6/db/30/f6db30884547eb1b60764f658a513d7c.jpg'} alt='1' className='img1'/>
                </div>
            </div>
            <div className='HomeContainer1'>
                <div>
                    <p>Discover</p>
                    <h1>Find the Perfect Reservation for You</h1>
                </div>
                <div>
                    <h3><br></br>Welcome to our reservation website, where you can easily book a variety of services for your upcoming events. Whether you need a gym, wedding hall, event venue, birthday party location, or wedding equipment, we have you covered. Our user-friendly platform makes it simple to find and reserve the perfect option for your needs.</h3>
                </div>
            </div>
            <div className='collection1'>
                <div>
                    <img src='' alt='' className='img2'/>
                    <h3>Gym Reservations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src='' alt='' className='img2'/>
                    <h3>Wedding Hall Reservations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src='' alt='' className='img2'/>
                    <h3>Event Reservations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div>
                    <img src='' alt='' className='img2'/>
                    <h3>Medium length section heading goes here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>

        </>
}*/