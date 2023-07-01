import "./App.css";
import EditCity from "./EditCity";
import Table from "./Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/edit/:id" element={<EditCity />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
