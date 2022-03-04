import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App.js";
import AboutPage from "./pages/AboutPage.js";

function renderRoutes() {
  let paths = ["a", "b", "c"];
  return (
    <React.Fragment>
      {paths.map((p, i) => (
        <Route key={i} path={"/"+p} element={<AboutPage site={p} />}>
          {p}
        </Route>
      ))}
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/" element={<App></App>}></Route>
    </React.Fragment>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
