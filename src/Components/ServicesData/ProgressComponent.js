import React from "react";

function ProgressComponent({ title, img, progress }) {
  const imageUrl = `/images/Services/${img}`;

  return (
    <div className="wrapProCom">
      <div className="progress-component">
        <div className="proComLeft">
          <div className="leftForFlex">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
          </div>
          <p>{progress}%</p>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressComponent;
