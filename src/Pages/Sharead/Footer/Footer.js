import React from 'react';
import logo from "../../../Asserts/logo.jpg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        
            <img className="w-24 mask mask-triangle" src={logo} />
          <p>WEOnline Trainer.<br/>Providing reliable tech since 2022</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Motivational</a> 
          <a className="link link-hover">PhotoGraphy</a> 
          <a className="link link-hover">Fitness</a> 
          <a className="link link-hover">Communication</a>
          <a className="link link-hover">Carrear Development</a> 
          <a className="link link-hover">Skill Devlopment</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;