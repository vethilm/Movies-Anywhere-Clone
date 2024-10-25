import Header from "./Header-Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/redeem"></Route>
        <Route path="/my-movies"></Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
}

export default App;
