import React, { useState } from "react";
import "../components/contact.css";

const GetInTouch = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSend = (e) => {
    e.preventDefault();
    const { name, email, message } = userMessage;

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    console.log(userMessage);


    setUserMessage({ name: "", email: "", message: "" });
    alert("Message sent successfully....Thank you");
  };

  return (
    <div className="container contact py-5" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-4">Get in Touch</h2>
      <p className="text-muted text-center mb-5">
        Feel free to reach out to me for collaboration, queries, or just to say hello!
      </p>
      <form onSubmit={handleSend}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            value={userMessage.name}
            onChange={(e) =>
              setUserMessage({ ...userMessage, name: e.target.value })
            }
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            value={userMessage.email}
            onChange={(e) =>
              setUserMessage({ ...userMessage, email: e.target.value })
            }
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            value={userMessage.message}
            onChange={(e) =>
              setUserMessage({ ...userMessage, message: e.target.value })
            }
            className="form-control"
            id="message"
            rows="5"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <div className="d-grid justify-content-center">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
  <p className="text-muted">Or reach me at:</p>
  <div className="d-flex justify-content-evenly">
    <div className="text-center">
      <i className="fab fa-whatsapp"></i>
      <br />
      <span>8075879839</span>
    </div>

    <div className="text-center">
      <i className="fab fa-instagram"></i>
      <br />
      <a 
        href="https://www.instagram.com/_sandra_babu" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        _sandra_babu
      </a>
    </div>

    <div className="text-center">
      <i className="fab fa-github"></i>
      <br />
      <a 
        href="https://github.com/your-github-username" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        GitHub
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default GetInTouch;
