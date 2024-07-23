import React, { useState } from "react";
import '../scripts_css/contact.css';
import '../scripts_css/across.css';
import BouncyBalls from '../scripts_css/bouncyBalls';

const ContactUsForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!firstname) errors.firstname = "First name is required.";
    if (!lastname) errors.lastname = "Last name is required.";
    if (!email) errors.email = "Email is required.";
    if (email && !validateEmail(email)) errors.email = "Invalid email format.";
    if (!subject) errors.subject = "Subject is required.";

    setInputErrors(errors);

    if (Object.keys(errors).length > 0) {
      setError("Please fix the highlighted fields.");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      const response = await fetch("/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, subject }),
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
              className={inputErrors.firstname ? "error" : ""}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={inputErrors.lastname ? "error" : ""}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputErrors.email ? "error" : ""}
            />
          </label>
          <br />
          <label>
            Suggestions:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputErrors.subject ? "error" : ""}
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
