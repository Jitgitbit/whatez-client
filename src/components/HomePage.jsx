import React, { Component } from "react";
import { Paper, Button } from "@material-ui/core";

class HomePage extends Component {
  render() {
    return (
      <>
        <Paper
          variant='elevation'
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            width: "400px",
            height: "200px"
          }}
        >
          <h2>Welcome to What-Ez</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "10px", width: "170px" }}
              onClick={() => this.props.history.push("/login")}
            >
              Login
            </Button>
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "10px", width: "170px" }}
              onClick={() => this.props.history.push("/signup")}
            >
              Signup
            </Button>
          </div>
        </Paper>
      </>
    );
  }
}

export default HomePage;
