import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtrm1bo",
        "template_o40fl2p",
        form.current,
        "TSa7Gh8YEGMU1ELrs"
      )
      .then(
        (result) => {
          alert("성공적으로 이메일이 전송되었습니다.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };

  return (
    <div className="Contact">
      <div className="inner">
        <div className="contactTitle commonTitle">
          <div className="title">
            <p className="subTitle">Work With Me?</p>
            <h1 className="mainTitle">CONTACT</h1>
          </div>
          <p>If You Need My Services Or Want Me To Join, Lets Team Up!</p>
        </div>
        <form ref={form} className="sendMail">
          <div className="generalInfo">
            <div className="from_name">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="phone_number">
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                type="number"
                name="phone_number"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="your_email">
            <label htmlFor="YourEmail">Your Email</label>
            <input
              type="email"
              name="your_email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="subject">
            <label htmlFor="Subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Please enter a subject"
              required
            />
          </div>
          <div className="message">
            <label htmlFor="Messages">Your Message</label>
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" className="btn" onClick={sendEmail}>
            Send Message
          </button>
        </form>
        <p className="copyright">
          Copyright 2023. Kim Jeonghyeon. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
