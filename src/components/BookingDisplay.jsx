import React from "react";

const BookingDisplay = (props) => {
  console.log(props.info);
  return (
    <div className="booking_show_card">
      <p className="text-right">
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
      </p>

      <div className="collapse" id={props.info.id}>
        <hr />
        <div className="card card-body">
          <ul>
            <li>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              <span>Guest: {props.info.guest}</span>{" "}
            </li>
            <li>
            <i class="fa fa-bed" aria-hidden="true"></i>
              <span>Number of rooms: {props.info.room}</span>{" "}
            </li>
            <li>
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
              <span>Arrival: {props.info.arrival}</span>{" "}
            </li>
            <li>
              <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
              <span>Departure: {props.info.departure}</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingDisplay;
