import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Services } from "./components/Services/Services";
import { Catalog } from "./components/Catalog/Catalog";
import { Feedback } from "./components/Feedback/Feedback";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
