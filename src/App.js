import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
