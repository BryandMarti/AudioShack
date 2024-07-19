import React, { useState, useEffect } from "react";

/// Create state variables using useState
const HooksExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  /// useEffect runs when a name,email, submiited has been changed
  useEffect(() => {
    if (submitted) {
      console.log("Form submitted:", name, email);
    }
  }, [name, email, submitted]);
  /// Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };
return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form Submiitted succesfully!</p>}
    </div>
  );
};

export default HooksExample;