import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login/Login";
import CreateEvent from "./components/CreateEvent/CreateEvent";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
