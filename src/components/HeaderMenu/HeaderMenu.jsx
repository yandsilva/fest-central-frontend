import React from "react";
import { assets } from "../../assets/assets"
import { Link } from "react-router-dom";

import './HeaderMenu.css'

export default function HeaderMenu() {
    
    return(
        <div> 
            <div className="topoLinks1">
                <picture>
                    <source media="(min-width: 950px)" srcset={assets.logotipo_topo} className="ticketprincipal" />
                    <source media="(min-width: 650px)" srcset={assets.mobileticket} className="ticketmobile" />
                    <img src={assets.mobileticket} className="ticketprincipal" ></img>
                </picture>
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
                    <source media="(min-width: 950px)" srcset={assets.banner} className="bannerprincipal" />
                    <source media="(min-width: 350px)" srcset={assets.bannermobile} className="bannerprincipal" />
                    <img src={assets.bannergrande} className="bannerprincipal" ></img>
                </picture>
            </div>
        </div>
    )
}