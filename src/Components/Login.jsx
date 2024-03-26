import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ setLogin }) {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://loginapi21-4lr2.onrender.com/login",
        loginData
      );
      if (response.status === 200) {
        setIsLoggedIn(true);
        setLogin(true);
        window.location.href = "/home";
      } else {
        window.alert("Invalid username or password.");
      }
    } catch (error) {
      setAlert("Invalid username or password");
      setTimeout(() => {
        setAlert("");
      }, 2000);
      console.log(`Error occurred during Login: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="background">
        <h1 className="logo21"> ProPulse Real Estate</h1>
        <h1 className="start">
          <a href="#post">Start Buying {">"}</a>{" "}
        </h1>
      </div>
      <div>
        <section className="form-container" id="post">
          <form onSubmit={handleSubmit}>
            <h3>welcome back!</h3>
            <input
              type="name"
              name="name"
              required
              maxLength={50}
              placeholder="enter your username"
              className="box"
              value={loginData.name}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              required
              maxLength={20}
              placeholder="enter your password"
              className="box"
              value={loginData.password}
              onChange={handleChange}
            />

            {alert && <p className="error">{alert}</p>}
            {isLoggedIn && <p className="success">Login successful!</p>}
            <p>
              do not have an account? <Link to="/signup">register new</Link>
            </p>
            <input
              type="submit"
              value={loading ? "Logging in..." : "Login now"}
              name="submit"
              className="btn"
              disabled={loading}
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
                paddingBottom: "1%",
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

export default Login;
