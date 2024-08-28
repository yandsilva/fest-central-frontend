import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login/Login";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import CreateEvent2 from "./components/CreateEvent2/CreateEvent2";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-event2" element={<CreateEvent2 />} />
      </Routes>
    </div>
  );
}

export default App;
