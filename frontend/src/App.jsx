import { Routes, Route } from "react-router-dom";
import AddNumber from "./AddNumber";
import EditNumber from "./EditNumber";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-phone" element={<AddNumber />} />
        <Route path="/update-phone/:id" element={<EditNumber />} />
      </Routes>
    </div>
  );
}

export default App;
