import React from "react";
import { assets } from "../../assets/assets";

import "./HeaderMenu.css";

export default function HeaderMenu() {
  return (
    <div>
      <div>
        <picture>
          <source
            media="(max-width: 350px)"
            srcSet={assets.heromobile}
            className="bannerprincipal"
          />
          <img src={assets.hero} className="bannerprincipal" />
        </picture>
      </div>
    </div>
  );
}
