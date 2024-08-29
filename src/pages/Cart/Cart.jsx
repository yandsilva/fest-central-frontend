import EventInformation from "../../components/EventInformation/EventInformation";
import HeaderMenu2 from "../../components/HeaderMenu2/HeaderMenu2";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <HeaderMenu2 />
      <div className="cart">
        <EventInformation />
      </div>
    
    </>
  );
}
