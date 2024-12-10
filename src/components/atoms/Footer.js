import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>@ 2024 </p>
        <p style={linkStyle}>
          First Project By Kisenge Mbaga
        </p>
      </div>
    </footer>
  );
};

// Inline styles for the footer
const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px 0",
  textAlign: "center",
  position: "relative",
  bottom: "0",
  width: "100%",
};

const contentStyle = {
  margin: "0 auto",
  maxWidth: "800px",
};

const linkStyle = {
  color: "lightblue",
  textDecoration: "none",
  marginLeft: "10px",
};

export default Footer;
