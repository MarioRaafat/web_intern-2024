import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p className={`pl-24`}>&copy; {new Date().getFullYear()} This website is designed and developed by Mario Raafat</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
    display: "flex",
};

export default Footer;