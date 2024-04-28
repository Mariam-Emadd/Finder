import React, { useState } from "react";
import "../LoginSignup/MyLogin.css";
import axios from "axios";
import password_icon from "../Assests/password.png"
import gmail_icon from "../Assests/gmail.png"
import Header from "../MyNavBar"
import child from "../Assests/child.jpg"

export default function MyLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (pass.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        //send data
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }

  return (
    <div>
      <Header />
      <div>
        <img src={child} alt="." className="child" />
        <div className="form" style={{ width: "35%", float: "right" }}>
          <div className="register">
            <h4 style={{ fontWeight: "700" }}>Login</h4>
            <h2 style={{ color: "grey", fontSize: "15px", fontWeight: "600" }}>
              to continue to Finder
            </h2>{" "}
            <hr />
            <form onSubmit={Submit}>
              <div className="inputs">
                <div className="input">
                  <img
                    src={gmail_icon}
                    alt="gmail_icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {accept && emailError === 422 && (
                    <p className="error"> Email has been already taken </p>
                  )}{" "}
                </div>{" "}
                <div className="input">
                  <img
                    src={password_icon}
                    alt="password_icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Paassword"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  {pass.length < 8 && accept && (
                    <p className="error">
                      Password must be more than 8 characters
                    </p>
                  )}
                </div>
                <div>
                  <button className="  rounded-2 submit" type="submit">
                    Login
                  </button>
                </div>
              </div>
              <div style={{marginTop:'10px'}}>
                {" "}
                <h6>
                  No Account? <a href="/register">Sign up</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
