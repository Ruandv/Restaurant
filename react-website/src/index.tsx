import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Users from "./components/users/Users";
import Menu from "./components/menu/Menu";
ReactDOM.render(
  <React.StrictMode>
    <div className="appcontainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

const conf = {
  onSuccess: (registration: ServiceWorkerRegistration) => {},
  onUpdate: (reg: ServiceWorkerRegistration) => {
    reg.waiting!.postMessage({ type: "SKIP_WAITING" });
    console.info("New version installed");
  },
};

serviceWorkerRegistration.register(conf);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
