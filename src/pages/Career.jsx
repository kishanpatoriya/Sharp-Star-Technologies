import React, { useState } from 'react'; 
import video1 from '../assets/career-hero.mp4';
import { TypeAnimation } from 'react-type-animation';

function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const benefits = [
    { icon: "ri-line-chart-line", title: "Career Growth", desc: "Advance your career with continuous learning and development." },
    { icon: "ri-lightbulb-line", title: "Innovation", desc: "Work on cutting-edge technologies and innovative projects." },
    { icon: "ri-team-line", title: "Team Culture", desc: "Collaborate with talented professionals in a supportive environment." },
    { icon: "ri-book-open-line", title: "Learning Programs", desc: "Access workshops, certifications, and training resources." },
    { icon: "ri-time-line", title: "Flexible Work", desc: "Maintain a healthy work-life balance with flexibility." },
    { icon: "ri-award-line", title: "Recognition", desc: "Get rewarded and recognized for your achievements." }
  ];

  const jobs = [
    { title: "Frontend Developer", type: "Full Time", location: "Remote" },
    { title: "React Developer", type: "Full Time", location: "On Site" },
    { title: "WordPress Developer", type: "Full Time", location: "Hybrid" }
  ];

  const process = [
    { number: "01", title: "Application", desc: "Submit your application and resume." },
    { number: "02", title: "Screening", desc: "Initial review and discussion." },
    { number: "03", title: "Interview", desc: "Technical and culture-fit assessment." },
    { number: "04", title: "Offer & Onboarding", desc: "Welcome to the team." }
  ];

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle); 
    setIsModalOpen(true);       
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplicant = {
      id: Date.now(),
      name: e.target.fullName.value,     
      email: e.target.email.value,       
      phone: e.target.phone.value,       
      role: selectedRole,                
      date: new Date().toLocaleDateString('en-GB'), 
      status: "New"                      
    };
    const existingApps = JSON.parse(localStorage.getItem('applications_data')) || [];
    localStorage.setItem('applications_data', JSON.stringify([newApplicant, ...existingApps]));
    window.dispatchEvent(new Event("storage_updated")); 
    alert(`Your application for ${selectedRole} has been submitted!`);
    closeModal();
  };

  return (
    <main>
      <section id="hero-section">
        <video className="solution-video" autoPlay muted loop playsInline>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <h2 data-aos="flip-up">Join Our Team</h2>
          <TypeAnimation 
            sequence={[`Be a part of a forward-thinking team that is shaping the future of technology. We offer exciting opportunities, continuous learning, and a culture that empowers you to grow and succeed.`]} 
            repeat={0} 
            wrapper='p' 
            speed={60} 
            className='hero-text'
          />
        </div>
      </section>

      <section id="why-work">
        <div className="section-title">
          <h2>Why Work With Us</h2>
          <p>We empower our employees with opportunities to grow, innovate, and succeed.</p>
        </div>
        <div className="career-container">
          {benefits.map((item, index) => (
            <div className="career-card" key={index}>
              <div className="career-icon">
                <i className={item.icon}></i>
              </div>
              <div className="career-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="open-positions">
        <div className="section-title">
          <h2>Current Openings</h2>
          <p>Explore exciting opportunities and join our growing team.</p>
        </div>
        <div className="jobs-container">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className='job-detalis'>
                <h3>{job.title}</h3>
                <p>{job.type} • {job.location}</p>
              </div>
              <button onClick={() => handleApplyClick(job.title)}>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section id="hiring-process">
        <div className="section-title">
          <h2>Our Hiring Process</h2>
          <p>A simple and transparent hiring journey.</p>
        </div>
        <div className="career-container">
          {process.map((item, index) => (
            <div className="career-card" key={index}>
              <div className="career-content">
                <span className="process-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- APPLICATION MODAL FORM --- */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>Apply for a Role</h3>
            <p className="modal-subtitle">Fill out the details below to apply.</p>
            
            <form onSubmit={handleSubmit} className="application-form">
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder="e.g. John Abraham" required />
              </div>
              
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="John@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="+91 78999 99978" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="role">Apply for Role</label>
                
                <input type="text" id="role" defaultValue={selectedRole} required />
              </div>

              <div className="form-group">
                <label>Job Type Preference</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="jobType" value="Full Time" /> Full Time
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="jobType" value="Part Time" /> Part Time
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Work Preference</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="workMode" value="Remote" /> Remote
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="workMode" value="Hybrid" /> Hybrid
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="workMode" value="Onsite" /> Onsite
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}

export default Career;