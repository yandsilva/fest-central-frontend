import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

export default function ExploreMenu() {
  return (
    <div className="explore-menu">
      <h2>Explore as Categorias</h2>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
