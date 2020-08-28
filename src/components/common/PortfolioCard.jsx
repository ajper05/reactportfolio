import React from "react";

export default function PortfolioCard({
  imgSrcPath,
  cardTitle,
  href,
  btnText,
}) {
  return (
    <div className="col-4 justify-content-start">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imgSrcPath}
          className="card-img-top"
          width={200}
          height={200}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <a href={href} className="btn btn-primary">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
}
