import React from 'react'
import { Card, Button, TextField } from "@material-ui/core";

import axios, { post } from 'axios';

class UploaderForm extends React.Component {

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
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = "http://localhost:5000/shots/new";
    const formData = new FormData();
    console.log({ file })
    formData.append('file', file)
    console.log({ formData })

    return post(url,formData, {})
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
              Upload
            </Button>
            <Button
              variant='contained'
              style={{ marginTop: "10px", width: "100px" }}
              onClick={() => this.props.history.push("/main")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </>
   )
  }
}



export default UploaderForm