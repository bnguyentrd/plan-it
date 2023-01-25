import "../css/AboutUs.css"
import React, { useState } from "react";
// import "../css/LoginForm.css";
import Nav from '../Nav';
// import * as sgMail from '@sendgrid/mail';
// import fs from 'fs';
// import path from 'path';


// const sgMail = require('@sendgrid/mail');


export const About = () => {


// sgMail.setApiKey('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');

// const msg = {
//   to: '',
//   from: 'planit.contactus@gmail.com', // Use the email address or domain you verified above
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// //ES6
// sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
//ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();

  // return (
  //   <>
  //   <Nav />
  //     <h1>Hello World</h1>
  //   </>
  // );


  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      email,
      subject,
      message
    };

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

