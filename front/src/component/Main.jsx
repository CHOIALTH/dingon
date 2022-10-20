import React from "react";
import AssignModal from "./AssignModal";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Sticky from "./Sticky";
import "../css/Sticky.css";
import "../css/AssignModal.css";
import MainBoards from "./MainBoards";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<MainBoards />}></Route>
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
      {/* <Route path="/" element={<MainBoards />}></Route> */}
    </Routes>
  );
}

export default Main;
