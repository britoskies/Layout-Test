import React from "react";
import Button from "./common/Button";
import Information from "./../assets/icons/Information";
import "../styles/BottomCard.scss";

function BottomCard() {
  return (
    <div className="bottom-card">
      <p className="balances"> Balances </p>
      <hr />
      <div className="middle-section">
        <p className="title"> Consulta de Balances </p>
        <div className="all-btn-container">
          <div className="btn-container">
            <Button variant="secondary"> Pasatiempo </Button>
          </div>
          <div className="btn-container">
            <Button variant="primary"> Recargar </Button>
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-section-left">
            <div className="bottom-section-desc">
              <p className="recarga"> Recarga </p>
              <p>
                <strong> $76.00 </strong>
              </p>
            </div>
            <div className="bottom-section-desc">
              <p className="pasatiempo"> Pasatiempo </p>
              <p>
                <strong> $0.00 </strong>
              </p>
            </div>
            <div className="bottom-section-desc">
              <p className="balance-prom"> Balance Promocional </p>
              <p>
                <strong> $200.00 </strong>
              </p>
            </div>
            <div className="bottom-section-desc">
              <p className="bono"> Bono </p>
              <p>
                <strong> $75.00 </strong>
              </p>
            </div>
          </div>
          <div className="bottom-section-icons">
            <div className="info-icon">
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCard;
