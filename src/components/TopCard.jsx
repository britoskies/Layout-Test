import React from "react";
import "../styles/TopCard.scss";
import Menu from "../assets/icons/Menu";
import Phone from "../assets/icons/Phone";

function TopCard() {
  return (
    <div className="top-card">
      <div className="top-section">
        <div className="menu-icon-section">
          <div className="menu-icon">
            <Menu />
          </div>
        </div>
        <div className="conteiner">
          <div className="phone-icon-section">
            <div className="phone-icon">
              <Phone />
            </div>
          </div>
          <div className="card-desc">
            <p className="profile-name"> Leandro Moreno </p>
            <div className="card-desc-bottom">
              <p className="phone-number">(829) 543 8361</p>
              <p className="state"> Activo </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-desc1">
          <p className="plan"> Plan </p>
          <p className="prepago"> Prepago </p>
        </div>
        <hr />
        <div className="bottom-section-desc2">
          <p className="fecha-suspension"> Fecha de Suspensión </p>
          <p className="fecha"> 22 de Febrero </p>
        </div>
      </div>
    </div>
  );
}

export default TopCard;
