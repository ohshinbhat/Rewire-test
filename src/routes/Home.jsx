import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../App.css'
import ss1 from '../assets/slider1.jpg'
import ss2 from '../assets/slider2.jpg'
import ss3 from '../assets/slider3.jpg'
import ss4 from '../assets/slider4.jpg'
import ss5 from '../assets/slider5.jpg'
import Contact from './Contact'


const Home = () => {
    return (
        <main >
            <div className='container'>
                <section className='home'>
                    <nav className='navbar'>
                        <div className='nav-left'>
                            <img src={logo} className='logo' />
                            <div className='text-l'>Rewire</div>
                        </div>
                        <div className='nav-right'>
                            <Link to={`about`} className='nav-links'>About</Link>
                            <Link to={`blogs`} className='nav-links'>Blog</Link>
                            <a className='contact-btn'><Contact /></a>
                            <a href='https://bit.ly/rewire-brain-training' target="_blank" className='get-app'>Get the App</a>
                        </div>

                    </nav>
                    <div>
                        <header className="hero">
                            <div className="header1">Rewire Your Mind</div>
                            <div className="header2">Brain Training Personalized to your needs</div>
                            <button>Try For Free</button>
                        </header>
                    </div>


                </section>
                <section className='slider-container'>
                    <div className="slidertxt">
                        <div className="sliderh1">Fun. Engaging. Easy to Use.</div>
                        <div className="sliderh2">Games that are backed by Science.</div>
                    </div>
                    <div className='slider'>
                        <div className="slider-track">
                            <div className="slide">
                                <img src={ss1} />
                            </div>
                            <div className="slide">
                                <img src={ss2} />
                            </div>
                            <div className="slide">
                                <img src={ss3} />
                            </div>
                            <div className="slide">
                                <img src={ss4} />
                            </div>
                            <div className="slide">
                                <img src={ss5} />
                            </div>
                            <div className="slide">
                                <img src={ss1} />
                            </div>
                            <div className="slide">
                                <img src={ss2} />
                            </div>
                            <div className="slide">
                                <img src={ss3} />
                            </div>
                            <div className="slide">
                                <img src={ss4} />
                            </div>
                            <div className="slide">
                                <img src={ss5} />
                            </div>
                        </div>
                    </div>


                </section>
                <section className='works'>
                    <div className='work-left'>
                        <header className='header3'>How Rewire Works</header>
                        <p className='header4'>
                            <span className='line'>Rewire&apos;s team of psychiatrists know that everyone&apos;s different, and not all of us can afford to sit for hours a day playing games. <br /></span>
                            <span className='line'>So we came up with a system that takes <span className='boldtxt'>only 10 minutes a day.</span> <br /></span>
                            <span className='line'>Our carefully crafted games target key areas such as memory, attention, problem-solving, and more. By consistently challenging your brain, you'll notice improved focus, enhanced memory retention, and sharper cognitive skills in your everyday life. <br /></span>

                        </p>
                        <button className='push'>Get Started</button>
                    </div>
                    <div className='work-right'>
                        <img />
                    </div>

                </section>

            </div>

            <div className='outlet'>
                <Faq />
                <Footer />
            </div>



        </main>
    )
}

export default Home