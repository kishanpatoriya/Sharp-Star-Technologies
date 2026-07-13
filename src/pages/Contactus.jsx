import React, { useState } from 'react';
import video1 from '../assets/contact-hero.mp4';
import { TypeAnimation } from 'react-type-animation';

function Contactus() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", 
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("All fields are required");
      return;
    }
    
    
    const existingMessages = JSON.parse(localStorage.getItem('contacts_data')) || [];
    
   
    const newMessagesArray = [...existingMessages, form];
    
    
    localStorage.setItem('contacts_data', JSON.stringify(newMessagesArray));
    
    
    window.dispatchEvent(new Event("storage_updated"));

    
    setStatus("Message sent Successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <>
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
          <h2 data-aos="flip-up">Contact Us</h2>
          <TypeAnimation 
            sequence={[`We're here to help you transform your ideas into reality. Reach out to our experts for consultations, project inquiries, or any questions about our services and solutions.`]} 
            repeat={0} 
            wrapper='p' 
            speed={60} 
            className='hero-text'
          />
        </div>
      </section>

      <section className="contact-wrapper">
        <div className="contact-left" data-aos="fade-right">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's Discuss Your <span>Next Project</span>
          </h2>

          <p>
            Have a project in mind or need expert IT solutions?
            Fill out the form below and our team will get back to
            you as soon as possible.
          </p>

          {/* Form me onSubmit event add kiya */}
          <form className="contact-form" onSubmit={handleSubmit}>
            
            {/* Status Message Show Karne ke liye */}
            {status && (
              <div style={{ color: status.includes("Successfully") ? "green" : "red", marginBottom: "15px" }}>
                {status}
              </div>
            )}

            <div className="input-row">
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className='form-content'
              />
              <input 
                type="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className='form-content'
              />
            </div>

            <input 
              type="text" 
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number" 
              className='form-content' 
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write Your Message"
              className='form-content'
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-right" data-aos="fade-left">
          <h3>Contact Information</h3>

          <div className="info-box">
            <div className="icon">📞</div>
            <div>
              <h4>Phone Number</h4>
              <p>+91 78999 99978</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">✉️</div>
            <div>
              <h4 className='info-bx-email'>Email Address</h4>
              <p>sharpstar@company.com</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">📍</div>
            <div>
              <h4>Office Location</h4>
              <p>Jamnagar, Gujarat, India</p>
            </div>
          </div>

          <div className="social-box">
            <h4>Follow Us</h4>

            <div className="social-icons">
              <a href="https://www.facebook.com/">FB</a>
              <a href="https://www.instagram.com/">IN</a>
              <a href="https://www.twitter.com/">TW</a>
              <a href="#">IG</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;