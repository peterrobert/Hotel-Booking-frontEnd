import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../redux/Actions/signUpAction";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      displayError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLoginError() {
    return (
      <div className="alert alert-danger" role="alert">
        The email is already taken. signup with another email. If you have an
        account kindly sign in. <Link to="/signin">sign In link</Link>
      </div>
    );
  }

  handleStorage(Info, history) {
    if (Info.status === "created") {
    } else {
      this.setState({
        email: "",
        password: "",
        password_confirmation: "",
        displayError: true,
      });
    }
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    const userInfo = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      },
    };
    this.props.registerUser(userInfo);
    const { data } = this.props.registeredUser.registration;
    if (data.status === "created") {
      history.push(`/hotels`);
      localStorage.setItem("token", data.data.authentication_token);
    } else {
      this.setState({
        email: "",
        password: "",
        password_confirmation: "",
        displayError: true,
      });
    }
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
                Sign Up
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
