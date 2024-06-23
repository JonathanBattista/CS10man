import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/_global.scss";
import { Header } from "./components/Header/Header.js";
import { Infopage } from "./pages/Home/Infopage/Infopage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Infopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
