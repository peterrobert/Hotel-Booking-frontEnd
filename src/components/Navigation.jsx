/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';

class Navigation extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(e) {
    e.preventDefault();
    // eslint-disable-next-line camelcase
    const user_id = localStorage.getItem('user_id');
    if (user_id !== undefined) {
      fetch(`http://localhost:3000/api/v1/sessions/${user_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');

            window.location.reload();
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="top_bar" />
        <div className="logo text-center">
          <i className="fa fa-home" aria-hidden="true" />{' '}
          <span>Hotel booking</span>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/hotels">hotels</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking">bookings</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>

        <div className="logIn">
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {};

export default withRouter(Navigation);
