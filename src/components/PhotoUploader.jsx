import React from "react";
import { Card, Button, TextField } from "@material-ui/core";
import { createShot } from "../actions/shotsActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { post } from "axios";
import NavBar from "./NavBar";

class PhotoUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    const formData = new FormData();
    formData.append("file", this.state.file);

    this.props.createShot(formData, this.props.history);
    console.log(`PROPS HERE ARE:`, this.props);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    console.log("props", this.props);
    return (
      // <form onSubmit={this.onFormSubmit} method="POST" encType="multipart/form-data">
      //   <h3>Img Upload</h3>
      //   <input type="file" onChange={this.onChange} name="avatar"/>
      //   <button type="submit">Upload</button>
      // </form>
      <>
        <NavBar />
        <Card
          variant='elevation'
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            width: "400px",
            height: "200px"
          }}
        >
          <h4>Img Upload</h4>
          <form
            noValidate
            onSubmit={this.onFormSubmit}
            method='POST'
            encType='multipart/form-data'
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              onChange={this.onChange}
              type='file'
              name='avatar'
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
                {/* <Link className="nav-link" to={`/main`} style={{color:"white", textDecoration:"none"}}> */}
                Upload
                {/* </Link> */}
              </Button>
              <Button
                variant='contained'
                style={{ marginTop: "10px", width: "100px" }}
                // onClick={() => this.props.history.push("/main")}
              >
                <Link
                  className='nav-link'
                  to={`/main`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Cancel
                </Link>
              </Button>
            </div>
          </form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot
  };
};

export default connect(mapStateToProps, { createShot })(PhotoUploader);
