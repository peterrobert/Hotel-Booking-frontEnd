import React from "react";
import Navigation from "./Navigation";

const ShowHotel = (props) => {
  const { main_image } = props.data;

  const backStyles = {
    backgroundImage: `url(${main_image})`,
    height: "450px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-9">
        <div className="top_bar"></div>
          <div style={backStyles}></div>
        </div>
      </div>
    </div>
  );
};

export default ShowHotel;
