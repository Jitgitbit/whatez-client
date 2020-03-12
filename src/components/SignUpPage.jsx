import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignUp } from "../actions/usersActions";
import { Card, Button, TextField } from "@material-ui/core";


export class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log("this.state", this.state);

    this.props.dispatch(userSignUp(username, email, password));
    this.clear();
    this.props.history.push("/login");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clear = () => {
    this.setState({
      username: "",
      email: "",
      password: ""
    });
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
          <h4>Sign up!</h4>
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
              name='username'
              value={this.state.username}
              label='username'
              variant='filled'
            />
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
              type='password'
              name='password'
              label='Password'
              variant='filled'
            />
            <div style={{ display: "flex" }}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  width: "100px"
                }}
              >
                Submit
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

export default connect()(SignUpPage);