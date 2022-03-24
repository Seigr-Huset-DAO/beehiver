import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./Home"
import User from "./User";
import Apiary from "./Apiary";
import ApiaryRegister from "./ApiaryRegister";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="User" element={<User />} />
      <Route path="Apiary" element={<Apiary />} />
      <Route path="ApiaryRegister" element={<ApiaryRegister />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);