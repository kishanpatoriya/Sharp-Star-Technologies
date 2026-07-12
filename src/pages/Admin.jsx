import React, { useState, useEffect } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";

function Admin() {
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const loadData = () => {
      const savedApps = JSON.parse(localStorage.getItem('applications_data')) || [];
      const savedMessages = JSON.parse(localStorage.getItem('contacts_data')) || [];
      
      setApplications(savedApps);
      setMessages(savedMessages);
    };

    loadData();

    window.addEventListener("storage_updated", loadData);

    return () => {
      window.removeEventListener("storage_updated", loadData);
    };
  }, []);

  const handleRemoveApplication = (indexToRemove) => {
    const updatedApps = applications.filter((_, index) => index !== indexToRemove);
    setApplications(updatedApps);
    localStorage.setItem('applications_data', JSON.stringify(updatedApps));
    window.dispatchEvent(new Event("storage_updated"));
  };

  // --- CONTACT MESSAGES LOGIC (Edit & Remove) ---
  const handleRemoveMessage = (indexToRemove) => {
    const updatedMessages = messages.filter((_, index) => index !== indexToRemove);
    setMessages(updatedMessages);
    localStorage.setItem('contacts_data', JSON.stringify(updatedMessages));
    window.dispatchEvent(new Event("storage_updated"));
  };

  return (
    <main>
      <section id="admin-page">
        <div className="sidebar">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="admin-logo" />
            <h4>Sharp Star Technologies</h4>
          </div>

          <ul>
            <li>
              <NavLink to="#">
                <i className="ti ti-layout-dashboard"></i>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="ti ti-briefcase"></i>
                Job Applications
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="ti ti-message"></i>
                Contact Messages
              </NavLink>
            </li>
          </ul>

          <div className="sidebar-footer">
            <button onClick={()=>navigate("/")}>
              <i className="ti ti-logout-2"></i>
              Go to Website
            </button>
          </div>
        </div>

        <div className="admin-content">
          <h2>Dashboard</h2>

          <div className="dashboard-cards">
            <div className="card">
              <h3>Total Job Applications</h3>
              <p>{applications.length}</p>
            </div>
            <div className="card">
              <h3>Total Contact Messages</h3>
              <p>{messages.length}</p>
            </div>
          </div>

          {/* JOB APPLICATIONS SECTION */}
          <div className="section-box" style={{ overflowX: 'auto' }}>
            <h3>Job Applications</h3>

            {applications.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '12px' }}>Name</th>
                    <th style={{ padding: '12px' }}>Email</th>
                    <th style={{ padding: '12px' }}>Number</th>
                    <th style={{ padding: '12px' }}>Role</th>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: '1px solid #ddd',
                        backgroundColor: index % 2 === 0 ? '#fff' : '#fcfcfc',
                      }}
                    >
                      <td style={{ padding: '12px' }}>{item.name}</td>
                      <td style={{ padding: '12px' }}>{item.email}</td>
                      <td style={{ padding: '12px' }}>{item.phone || item.number || '-'}</td>
                      <td style={{ padding: '12px', color: '#555' }}>{item.role || item.position || 'N/A'}</td>
                      <td style={{ padding: '12px' }}>{item.date || '-'}</td>
                      <td style={{ padding: '12px' }}>{item.status || '-'}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleRemoveApplication(index)}
                          style={{
                            backgroundColor: '#ff4d4f',
                            color: '#fff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-record" style={{ padding: '15px', color: '#666' }}>No applications found</div>
            )}
          </div>

          <div className="section-box" style={{ overflowX: 'auto' }}>
            <h3>Contact Messages</h3>

            {messages.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
                    <th style={{ padding: '12px' }}>Name</th>
                    <th style={{ padding: '12px' }}>Email</th>
                    <th style={{ padding: '12px' }}>Phone</th>
                    <th style={{ padding: '12px', width: '30%' }}>Message</th>
                    <th style={{ padding: '12px', textAlign: 'center', width: '15%' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#fff' : '#fcfcfc' }}>
                      <td style={{ padding: '12px' }}>{item.name}</td>
                      <td style={{ padding: '12px' }}>{item.email}</td>
                      <td style={{ padding: '12px' }}>{item.phone}</td>
                      <td style={{ padding: '12px', color: '#555' }}>{item.message}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleRemoveMessage(index)}
                          style={{
                            backgroundColor: '#ff4d4f',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-record" style={{ padding: '15px', color: '#666' }}>No messages found</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;