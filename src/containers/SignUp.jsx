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
import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { signUpUser } from "../redux/Actions/signUpAction";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      displayError: false,
      spinners: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  handleLoginError() {
    return (
      <div className="alert alert-danger" role="alert">
        The email is already taken. signup with another email. If you have an
        account kindly sign in. <Link to="/signin">sign In link</Link>
      </div>
    );
  }

  handleStorage(data) {
    if (data.status === 201) {
      const { history } = this.props;
      localStorage.setItem("token", data.data.authentication_token);
      localStorage.setItem("user_id", data.data.id);

      history.push("/hotels");

      return;
    } else {
      this.setState({
        email: "",
        password: "",
        password_confirmation: "",
        displayError: true,
        spinners: false,
      });
    }
  }

  handleSignUp() {
    const userInfo = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      },
    };
    this.props.registerUser(userInfo);
    setTimeout(() => {
      const { data } = this.props.registeredUser.registration;
      this.handleStorage(data);
    }, 3000);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      spinners: true,
    })

    this.handleSignUp();
  }

  render() {
    return (
      <div className="container signup-form">
         
        {this.state.displayError === true ? this.handleLoginError() : ""}
        <form onSubmit={this.handleSubmit} className="form_styles">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
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

            <label>
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="password_confirmation"
              onChange={this.handleChange}
              value={this.state.password_confirmation}
              required
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                {this.state.spinners === true ? (
                 "loading ..."
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registeredUser: state,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (userInfo) => dispatch(signUpUser(userInfo)),
});

SignUp.propTypes = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
