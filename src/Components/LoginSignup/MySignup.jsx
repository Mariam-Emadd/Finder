import React, { useState } from "react";
import "./MySignup.css"
import axios from "axios";
import user_icon from "../Assests/user (2).png";
import password_icon from "../Assests/password.png";
import gmail_icon from "../Assests/gmail.png";
import Header from "../MyNavBar";
import child from "../Assests/child.jpg";
function MySignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passR, setpassR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");

  // const [flag,setFlag]=useState(false);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || name.length < 3 || pass.length < 8 || pass !== passR) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        //send data
        let res = await axios.post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: pass,
          password_confirmation: passR,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/login";
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
        <div className="form1">
        
          <div className="register">
            
            <form onSubmit={Submit}>
              <h4 style={{fontWeight:'700'}}>Sign up</h4>
              <h2 style={{color:'grey' , fontSize:'15px' , fontWeight:'600'}}>to continue to Finder</h2>
              <hr/>
              {" "}
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="user_icon" style={{ width: 20 }} />
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {name === "" ||
                    (name.length < 3 && accept && (
                      <p className="error ">User name is required</p>
                    ))}
                </div>
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
                </div>
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
                    <p className="error ">
                      Password must be more than 8 characters
                    </p>
                  )}
                </div>
                <div className="input">
                  <img
                    src={password_icon}
                    alt="password_icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="repeat"
                    type="password"
                    placeholder="Repeat Paassword"
                    value={passR}
                    onChange={(e) => setpassR(e.target.value)}
                  />
                  {pass !== passR && accept && (
                    <p className="error ">Passwords must match</p>
                  )}{" "}
                </div>
                <div>
                  <button type="submit" className=" submit  rounded-2 ">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySignUp;
