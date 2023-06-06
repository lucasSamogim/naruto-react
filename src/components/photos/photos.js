import React from "react";
import "./photos.css";
import img1 from "../../assets/photo1.jpg"
import img2 from "../../assets/photo2.jpg"
import img3 from "../../assets/photo3.jpg"
import img4 from "../../assets/photo4.jpg"
import img5 from "../../assets/photo5.jpg"
import img6 from "../../assets/photo6.jpg"
import img7 from "../../assets/photo7.jpg"
import img8 from "../../assets/photo8.jpg"
import img9 from "../../assets/photo9.jpg"
import img10 from "../../assets/photo10.jpg"
import img11 from "../../assets/photo11.jpg"
import img12 from "../../assets/photo12.jpg"

function Photos() {

    return (
        <div className="photos-container">
            <h1 className="photo-title">
                Fotos
            </h1>
            <h3 className="photo-subtitle">
                Clique nas imagens para fazer o download
            </h3>

            <div className="photo-card-container">

                <a href={img1} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img1} />
                    </div>
                </a>

                <a href={img2} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img2} />
                    </div>
                </a>

                <a href={img3} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img3} />
                    </div>
                </a>

                <a href={img4} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img4} />
                    </div>
                </a>

                <a href={img5} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img5} />
                    </div>
                </a>

                <a href={img6} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img6} />
                    </div>
                </a>

                <a href={img7} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img7} />
                    </div>
                </a>

                <a href={img8} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img8} />
                    </div>
                </a>

                <a href={img9} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img9} />
                    </div>
                </a>

                <a href={img10} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img10} />
                    </div>
                </a>

                <a href={img11} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img11} />
                    </div>
                </a>

                <a href={img12} download>
                    <div className="photo-card">
                        <img className="photo-card-img" alt="" src={img12} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Photos;