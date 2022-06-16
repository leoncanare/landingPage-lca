import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jmky2j3",
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
  };

  return (
    <section id="contact">
      <h5> Ponte en contacto </h5>
      <h2> Conmigo </h2>
      <div className="container contact__container">
        <div className="contact__opotions">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Correo</h4>
            <h5>leoncanare@gmail.com</h5>
            <a href="mailto:leoncanare@gmail.com">Enviar un mensaje</a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@leoncanare</h5>
            <a href="mailto:leoncanare@gmail.com">Enviar un mensaje</a>
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
            placeholder="Nombre completo o Nombre de la Empresa"
            required
          />
          <input type="email" name="email" placeholder="Correo" required />
          <textarea name="message" rows="10" placeholder="Mensaje"></textarea>
          <button type="submit" className="btn btn-primary">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
