import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <div 
                className="social-icons" 
                style={{ 
                    marginBottom: '20px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '20px' 
                }}
            >
                {/* Social Media Icons */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaLinkedin size={30} />
                </a>
            </div>

            {/* Copyright Notice */}
            <div>
                <p>&copy; 2024 SIKAPAL.COM</p>
            </div>
        </footer>
    );
};

export default Footer;
