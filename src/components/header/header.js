import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/logo.png";
import burguer from "../../assets/hamburguer.png";
import close from "../../assets/close.png";

function Header() {
    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);
    
    function handleClick() {
        setToggle(toggle => !toggle);
    };

    let toggleClassCheck = toggle ? 'show' : '';
    let toggleImgCheck = toggle ? close : burguer;

    return (
        <header>
            <nav>
                <img id="logo" src={Logo} alt="Logo The Lord of the Rings" onClick={()=>navigate("/")}/>
            
                <ul className="large-menu">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/fotos")}>Fotos</li>
                    <li onClick={()=>navigate("/comentarios")}>Comentarios</li>
                    <li onClick={()=>navigate("/contato")}>Contato</li>
                </ul>

                <div 
                    className="menu"
                    onClick={handleClick}  
                >
                    {/* <div className="menu-bars"></div>
                    <div className="menu-bars"></div>
                    <div className="menu-bars"></div> */}
                    <img className="hamburguer-menu" src={toggleImgCheck} alt="menu hamburguer"/>
                </div>
            </nav>
            <div className={`small-menu ${toggleClassCheck}`}>
                <ul className="small-menu-ul">
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/fotos")}>Fotos</li>
                    <li onClick={()=>navigate("/comentarios")}>Comentarios</li>
                    <li onClick={()=>navigate("/contato")}>Contato</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;