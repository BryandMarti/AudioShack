import React, { useState } from "react";
import '../scripts_css/contact.css';
import'../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';

const ContactUsForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !subject) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      const response = await fetch("/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          subject,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Form submitted successfully:", responseData);
        setSubmitted(true);
        setFirstname("");
        setLastname("");
        setEmail("");
        setSubject("");
      } else {
        const responseData = await response.json();
        setError(responseData.error || "There was an error submitting the form.");
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setError("There was an error submitting the form.");
    }
  };

  return (
    <div>
      <BouncyBalls />
      <div className="contact-container">
        <div className="NoReason">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
        </p>
        </div>
        <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <br />
        <button className="button" type="submit">Submit</button>
      </form>
      {error && <p style={{ backgroundColor: 'black', color: "red" }}>{error}</p>}
      {submitted && <p>Thank you for Visiting our Site!</p>}
      </div>
    </div>
  );
};

export default ContactUsForm;
