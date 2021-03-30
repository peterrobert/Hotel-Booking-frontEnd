import React from "react";

const BookingDisplay = (props) => {
  const { hotelInfo } = props;
  return (
    <div className="booking_show_card">
      <div>
        <div className="info_booked_hotel">
          <img src={`${hotelInfo.main_image}`} alt="Avatar" />
          <span>{hotelInfo.name}</span>
        </div>
        <div className="text-right">
          <button
            className="btn btn-success btn-small"
            type="button"
            data-toggle="collapse"
            data-target={`#${props.info.id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            view booking
          </button>
        </div>
      </div>

      <div className="collapse" id={props.info.id}>
        <hr />
        <div className="card card-body">
          <ul>
            <li>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              <span>Guest: {props.info.guest}</span>{" "}
            </li>
            <li>
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span>Number of rooms: {props.info.room}</span>{" "}
            </li>
            <li>
              <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
              <span>Arrival: {props.info.arrival}</span>{" "}
            </li>
            <li>
              <i className="fa fa-calendar-times-o" aria-hidden="true"></i>
              <span>Departure: {props.info.departure}</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingDisplay;
