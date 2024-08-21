import React from "react";
import { assets } from "../../assets/assets"
import { Link } from "react-router-dom";

import './HeaderMenu.css'

export default function HeaderMenu() {
    
    return(
        <div> 
            <div className="topoLinks1">
                <img src={assets.logotipo_topo} alt="" className="logotipotopo" />
            </div>
            <div className="topoLinks2">
                <Link to='/' className="linkunit">Início</Link>
                <Link to='/' className="linkunit">Eventos</Link>
                <Link to='/' className="linkunit">Sobre</Link>
                <Link to='/' className="linkunit">Contato</Link>
            </div>
            <div className="topoLinks3">
                <Link to='/' className="linkunit">Criar Evento</Link>
                <Link to='/' className="linkunit">Login</Link>
            </div>
            <div className="topolinks4">
                <Link to='/'> <img src={assets.signUpButton} alt="" className="linkunitsign"/> </Link>
            </div>
            
            <div>
                <picture>
                    {/* <source media="(min-width: 650px)" srcset={assets.hero} className="bannerprincipal" />
                    <source media="(min-width: 350px)" srcset={BannerMobile} className="bannerprincipal" /> */}
                    <img src={assets.hero} className="bannerprincipal" ></img>
                </picture>
            </div>
        </div>
    )
}