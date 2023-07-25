import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Catalog from "./pages/Catalog";
import Feedback from "./pages/Feedback";

const App = () => {
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
};

export default App;
