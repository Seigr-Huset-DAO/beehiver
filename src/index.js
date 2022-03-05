import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./Home"
import User from "./User";
import Apiaries from "./Apiaries";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="User" element={<User />} />
      <Route path="Apiaries" element={<Apiaries />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);