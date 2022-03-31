import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../images/logo192.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  var [userName, setUserName] = useState("TEste");
  var [passw, setPassw] = useState("TEste");

  const Login = async () => {
    debugger;
    //post to the api
    let res = await fetch(
      "https://rdv1024.azurewebsites.net/api/registration/authenticate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: "JAMES" },
        body: JSON.stringify({
          password: passw,
          name: userName,
        }),
      }
    );
    // validate response
    if (res.status === 200) {
      navigate("/Menu");
    } else {
      alert("ERROR : " + res.statusText);
    }
  };
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
      <div className={styles.loginSection}>
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(v) => {
            setUserName(v.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={passw}
          onChange={(v) => {
            setPassw(v.target.value);
          }}
        />
        <div className={styles.buttons}>
          <div
            className={`${styles.btn} ${styles["btn-secondary"]}`}
            onClick={() => navigate("/register")}
          >
            Register
          </div>
          <div className={styles.btn} onClick={Login}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
