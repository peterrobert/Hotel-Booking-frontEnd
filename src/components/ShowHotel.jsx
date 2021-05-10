/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from './Navigation';

const ShowHotel = (props) => {
  const history = useHistory();
  // eslint-disable-next-line react/prop-types
  const { main_image, name, description, location, price } = props.data;
  const backStyles = {
    backgroundImage: `url(${main_image})`,
    height: '450px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const handleDisplay = () => {
    // eslint-disable-next-line react/prop-types
    const servicesView = props.servicesOffered.map((item) => {
      return (
        <>
          <h5 className="card-title">
            <i className={`${item.icon}`} aria-hidden="true" />
            {item.title}
          </h5>
          <p className="card-text">{item.description}</p>
        </>
      );
    });

    return servicesView;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-9 show-info">
          <div className="top_bar" />
          <div style={backStyles} />
          <div className="row">
            <div className="col-md-6 hotel-disp">
              <h4>{name}</h4>
              <i className="fa fa-map-marker" aria-hidden="true" />{' '}
              <span>Location: {location}</span>
              <br />
              <i className="fa fa-usd" aria-hidden="true" />{' '}
              <span>price per night: {price} $$</span>
              <br />
              <p>{description}</p>
            </div>

            <div className="col-md-6">
              <div className="card text-white bg-success mb-3">
                <div className="card-header">Services Offered</div>
                <div className="card-body">
                  {props.servicesOffered !== null 
                    ? handleDisplay()
                    : 'No services offered at the moment'}

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push('/booking');
                    }}
                  >
                    reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowHotel;
