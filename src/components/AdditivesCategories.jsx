import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

// const axios = require("axios");

export default class AdditivesCategories extends Component {
  state ={
    additiveCategories: [ ]
  }
  componentDidMount(){
    axios({
      "method":"GET",
      "url":"https://vx-e-additives.p.rapidapi.com/categories",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
      "x-rapidapi-key":"592be0ac5emsh1f2a31abf42d2e4p15ee76jsnf519e97b2684"
      },"params":{
      "sort":"name"
      }
      })
      .then(response => {
        console.log(`=========>> logging response from get in home:`,response)
        this.setState({
          additiveCategories: response.data.slice(0, 10)
        })
      })
      .catch((error)=>{
        console.log(error)
      })    
  }
  render() {
    const {additiveCategories} = this.state;
    const additiveCategoryList = additiveCategories.length ? (
      additiveCategories.map(additiveCategory => {
        return (
          <div className="additiveCategory card teal lighten-5" key={additiveCategory.id}>
            <div className="card-content ">
              <Link to={'/info/' + additiveCategory.id}>
                <span className="card-title red-text">E {additiveCategory.category}'s</span>
              </Link>
              <p>{additiveCategory.name}</p>
              <p className="right">additives: {additiveCategory.additives}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No additive categories loaded yet</div>
    )
    return (
      <div>
        <NavBar/>
          <div className='container additiveCategories '>
            <h4 className="center">Additive Categories</h4>
            {additiveCategoryList}
          </div>
      </div>
    )
  }
}