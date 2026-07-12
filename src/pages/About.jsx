import React from 'react'
import image from '../assets/founder-photo.png'
import video1 from '../assets/about-hero.mp4'
import { TypeAnimation } from 'react-type-animation';
import { useState,useEffect,useRef } from 'react'


function Counter({ target }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const duration = 2000;
                const increment = target / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 16);
            }
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}+</span>;
}

function About() {
    
    return (
        <>
            <main>
                 <section id="hero-section">
               
                   <video
                       className="solution-video"
                       autoPlay
                       muted
                       loop
                       playsInline
                   >
                       <source src={video1} type="video/mp4" />
                   </video>
               
                   <div className="overlay"></div>
               
                   <div className="hero-content">
                       <h2 data-aos="flip-up">Industries We Serve</h2>
                       <TypeAnimation sequence={[`Delivering innovative technology solutions across industries to drive growth, efficiency, and digital transformation.Helping businesses innovate, optimize operations, and achieve sustainable growth through smart digital solutions.Industry-focused solutions designed to accelerate growth and business success.`,]} repeat={0} wrapper='p' speed={60} className='hero-text'/>
                   </div>
               
               </section>

                <div className='about-second-container'>

                    <div className="about-second-right">
                        <h2 data-aos="zoom-in">Our Story</h2>
                        <p className='about-f-peragraph' data-aos="fade-right">Founded with a passion for innovation and technology, our company was created to help businesses navigate the digital world with confidence. What started as a vision to deliver high-quality digital solutions has grown into a trusted technology partner for businesses across various industries.</p>
                        <p className='about-f-peragraph' data-aos="fade-left">We believe that every business deserves reliable, scalable, and future-ready technology solutions. Our team of skilled developers, designers, and digital experts works closely with clients to understand their goals and transform ideas into impactful digital experiences.</p>

                    </div>
                    <div className="about-second-left">
                        <div className='about-second-left-image'>
                        </div>
                    </div>
                </div>

                <div className="all-stats" data-aos="fade-right">
                    <div className='stats'><h3 className='stats-heading' ><Counter target={4}/></h3>
                    <p className='stats-detalis'>Years Of Experience</p></div>
                     <div className='stats'><h3 className='stats-heading'><Counter target={120}/></h3>
                    <p className='stats-detalis'>Projects Delivered</p></div>
                    <div className='stats'><h3 className='stats-heading'><Counter target={50}/></h3>
                    <p className='stats-detalis'>Happy Clients</p></div>
                   
                </div>

                {/* our  mission */}

                <section id='our-mission'>
                    <div className="our-left" data-aos="fade-left">
                        <h3 className='mission-title'>Our Mission</h3>
                        <p className='mission-detalis'>To transform ideas into powerful digital experiences by delivering high-quality web, software, and technology solutions that create measurable business value.</p>
                    </div>
                    <div className="our-center" data-aos="fade-right">
                        <h3 className='mission-title'>Our Vision</h3>
                        <p className='mission-detalis'>To shape the future of digital innovation by helping businesses embrace technology, unlock new opportunities, and achieve sustainable growth.</p>
                    </div>
                    <div className="our-left" data-aos="fade-left">
                        <h3 className='mission-title'>Our Commitment</h3>
                        <p className='mission-detalis'>We are committed to providing high-quality services, transparent communication, and customer-focused solutions.</p>
                    </div>
                </section>


{/* Our Core Values */}
                 <section id='services'>
                <h2 className='services-h2' data-aos="zoom-in">Our Core Values</h2>

                <div className="our-core">
                    <div className="cart" data-aos="fade-right">
                        <i className="ri-lightbulb-line" ></i>
                        <h4 className='service-title'> Innovation</h4>
                        <p className='service-detalis'>We embrace creativity and modern technologies to develop innovative solutions that help businesses stay ahead in a rapidly evolving digital world.</p>
                    </div>
                    <div className="cart" data-aos="fade-left">
                        <i class="ri-shield-line"></i>
                        <h4 className='service-title'>Integrity</h4>
                        <p className='service-detalis'>We conduct our business with honesty, transparency, and professionalism, building trust and long-term relationships with our clients.</p>
                    </div>

                    <div className="cart" data-aos="fade-right">
                        <i class="ri-award-line"></i>
                        <h4 className='service-title'>Excellence</h4>
                        <p className='service-detalis'>We are committed to delivering high-quality services and solutions that exceed expectations and create lasting value.</p>
                    </div>

                    <div className="cart" data-aos="fade-left">
                       <i class="ri-user-community-line"></i>
                        <h4 className='service-title'>Customer Focus</h4>
                        <p className='service-detalis'>Our clients are at the heart of everything we do. We listen, understand their needs, and deliver solutions that support their success.   </p>
                    </div>
                     <div className="cart" data-aos="fade-right">
        <i className="ri-team-line"></i>
        <h4 className='service-title'>Collaboration</h4>
        <p className='service-detalis'>We believe in the power of teamwork — working closely with clients and within our team to achieve shared goals and deliver exceptional results together.</p>
    </div>
                </div>
            </section>


{/* our leadership team */}

<section id='our-leadership-team'>
    <h2 data-aos="zoom-in">Our Leadership Team</h2>
    <div className="all-team-member">
    <div className='team-members' data-aos="flip-up">
        <img src={image} alt="image" className='team-member-image'/>
        <h4 className='member-name'>Kishan Patoriya</h4>
        <p className='member-position'>Founder  </p>
    </div>
     <div className='team-members' data-aos="flip-up">
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="image" className='team-member-image'/>
        <h4 className='member-name'>Sarah Johnson</h4>
        <p className='member-position'>Project Manager</p>
    </div>
     <div className='team-members' data-aos="flip-up">
        <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="image" className='team-member-image'/>
        <h4 className='member-name'>David Wilson</h4>
        <p className='member-position'>Senior Full Stack Developer</p>
    </div>
     <div className='team-members' data-aos="flip-up">
        <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="image" className='team-member-image'/>
        <h4 className='member-name'>Emily Roberts</h4>
        <p className='member-position'>UI/UX Designer</p>
    </div>
    </div>
</section>
            </main>
        </>

    )
}


export default About
