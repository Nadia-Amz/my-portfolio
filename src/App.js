import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/my-portfolio">
        <Routes>
          <Route exact path="/my-portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
