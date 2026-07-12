import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import video1 from '../assets/solution-hero.mp4';

function Solution() {

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
          <h2 data-aos="zoom-in">Our Solution</h2>

          <div data-aos="fade-up" data-aos-delay="200">
            <TypeAnimation
              sequence={[
                `We help businesses accelerate growth through custom web development, cloud solutions, software engineering, and digital transformation services. Our scalable and secure solutions are designed to improve efficiency, enhance customer experiences, and drive long-term success.`
              ]}
              repeat={0}
              wrapper="p"
              speed={60}
              className="hero-text"
            />
          </div>
        </div>

      </section>

      <section id='solution-path'>

        <p data-aos="fade-down">
          Future-Ready Solutions for Modern Businesses
        </p>

        <div className="all-cart-solution">

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="100">
            <div><i className="ri-building-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>Enterprise Solutions</h4>
              <p>Comprehensive solutions for large-scale business operations.</p>
            </div>
          </div>

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="200">
            <div><i className="ri-user-settings-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>CRM Solutions</h4>
              <p>Manage customer relationships and boost engagement.</p>
            </div>
          </div>

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="300">
            <div><i className="ri-line-chart-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>ERP Solutions</h4>
              <p>Streamline workflows and improve business efficiency.</p>
            </div>
          </div>

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="400">
            <div><i className="ri-cloud-windy-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>SaaS Development</h4>
              <p>Build scalable and secure cloud-based software.</p>
            </div>
          </div>

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="500">
            <div><i className="ri-settings-3-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>Automation Solutions</h4>
              <p>Automate repetitive tasks and increase productivity.</p>
            </div>
          </div>

          <div className="solution-cart" data-aos="fade-up" data-aos-delay="600">
            <div><i className="ri-code-s-slash-line"></i></div>
            <div className='solution-cart-detalis'>
              <h4>Custom Software</h4>
              <p>Tailor-made software solutions for unique business needs.</p>
            </div>
          </div>

        </div>

      </section>

      <section className="process-section">

        <div className="process-header" data-aos="fade-down">
          <span>OUR PROCESS</span>
          <h2>Our Proven Development Process</h2>
          <p>
            We follow a structured and collaborative approach to deliver
            high-quality, scalable, and reliable solutions that align with your
            business goals.
          </p>
        </div>

        <div className="process-grid">

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="100">
            <div className="icon-circle blue">
              <i className="ri-search-eye-line"></i>
            </div>

            <div className="card-content">
              <span className="step blue-text">01</span>
              <h3>Discovery & Analysis</h3>
              <div className="small-line blue-bg"></div>
              <p>
                We understand your business requirements, challenges, and
                objectives to create the right strategy.
              </p>
            </div>
          </div>

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="icon-circle green">
              <i className="ri-route-line"></i>
            </div>

            <div className="card-content">
              <span className="step green-text">02</span>
              <h3>Planning & Strategy</h3>
              <div className="small-line green-bg"></div>
              <p>
                Our experts design a detailed roadmap and implementation plan.
              </p>
            </div>
          </div>

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="300">
            <div className="icon-circle purple">
              <i className="ri-code-s-slash-line"></i>
            </div>

            <div className="card-content">
              <span className="step purple-text">03</span>
              <h3>Development</h3>
              <div className="small-line purple-bg"></div>
              <p>
                We build secure, scalable and high-performance solutions.
              </p>
            </div>
          </div>

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="400">
            <div className="icon-circle orange">
              <i className="ri-shield-check-line"></i>
            </div>

            <div className="card-content">
              <span className="step orange-text">04</span>
              <h3>Testing & QA</h3>
              <div className="small-line orange-bg"></div>
              <p>
                Every solution undergoes rigorous testing and quality assurance.
              </p>
            </div>
          </div>

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="500">
            <div className="icon-circle blue">
              <i className="ri-rocket-line"></i>
            </div>

            <div className="card-content">
              <span className="step blue-text">05</span>
              <h3>Deployment</h3>
              <div className="small-line blue-bg"></div>
              <p>
                We seamlessly launch your solution with maximum efficiency.
              </p>
            </div>
          </div>

          <div className="process-card" data-aos="zoom-in-up" data-aos-delay="600">
            <div className="icon-circle pink">
              <i className="ri-customer-service-2-line"></i>
            </div>

            <div className="card-content">
              <span className="step pink-text">06</span>
              <h3>Support & Maintenance</h3>
              <div className="small-line pink-bg"></div>
              <p>
                Continuous monitoring, updates and technical support.
              </p>
            </div>
          </div>

        </div>

      </section>

    </main>

  );
}

export default Solution
