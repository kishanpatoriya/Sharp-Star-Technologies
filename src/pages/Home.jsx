import React from 'react'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import health from '../assets/case-studies-health.jpg'
import bank from '../assets/case-studies-bank.jpg'
import learn from '../assets/case-studies-elearn.jpg'
import homeImg from '../assets/home.png';
import img from '../assets/img-col2.png';
import video from '../assets/45961-447087612.mp4';

function Home() {

    const words = ["Solutions", "Services", "Agency", "Experts"];
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const navigate = useNavigate();     

    const [flippedCard, setFlippedCard] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setAnimate(true);
            }, 300);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const services = [
        {
            id: "web-development",
            icon: "ti-code",
            title: "Web Development",
            desc: "Modern and responsive websites built with the latest technologies, delivering seamless user experiences, fast performance.",
        },
        {
            id: "mobile-app-development",
            icon: "ti-device-mobile", title: "Mobile app development",
            desc: "Powerful Android and iOS applications with modern features, intuitive interfaces, and high performance.",

        },
        {
            id: "Custom software development",
            icon: "ti-cpu", title: "Custom software development",
            desc: "Scalable, customized software solutions that streamline business operations and improve productivity.",

        },
        {
            id: "UI/UX design",
            icon: "ti-brush", title: "UI/UX design",
            desc: "Engaging, user-friendly interfaces that enhance customer satisfaction and create memorable digital experiences",

        },
        {
            id: "E-commerce solutions",
            icon: "ti-shopping-cart", title: "E-commerce solutions",
            desc: "Feature-rich online stores with secure payment integration, inventory management, and seamless shopping.",
        },
        {
            id: "Cloud solutions",
            icon: "ti-cloud", title: "Cloud solutions",
            desc: "Leverage cloud technologies to improve scalability, security, collaboration, and operational efficiency.",

        },
        {
            id: "Digital marketing",
            icon: "ti-trending-up", title: "Digital marketing",
            desc: "Increase brand visibility and attract quality leads through SEO, social media, and online marketing strategies.",

        },
        {
            id: "AI & automation solutions",
            icon: "ti-robot", title: "AI & automation solutions",
            desc: "Automate workflows and enhance decision-making business goals.",

        }
    ]

    const stories = [
        {
            id: 1,
            image: health,
            category: "Healthcare",
            title: "Smart Hospital Management System",
            description: "Improved patient care and operations.",
        },
        {
            id: 2,
            image: bank,
            category: "Fintech",
            title: "Secure Digital Banking Platform",
            description: "Enhanced banking security and UX.",
        },
        {
            id: 3,
            image: learn,
            category: "Education",
            title: "E-Learning Platform For Students",
            description: "Modern online learning ecosystem.",
        },
    ];

    return (
        <>
            {/* hero section */}
            <section id='home'>
                <div className="hero-section"
                >
                    <video
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <div className="hero-content">

                        <h1 className='hero-h1' data-aos="fade-right">Your Partner for Next <br></br>Generation Website<br></br> Development
                            <span className="word-box">
                                <span className="word-list">
                                    <span>Solutions</span>
                                    <span>Services</span>
                                    <span>Agency</span>
                                    <span>Experts</span>
                                    <span>Solutions</span>
                                </span>
                            </span>
                        </h1>

                        <TypeAnimation sequence={[`We craft modern responsive websites
                        and powerful web applications designed
                        for speed, security and exceptional user
                        experience.`, 2000, '', 500,]} wrapper='p' speed={60} repeat={Infinity} data-aos="fade-right" className='hero-text' />

                    </div>

                </div>

                {/* about us */}
                <div className='second-container'>
                    <div className="second-left" data-aos="fade-right">
                        <div className='second-left-image' >
                        </div>
                    </div>
                    <div className="second-right">
                        <h2 data-aos="fade-left">About Us</h2>
                        <h3 data-aos="fade-right">Empowering Businesses <br />Through Innovative Technology</h3>
                        <p data-aos="fade-right" className='f-peragraph'>For over a decade, we have been helping startups, enterprises, and growing businesses build reliable digital solutions that drive efficiency, growth, and long-term success. Our mission is to transform ideas into scalable technology with a focus on quality, innovation, and customer satisfaction.</p><br></br>
                        <p data-aos="fade-right" className='f-peragraph'>We take pride in delivering technology solutions that are not only visually modern but also highly functional, scalable, and performance-driven. Our team continuously adapts to the latest industry trends and emerging technologies to help businesses stay ahead in the digital world. Whether it's improving customer engagement, automating workflows, or building intelligent systems, we are committed to providing solutions that support innovation, efficiency, and sustainable business growth.</p>
                    </div>
                </div>

                <div className='third-container'>
                    <span data-aos="fade-left">Future-Ready Technology Solutions</span>
                    <h1 data-aos="fade-right">Driving Innovation, Efficiency & Success</h1>
                    <div className='all-card'>
                        <div className="first-col">

                            <div className="project-card">
                                <span data-aos="fade-left" className="project-title">Project Success</span>
                                <h3 data-aos="fade-right">IT Management Service</h3>
                                <div className="graph-shape"></div>
                            </div>
                            <div className="project-card">
                                <span data-aos="fade-left" className="project-title">Online Retail Solutions</span>
                                <h3 data-aos="fade-right">Custom E-Commerce Solutions</h3>
                                <div className="book-container">
                                    <div className="book pink"></div>
                                    <div className="book orange"></div>
                                    <div className="book purple"></div>
                                </div>
                            </div>
                        </div>

                        <div className="second-col">

                            <div className="project-card2">
                                <span data-aos="fade-left" className="project-title">Digital Experience Development</span>
                                <p data-aos="fade-right"><b>Creating powerful digital experiences through innovative design, clean code, and optimized performance.</b></p>
                                <div className='card2-img' style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* our services */}

            <section id='services'>
                <h2 className='services-heading' data-aos="zoom-in">Our Services</h2>
                <p data-aos="fade-right">Empowering Businesses with Innovative Digital Solutions</p>


                <div className="all-services">
                    {services.map((s, i) => (

                        <div
                            key={i}
                            className={`cart ${flippedCard === s.id ? "flipped" : ""}`}
                        >

                            <div className="card-inner">


                                <div className="card-front">
                                    <i className={`ti ${s.icon}`}></i>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>

                                    <p className='read-more'
                                        onClick={() =>
                                            navigate("/services", {
                                                state: { openCard: s.id }
                                            })
                                        }
                                    >
                                        Read More..
                                    </p>
                                </div>



                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Why Choose Us? */}
            <section id='choose-us'>
                <div className="choose-left">


                    <h2 data-aos="zoom-in">Why Choose Us?</h2>
                    <p data-aos="fade-left">Delivering Excellence Through Innovation & Expertise</p>

                    <div className="points">

                        <div className="point-card" data-aos="fade-right">
                            <i className="ri-team-line"></i>
                            <div>
                                <h4>Experienced Team</h4>
                                <p>Our skilled developers, designers, and consultants bring years of expertise.</p>
                            </div>
                        </div>

                        <div className="point-card" data-aos="fade-left">
                            <i className="ri-customer-service-2-line"></i>
                            <div>
                                <h4>Client-Centric Approach</h4>
                                <p>We prioritize your goals and deliver tailored solutions.</p>
                            </div>
                        </div>

                        <div className="point-card" data-aos="fade-right">
                            <i className="ri-shield-check-line"></i>
                            <div>
                                <h4>Quality Assurance</h4>
                                <p>Every project is tested for performance, security and reliability.</p>
                            </div>
                        </div>

                        <div className="point-card" data-aos="fade-left">
                            <i className="ri-time-line"></i>
                            <div>
                                <h4>On-Time Delivery</h4>
                                <p>Projects completed within deadlines without compromising quality.</p>
                            </div>
                        </div>

                        <div className="point-card" data-aos="fade-right">
                            <i className="ri-lightbulb-flash-line"></i>
                            <div>
                                <h4>Innovative Solutions</h4>
                                <p>Latest technologies and future-ready digital solutions.</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div data-aos="fade-left" className="choose-right" style={
                    {
                        backgroundImage: `url("https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: "1px solid black",
                        borderRadius: "50px"
                    }
                }>
                </div>

            </section >

            {/* Industries We Serve */}
            <section section id='serve' >
                <h2 data-aos="zoom-in">Industries We Serve</h2>
                <p>Delivering innovative technology solutions across diverse industries,
                    helping businesses transform and grow in the digital era.</p>

                <div className="all-serve" data-aos="flip-up">
                    <div className="serve" onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-heart-2-line"></i>
                        <h4 className='serve-title'>Healthcare</h4>
                    </div>
                    <div className='serve' onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-bank-line"></i>
                        <h4 className='serve-title'>Finance</h4>
                    </div>
                    <div className="serve" onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-ancient-pavilion-line"></i>
                        <h4 className='serve-title'>Travel</h4>
                    </div>
                    <div className="serve" onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-school-line"></i>
                        <h4 className='serve-title'>Education</h4>
                    </div>
                    <div className="serve" onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-home-9-line"></i>
                        <h4 className='serve-title'>Real Estate</h4>
                    </div>
                    <div className="serve" onClick={() =>
                                        navigate("/Industries", {
                                            state: { openCard: serve.id },
                                        })
                                    }>
                        <i class="ri-truck-line"></i>
                        <h4 className='serve-title'>Logistics</h4>
                    </div>
                </div>
            </section >

            {/* feature-case */}
            < section className="success-stories" >

                <h2 data-aos="fade-left">Feature Case Study</h2>

                <div className="stories-grid">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="story-card"
                            data-aos="flip-up"
                        >
                            <img src={story.image} alt={story.title} />

                            <div className="story-content">
                                <span>{story.category}</span>

                                <h3>{story.title}</h3>

                                <p>{story.description}</p>

                                <p className='read-more'
                                    onClick={() =>
                                        navigate("/caseStudies", {
                                            state: { openCard: story.id },
                                        })
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    Read Case Study →
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </ section>

        </>
    )
}

export default Home
