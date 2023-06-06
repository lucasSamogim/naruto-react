import React from "react";
import "./cards.css";
import Img1 from "../../assets/naruto.jpg"
import Img2 from "../../assets/kakashi.jpg"
import Img3 from "../../assets/sasuke.jpg"
import Img4 from "../../assets/sakura.png"

function Cards() {
    return (
        <div className="cards-container">
            <div className="card">
                <img className="card-img" src={Img1} alt="" />
                <div className="card-name-bg">
                    Uzumaki Naruto
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={Img2} alt="" />
                <div className="card-name-bg">
                    Hatake Kakashi
                </div>
            </div>
            <div className="card">
                <img className="card-img" src={Img3} alt="" />
                <div className="card-name-bg">
                    Uchiha Sasuke
                </div>
            </div>
            <div className="card sakura">
                <img className="card-img" src={Img4} alt="" />
                <div className="card-name-bg">
                    Haruno Sakura
                </div>
            </div>

            {/* <div className="card">
                <div className="card-name-bg">
                    Hatake Kakashi
                </div>
            </div>

            <div className="card">
                <div className="card-name-bg">
                    Uchiha Sasuke
                </div>
            </div>

            <div className="card">
                <div className="card-name-bg">
                    Haruno Sakura
                </div>
            </div> */}
        </div>
    );
};

export default Cards;