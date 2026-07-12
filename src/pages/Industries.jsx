import React from 'react'
import video1 from '../assets/Industries-hero-section.mp4';
import { TypeAnimation } from 'react-type-animation';
function Industries() {

    const industries=[
        {icon:"ri-hospital-line",
            title:"HealthCare",
            desc:"IT solutions for better patient care and healthcare management."
        },
        {icon:"ri-bank-fill",
            title:"Finance & Banking",
            desc:"Secure and scalable solutions for financial institutions."
        },
         {
    icon: "ri-graduation-cap-line",
    title: "Education",
    desc: "Digital learning platforms and education management systems."
  },
  {
    icon: "ri-home-3-line",
    title: "Real Estate",
    desc: "Smart solutions for property management and client engagement."
  },
  {
    icon: "ri-shopping-bag-4-line",
    title: "E-commerce",
    desc: "Custom online store solutions that drive business growth."
  },
  {
    icon: "ri-truck-fill",
    title: "Logistics",
    desc: "Optimize supply chain operations with smart technology."
  },
  {
    icon: "ri-robot-line",
    title: "Manufacturing",
    desc: "Automation solutions to improve productivity and efficiency."
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Travel & Hospitality",
    desc: "Enhance guest experiences with modern digital solutions."
  }
    ];

    const challenges = [
  {
    icon: "ri-refresh-line",
    title: "Digital Transformation",
    desc: "Modernizing legacy systems and business processes."
  },
  {
    icon: "ri-shield-check-line",
    title: "Data Security",
    desc: "Protecting sensitive business data and systems."
  },
  {
    icon: "ri-cloud-windy-line",
    title: "Cloud Migration",
    desc: "Seamless transition to scalable cloud platforms."
  },
  {
    icon: "ri-settings-3-line",
    title: "Process Automation",
    desc: "Reducing manual tasks through smart automation."
  },
  {
    icon: "ri-line-chart-line",
    title: "Scalability",
    desc: "Building systems that grow with your business."
  },
  {
    icon: "ri-user-heart-line",
    title: "Customer Experience",
    desc: "Creating seamless and engaging digital experiences."
  }
];
  return (
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

<section id='industries'>
    <h2 data-aos="fade-right">Driving Innovation Across Industries</h2>
<p data-aos="fade-left">
Delivering tailored technology solutions that help businesses grow, innovate, and succeed.
</p>
    <div className='industries-container'>
        {industries.map((industry,index)=>(
            <div className="industries-card" key={index} data-aos="zoom-in-up" data-aos-delay="300">

                <div className="left">
                <div className="industries-icon">
                <i className={industry.icon}></i>
                </div>
                </div>

                <div className="right">
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
                </div>
                </div>
        ))}
    </div>

<h2 data-aos="fade-right">Industry Challenges We Solve</h2>
<p data-aos="fade-left">
Helping businesses overcome modern technology and operational challenges.
</p>
     <div className='industries-container'>
        {challenges.map((challenges,index)=>(
            <div className="industries-card" key={index} data-aos="zoom-in-up" data-aos-delay="300">

                <div className="left">
                <div className="industries-icon">
                <i className={challenges.icon}></i>
                </div>
                </div>

                <div className="right">
                <h3>{challenges.title}</h3>
                <p>{challenges.desc}</p>
                </div>
                </div>
        ))}
    </div>
</section>
    </main>
  )
}

export default Industries
