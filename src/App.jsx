import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path= "/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
