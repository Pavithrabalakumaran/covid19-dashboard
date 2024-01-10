import {Link} from 'react-router-dom'

import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div>
      <h1 className="footer-heading">
        COVID-19 <span className="footer-heading-india">INDIA</span>
      </h1>
      <p className="footer-description">
        We stand with everyone fighting on the front lines
      </p>
      <div className="footer-icon-container">
        <VscGithubAlt className="footer-icon" />
        <FiInstagram className="footer-icon" />
        <FaTwitter className="footer-icon" />
      </div>
    </div>
  </div>
)

export default Footer
