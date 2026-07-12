import React, { useState } from 'react'
import ecom from '../assets/case-studies-e-com.jpg'
import health from '../assets/case-studies-health.jpg'
import bank from '../assets/case-studies-bank.jpg'
import learn from '../assets/case-studies-elearn.jpg'
import video1 from '../assets/case-study-hero.mp4';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom'

function CaseStudies() {
  const [flippedCard, setFlippedCard] = useState(null);
const navigate = useNavigate();
  const stories = [
    {
      id: 1,
      image: health,
      category: "Healthcare",
      title: "Smart Hospital Management System",
      desc: "Improved patient care and operations.",
      description:
        "A digital healthcare platform designed to streamline hospital operations, patient records, appointment scheduling, and medical staff management.",
      points: [
        "Online appointment booking and scheduling",
        "Electronic medical records management",
        "Doctor and staff workflow automation",
        "Real-time patient monitoring dashboard",
        "Secure data storage and HIPAA-compliant security",
      ],
    },
    {
      id: 2,
      image: bank,
      category: "Fintech",
      title: "Secure Digital Banking Platform",
      desc: "Enhanced banking security and UX.",
      description:
        "A modern banking solution that enables secure transactions, digital payments, account management, and fraud detection through advanced technology.",
      points: [
        "Secure online banking and fund transfers",
        "Multi-factor authentication for user security",
        "AI-powered fraud detection system",
        "Real-time transaction tracking",
        "Mobile-first banking experience",
      ],
    },
    {
      id: 3,
      image: learn,
      category: "Education",
      title: "E-Learning Platform For Students",
      desc: "Modern online learning ecosystem.",
      description:
        "An interactive learning platform that provides students with online courses, live classes, assessments, and progress tracking.",
      points: [
        "Video-based learning modules",
        "Live online classes",
        "Progress tracking dashboard",
        "Assignments and quizzes",
        "Certificate generation",
      ],
    },
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
          <h2 data-aos="flip-up">Our Case Studies</h2>
          <TypeAnimation sequence={[`Explore our portfolio of successful projects and discover how we deliver innovative digital solutions that drive business growth, improve efficiency, and create lasting value for our clients.`,]} repeat={0} wrapper='p' speed={60} className='hero-text' />
        </div>

      </section>

      <section className="featured-case">

        <div className="case-image">
          <img src={ecom} alt="" />
        </div>

        <div className="case-content">

          <span className="case-tag" data-aos="flip-up">E-Commerce</span>

          <h2 data-aos="fade-right">
            Online Store Revenue
            Increased by 180%
          </h2>

          <p data-aos="fade-left">
            We built a scalable e-commerce platform with optimized
            checkout flow and personalized recommendations.
          </p>

          <div className="case-stats">

            <div className="stat-box" data-aos="flip-up">
              <h3>180%</h3>
              <span>Revenue Growth</span>
            </div>

            <div className="stat-box" data-aos="flip-up">
              <h3>50K+</h3>
              <span>Monthly Users</span>
            </div>

            <div className="stat-box" data-aos="flip-up">
              <h3>2.5X</h3>
              <span>Conversion Rate</span>
            </div>

          </div>


        </div>

      </section>


      <section className="success-stories">

        <h2 data-aos="fade-left">More Success Stories</h2>

        <div className="stories-grid">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`story-card ${flippedCard === story.id ? "flipped" : ""}`}
            >
              <div className="story-inner">

                <div className="story-front">
                  <img src={story.image} alt={story.title} />

                  <div className="story-content">
                    <span>{story.category}</span>
                    <h3>{story.title}</h3>
                    <p>{story.desc}</p>

                    <p
                      className="read-more"
                      onClick={() => setFlippedCard(story.id)}
                    >
                      Read Case Study →
                    </p>
                  </div>
                </div>

                <div className="story-back">
                  <h3>{story.title}</h3>

                  <p>{story.description}</p>

                  <ul>
                    {story.points?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>

                  <p
                    className="back-btn"
                    onClick={() => setFlippedCard(null)}
                  >
                    Back
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="impact-section">

        <h2 data-aos="fade-left">Our Impact In Numbers</h2>

        <div className="impact-grid">

          <div data-aos="flip-up">
            <h3>120+</h3>
            <p>Projects Completed</p>
          </div>

          <div data-aos="flip-up">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div data-aos="flip-up">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>

          <div data-aos="flip-up">
            <h3>25+</h3>
            <p>Industries Served</p>
          </div>

          <div data-aos="flip-up">
            <h3>10+</h3>
            <p>Countries Reached</p>
          </div>

        </div>

      </section>

      <section className="case-cta" data-aos="flip-up">

        <div>
          <h2>Ready To Build Your Success Story?</h2>
          <p>
            Let's collaborate to turn your challenges into success.
          </p>
        </div>

        <button onClick={() =>
          navigate("/contact")
        }>Get In Touch</button>

      </section>
    </main>
  )
}

export default CaseStudies
