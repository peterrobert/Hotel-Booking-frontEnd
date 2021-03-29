import React, { Component } from "react";
import { withRouter } from "react-router";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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

  handleSubmit(event) {
    event.preventDefault();
    const userInfo = {
      user: this.state,
    };

    fetch(`http://localhost:3000/api/v1/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo.user),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.data.authentication_token);

        const { history } = this.props;
        history.push(`/booking`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container signup-form">
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
