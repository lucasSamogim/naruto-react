import React from "react";
import "./footer.css";
import footer from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer-container">
            <img 
                className="footer-img" 
                src={footer} 
                alt="Logo Naruto"
                onClick={()=>navigate("/")}     
            />

            <div className="copyright">
                Desenvolvido por <a href="https://github.com/lucasSamogim" rel="noreferrer" target="_blank">Lucas Samogim Pereira</a>
            </div>
        </div>
    );
};

export default Footer;