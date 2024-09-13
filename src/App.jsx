import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login/Login";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import CreateEvent2 from "./components/CreateEvent2/CreateEvent2";
import Footer from "./components/Footer/Footer";
import CreateEvent3 from "./components/CreateEvent3/CreateEvent3";
import Navbar from "./components/Navbar/Navbar";
import Events from "./pages/Events/Events";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-event2" element={<CreateEvent2 />} />
        <Route path="/create-event3" element={<CreateEvent3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
