import React, { Component } from "react";
import PropTypes from "prop-types";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
         email: "",
         password: "",
         passwordConfirmation: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {}


  handleChange (event) {
      this.setState({
         [event.target.name] : event.target.value
      })
  }

  render() {
    return (
      <form action="action_page.php" className="form_styles">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" onChange={this.handleChange} required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <div class="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SignUp.propTypes = {};

export default SignUp;
