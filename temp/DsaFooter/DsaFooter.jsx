import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import "../Footer/Footer.css";

const DsaFooter = () => {
  return (
    <div>
    <div className="footer">
      <div className="container">
          <div className="row">
              <div className="footer-col">
              <div className='align-logo'>
              <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '30px' }} />
              <h3>Being Developer</h3><br/>
              </div>
              
              <p>One Stop Solution for learning <br/> Web Development and coding.</p>
              </div>
              <div className="footer-col">
              <h3>MENU</h3>
                  <ul>
                      <li>About</li>
                      <li>Courses</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <div className="footer-col">
              <h3>SERVICES</h3>
                  <ul>
                      <li>Privacy Policies</li>
                      <li>Term of Use</li>
                      <li>Refund</li>
                  </ul>
              </div>
              <div className="footer-col">
              <div>
                 <h3>GET IN TOUCH</h3>
                 <h4>Email: support@beingDeveloper.com</h4>
              </div>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  )
}

export default DsaFooter;
