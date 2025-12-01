import React from 'react';
import '../component/Footer.css';

import { FaFacebook,FaInstagram,FaYoutube,FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
          <a href='#'>I<span>D</span>A</a>
        </div>
        <span className='footer-content'>This site created by @IDA 2025</span>
        <div className='socials'>
            <a href='https://www.facebook.com/o.amarh.2025' target='blank'><FaFacebook className='social-icon'/></a>
            <a href='https://www.instagram.com/o.amarkhuu/' target='blank'><FaInstagram className='social-icon'/></a>
            <a href='https://www.youtube.com/@aim178' target='blank'><FaYoutube className='social-icon'/></a>
            <a href='tel: +97685556113'><FaPhoneAlt className='social-icon'/></a>
        </div>
    </div>
  );
};

export default Footer;