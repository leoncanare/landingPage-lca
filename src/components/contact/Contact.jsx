import React, { useRef, useState  } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import {BsFileArrowUpFill} from 'react-icons/bs'
import {RiMailSendLine, RiCheckLine} from 'react-icons/ri'

const Contact = () => {
  const form = useRef();

  const [isAnimating, setIsAnimating] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
    emailjs
      .sendForm(
        "service_d4i4jvy",
        "template_hrqhx1s",
        form.current,
        "bf6j6vcYuwJArDyzz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section id="contact">
      <h5> Get in touch  </h5>
      <h2> With Me </h2>
      <div className="container contact__container">
        <div className="contact__opotions">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leoncanare@gmail.com</h5>
            <a href="mailto:leoncanare@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@leoncanare</h5>
            <a href="mailto:leoncanare@gmail.com">Send a message</a>
          </article>
          {/* <article className='contact__option'>
          <SiLinkedin/>
          <h4>Linkedin</h4>
          <h5>leoncanare</h5>
          <a href="mailto:leoncanare@gmail.com">Enviar un mensaje</a>
        </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your name or company name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="10" placeholder="Message..."></textarea>

          <button type="submit" className={`btn ${isAnimating ? 'animating' : ''}`}>
            { isAnimating 
              ? <span>SENDED<RiCheckLine className="icon-btn ico check"/></span>
              : <span>SEND<RiMailSendLine className="icon-btn ico msg"/></span>
            }
            {/* {isAnimating ? <span>✔️</span> : <span>➡️</span>} */}
            {/* <RiCheckLine className="icon-btn ico check"/> */}
          </button>

        </form>
      </div>
      <a href="#home" className='scroll__up'><BsFileArrowUpFill/></a>
    </section>
  );
};

export default Contact;
