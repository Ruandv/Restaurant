import React, { useState } from "react";
import styles from "./Users.module.scss";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const ListUsers = async () => {
    //post to the api
    console.log("START")
    let res = await fetch(
      "https://rdv1024.azurewebsites.net/api/registration/list",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", apikey: "JAMES" },
      }
    );
    // validate response
    if (res.status === 200) {
      alert("WE HAVE DATA!!!");
    } else {
      alert("ERROR : " + res.statusText);
    }
  };
  ListUsers();
  return <div className={styles.container}>HERE WE GO!!!</div>;
}

export default Users;
