import React from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/hotels");
  };
  return (
    <div>
      <div className="welcome-page">
        <div className="welcome-info">
          <h1 className="text-center">
            Book the Best Hotel At Affordable prices
          </h1>
          <button onClick={handleClick}>
            view hotels <i className="fa fa-home" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
