/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Port from '../port';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorText: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  // eslint-disable-next-line class-methods-use-this
  handleLoginError() {
    return (
      <div className="alert alert-danger" role="alert">
        The email and password combination is wrong. Kindly enter the right
        credentials. If you have no account kindly sign up
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userInfo = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };

    fetch(`${Port}api/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo.user),
    })
      .then((response) => {
        if (
          response.status !== 'created'
          && response.statusText === 'Unauthorized'
        ) {
          this.setState({
            email: '',
            password: '',
            errorText: true,
          });
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.data.authentication_token);
        localStorage.setItem('user_id', data.data.id);
        const { history } = this.props;
        history.push('/hotels');
      })
      .catch((Error) => {
        // eslint-disable-next-line no-empty
        if (Error) {
        }
      });
  }

  render() {
    return (
      <div className="container signup-form">
        {this.state.errorText === true ? this.handleLoginError() : ''}
        <form onSubmit={this.handleSubmit} className="form_styles">
          <div className="container">
            <h1>Sign In</h1>
            <p>Please fill in this form to sign in</p>
            <hr />

            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              value={this.state.email}
              placeholder="Enter Email"
              name="email"
              onChange={this.handleChange}
              required
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Sign in
              </button>
              <p className="mb-0 no-ccount">
                <span>Dont have an account?</span>{' '}
                <Link to="/signup">sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
