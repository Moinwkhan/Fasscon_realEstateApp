import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = {
      username: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      await axios.post("https://apiestate21.onrender.com/api/signup", formData);
      setSuccess(true);
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError(
          "User already exists. Please choose a different username or email."
        );
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-vector/dark-purple-vector-background-with-dots-lines_6869-1115.jpg?w=996")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
        <section className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>create an account!</h3>
            <input
              type="text"
              name="name"
              required
              maxLength={50}
              placeholder="enter your name"
              className="box"
            />
            <input
              type="email"
              name="email"
              required
              maxLength={50}
              placeholder="enter your email"
              className="box"
            />
            <input
              type="password"
              name="password"
              required
              maxLength={20}
              placeholder="enter your password"
              className="box"
            />
            <input
              type="password"
              name="confirmPassword"
              required
              maxLength={20}
              placeholder="confirm your password"
              className="box"
            />
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Registration successful!</p>}
            <p>
              already have an account? <Link to="/login">Login now</Link>
            </p>
            <input
              type="submit"
              value="register now"
              name="submit"
              className="btn"
              disabled={submitting}
            />
          </form>
        </section>
        <footer>
          <div>
            <p
              style={{
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &copy; 2024 Movies App Made with ❤️ by<span> Moin Khan</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
