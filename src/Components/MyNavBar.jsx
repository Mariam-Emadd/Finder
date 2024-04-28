// import React from "react";
// import { Link } from "react-router-dom";
// import "./MyNavBar.css";

// export default function MyNavBar() {
//   function handleLogout() {
//     window.localStorage.removeItem("email");
//     window.location.pathname = "/";
//   }
//   return (
//     <div className="myheader">
//       <Link to="/" className="logo">
//         Finder
//       </Link>

//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/compare">Compare</Link>
//         </li>{" "}
//         <li>
//           <Link to="/scan"> Qr code </Link>
//         </li>{" "}
//         <li>
//           <Link to="/about">About us</Link>
//         </li>
//         <li>
//           <Link to="/share">Share the app</Link>
//         </li>
//       </ul>

     
          
//           <div>
//         {!window.localStorage.getItem("email") ? (
//           <>
//             <Link
//               to="/register"
//               style={{ textAlign: "center" }}
//               className="btn submit w-100 rounded-2"
//             >
//               Register
//             </Link>
//             <Link
//               to="/login"
//               style={{ textAlign: "center" }}
//               className="btn submit w-100 rounded-2"
//             >
//               Login
//             </Link>{" "}
//           </>
//         ) : (
//           <div className="btn submit w-100 rounded-2" onClick={handleLogout}>
//             Logout
//           </div>
//         )}
//       </div>
//       </div>
//   );
// }
//----------------------------------------------------
// import { useState } from "react";
// import styles from "./NavBar.module.css";

// function MyNavBar() {
//   // adding the states
//   const [isActive, setIsActive] = useState(false);

//   //add the active class
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   //clean up function to remove the active class
//   const removeActive = () => {
//     setIsActive(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className={`${styles.navbar}`}>
//           {/* logo */}
//           <a href="#home" className={`${styles.logo}`}>
//             Dev.{" "}
//           </a>

//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>
//                 Home
//               </a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>
//                 Catalog
//               </a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>
//                 All products
//               </a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <div
//             className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
//             onClick={toggleActiveClass}
//           >
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//             <span className={`${styles.bar}`}></span>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default MyNavBar;
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./NavBar.module.css";
import MySlider from "./MySlider";

function MyNavBar() {
   function handleLogout() {
     window.localStorage.removeItem("email");
     window.location.pathname = "/";
   }
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
    
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`} >
          {/* logo */}
          <Link to="/" className={`${styles.logo}`}>
            Finder{" "}
          </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/compare" className={`${styles.navLink}`}>
                Compare
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/scan" className={`${styles.navLink}`}>
                Qr code
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About us
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/share" className={`${styles.navLink}`}>
                Share App
              </Link>
            </li>
          </ul>
          <div>
            {!window.localStorage.getItem("email") ? (
              <>
                <Link
                  to="/register"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#062b60",
                    color: "white",
                  }}
                  className=" submit btn w-100 rounded-2"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#062b60",
                    color: "white",
                    margin: "2px",
                  }}
                  className="submit btn w-100 rounded-2"
                >
                  Login
                </Link>{" "}
              </>
            ) : (
              <div
                className="submit btn w-100 rounded-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "#062b60",
                  color: "white",
                  margin: "2px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default MyNavBar;

