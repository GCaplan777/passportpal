import React from "react";
import "./style.css";

function Footer() {
  return (
    <container className="p-5">
      <footer className="fixed-bottom p-0 text-center text-white">
        <small className="mr-5">Copyright &copy; PassPortPals </small>
        <a
          href="https://github.com/GCaplan777/passportpal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/icons/github.png" alt="GitHub" className="icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="img/icons/linkedin.png" alt="LinkedIn" className="icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="img/icons/facebook.png" alt="FaceBook" className="icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="img/icons/IG.png" alt="Instagram" className="icon" />
        </a>
        {/* <a
        href="https://www.youtube.com/channel/UCwFNHvQxnZfsfUm8V9B98kw?view_as=subscriber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="img/icons/youtube.png" alt="YouTube" className="icon" />
      </a> */}
      </footer>
    </container>
  );
}

export default Footer;
