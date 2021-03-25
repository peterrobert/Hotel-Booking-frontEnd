import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../redux/Actions/signUpAction";
import { withRouter } from "react-router";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleStorage(Info) {
    if (Info.status === "created") {
      const { authentication_token } = Info.data;
      localStorage.setItem("token", authentication_token);
      const { history } = this.props;
      history.push(`/booking`);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const userInfo = {
      user: this.state,
    };
    this.props.registerUser(userInfo);
    const { data } = this.props.registeredUser.registration;
    this.handleStorage(data);
  }

  render() {
    return (
      <>
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
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </>
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
