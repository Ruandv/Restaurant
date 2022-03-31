import React, { useState } from "react";
import styles from "./Register.module.scss";
import logo from "../../images/logo192.png";
import { useNavigate } from "react-router-dom";

function Register() {
  var [userName, setUserName] = useState("TEste");
  var [passw, setPassw] = useState("TEste");
  var [cellNo, setCellNo] = useState("0831234567");
  const navigate = useNavigate();
  const doRegistration = async () => {
    //post to the api
    let res = await fetch(
      "https://rdv1024.azurewebsites.net/api/registration/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: "JAMES" },
        body: JSON.stringify({
          password: passw,
          name: userName,
          cellNo: cellNo,
        }),
      }
    );
    // validate response
    if (res.status === 200) {
      navigate("/");
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
        <label>Cell No.</label>
        <input
          type="tel"
          value={cellNo}
          onChange={(v) => {
            setCellNo(v.target.value);
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
          <div className={`${styles.btn}`} onClick={doRegistration}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
