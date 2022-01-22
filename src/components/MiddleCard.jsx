import React from "react";
import Calendar from "../assets/icons/Calendar";
import Information from "../assets/icons/Information";
import Button from "./common/Button";
import "../styles/MiddleCard.scss";

function MiddleCard() {
  return (
    <div className="middle-card">
      <div className="slider-menu">
        <div className="slider-menu-opcion--active">Internet</div>
        <div className="slider-menu-opcion"> Cambiazo </div>
      </div>

      <hr className="hr-top" />

      <div className="middle-card-description">
        <p className="title"> Otros paquetes y bonos </p>
        <div className="btn-container">
          <Button variant="secondary">Comprar internet</Button>
        </div>
        <div className="bottom-section">
          <div className="bottom-section-left">
            <div className="bottom-section-desc">
              <p className="libre"> Libre </p>
              <p>
                <strong> 5 GB - 5 Días </strong>
              </p>
            </div>
            <div className="bottom-section-desc">
              <p className="consumido"> Consumido </p>
              <p>
                <strong> 2 MB </strong>
              </p>
            </div>
          </div>
          <div className="bottom-section-icons">
            <div className="info-icon tooltip">
              <Information />
              <div class="left">
                <p className="info"> Información </p>
                <p className="tooltip-desc">
                  {" "}
                  Velocidad de hasta 256 Kbps a partir de 5GB{" "}
                </p>
                <i></i>
              </div>
            </div>
            <div className="calendar-icon">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleCard;
