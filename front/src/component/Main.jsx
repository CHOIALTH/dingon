import React from "react";
import AssignModal from "./AssignModal";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "../css/AssignModal.css";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<div>아내가만든 컴포넌트</div>}></Route>
      <Route
        path="/post"
        element={
          {
            /*기영*/
          }
        }
      ></Route>
      <Route
        path="/postupdate"
        element={
          {
            /*기영*/
          }
        }
      ></Route>
      <Route
        path="/gallery/:name"
        element={
          {
            /*경민*/
          }
        }
      ></Route>
      <Route
        path="/gallery/made"
        element={
          {
            /*정우*/
          }
        }
      ></Route>
      <Route
        path="/*"
        element={
          {
            /*원준*/
          }
        }
      ></Route>
    </Routes>
  );
}

export default Main;
