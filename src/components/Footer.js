import React from 'react';
import githubLogo from '../assets/images/github-logo.png';
const Footer = (props) => {

    return(
        <div className = "footer">
        <a href="https://github.com/donavynhaley/nasa-photo-of-the-day" id="github-link" target=" blank">
          <img src={githubLogo} width="24px" height="24px" alt="github"/>
          <p>Github Link</p>
        </a>
        <p>API uses: {/* INSERT API USES LEFT OUT OF 1000*/}</p>
      </div>
    )
};

export default Footer;
