import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="/submit" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>
        <br />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
