import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./style.css"; // You can add spinner styles here

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      handleError("Please fill in all fields.");
      return;
    }

    setLoading(true); // Set loading to true when submission starts

    try {
      const { data } = await axios.post(
        "https://staock-backend.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://stock-dashboard-nine.vercel.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      if (error.response && error.response.data.code === 11000) {
        handleError("Email already exists. Please try another one.");
      } else {
        handleError("An error occurred. Please try again.");
      }
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after the request finishes
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            disabled={loading} // Disable inputs when loading
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Submit"} {/* Show loader if loading */}
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

const Loader = () => {
  return <div className="loader"></div>; // Simple loader
};

export default Signup;
