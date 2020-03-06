import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/users/actions";
import { withRouter } from "react-router";
import { Card, Button, TextField } from "@material-ui/core";


export class LogInPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("this.state", this.state);
    console.log(
      "what is props dispatch in handleSubmit:",
      this.props.dispatch
    );
    await this.props.dispatch(userLogin(email, password, this.props.history));
    console.log("handleSubmit-Login: ", this.props.user);
  };

  handleChange = event => {
    const { value } = event.target;
    console.log("value in handleChange:", value);
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("state is:", this.state);
  };

  render() {
    return (
      <>
        <Card
          variant='elevation'
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            width: "500px",
            height: "400px"
          }}
        >
          <h2>Login</h2>
          <form
            noValidate
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              onChange={this.handleChange}
              name='email'
              value={this.state.email}
              label='Email'
              variant='filled'
            />
            <TextField
              onChange={this.handleChange}
              value={this.state.password}
              name='password'
              type='password'
              label='Password'
              variant='filled'
            />
            <div>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{
                  marginTop: "10px",
                  width: "100px",
                  marginRight: "10px"
                }}
              >
                Login
              </Button>
              <Button
                variant='contained'
                style={{ marginTop: "10px", width: "100px" }}
                onClick={() => this.props.history.push("/")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </>
    );
  }
}

export default withRouter(connect()(LogInPage));
