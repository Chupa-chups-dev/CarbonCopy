import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import Main from "./pages/Main/Main";
import MVideo from "./pages/Mvideo/MVideo";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/with-Mvideo" element={<MVideo />} />
      </Routes>
  );
}

export default App;
