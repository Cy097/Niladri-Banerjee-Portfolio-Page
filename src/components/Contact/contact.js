import React, { useRef } from 'react';
import './contact.css'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.png'
import GlassdoorIcon from '../../assets/glassdoor.png'
import NaukriIcon from '../../assets/naukri.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current['your_name'].value;
    const email = form.current['your_email'].value;
    const message = form.current['message'].value;

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    
        emailjs
          .sendForm('service_bizjd7n', 'template_mr03msp', form.current, {
            publicKey: '2zXR3dbEy49DTTqqK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email Sent!");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contactPage">
            <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please Fill out the form below to discuss any work oppertunnities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Please Enter Your Name" name="your_name" />
                <input type="text" className="email" placeholder="Please Enter Your Email" name="your_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Please Enter Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://www.linkedin.com/in/niladri-banerjee-a97531318/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="LinkedIN" className="link"/>
                    </a>
                    <a href="https://www.glassdoor.co.in/member/profile" target="_blank" rel="noopener noreferrer">
                    <img src={GlassdoorIcon} alt="GlassDoor" className="link"/>
                    </a>
                    <a href="https://github.com/Cy097" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="Github" className="link"/>
                    </a>
                    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
                    <img src={NaukriIcon} alt="Naukri.com" className="link"/>
                    </a>
                </div>
            </form>
             </div>
        </section>
    );
};

export default Contact;