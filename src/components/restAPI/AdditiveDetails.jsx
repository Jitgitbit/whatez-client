import React from "react";
import { NavLink } from "react-router-dom";


export default function CategoryDetails(props) {
  
  const additive = props.additive ? (
    <div className="additivesCategory card teal lighten-5">
      <div className="card-content ">
        <h4 className="card-title red-text">E {props.additive.code}</h4>
        <br></br>
        <p>name: {props.additive.name}</p>
        <p>function: {props.additive.function}</p>
        {/* <p>{props.additive.foods}</p> */}
        <br></br>
        <button className="btn pink lighten-1 z-depth-0"><NavLink to="/info" style={{color:'white'}}>back to categories</NavLink></button>
        <br></br>
      </div>
    </div>
  ) : (
    <div className="center">Loading Additive...</div>
  )
  return (

      <div className='container'>
        <h4 className="center">Additive description</h4>
        {additive}
      </div>
    
  )
}


     