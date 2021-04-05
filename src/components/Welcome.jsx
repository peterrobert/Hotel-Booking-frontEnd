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

const Welcome = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/hotels');
  };
  return (
    <div>
      <div className="welcome-page">
        <div className="welcome-info">
          <h1 className="text-center">
            Book the Best Hotel At Affordable prices
          </h1>
          <button onClick={handleClick}>
            view hotels <i className="fa fa-home" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
