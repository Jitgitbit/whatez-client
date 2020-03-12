import React from 'react'
import { Card, Button, TextField } from "@material-ui/core";
import {createShot} from "../actions/shotsActions"
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { post } from 'axios';

class PhotoUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file)
    this.props.createShot(
      this.state.file.name,
      this.props.history,
      this.props.user.token)
    console.log(`PROPS HERE ARE:`,this.props)
    // this.props.history.push("/main")
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = "http://localhost:5000/shots/new";
    const formData = new FormData();
    console.log(`LOGGING THE FILE:`, file.name )
    this.setState({file: file})
    formData.append('file', file)
    console.log({ formData })

    return  post(url,formData, {})
  }
//action="/upload" for the form?
  render() {
    return (
      // <form onSubmit={this.onFormSubmit} method="POST" encType="multipart/form-data">
      //   <h3>Img Upload</h3>
      //   <input type="file" onChange={this.onChange} name="avatar"/>
      //   <button type="submit">Upload</button>
      // </form>
      <>
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
          method="POST" encType="multipart/form-data"
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
              <Link className="nav-link" to={`/main`} style={{color:"black", textDecoration:"none"}}>
              Cancel
              </Link>
            </Button>
          </div>
        </form>
      </Card>
    </>
   )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot,
    history: state.history
  };
};

export default connect(mapStateToProps, {createShot})(PhotoUploader);