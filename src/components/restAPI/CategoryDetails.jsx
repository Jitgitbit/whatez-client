import React from "react";

export default function CategoryDetails(props) {
  const additivesCategory = props.category ? (
    <div className="additivesCategory card teal lighten-5">
      <div className="card-content ">
        <h4 className="card-title red-text">{props.category.name}</h4>
        <br></br>
        <p>{props.category.description}</p>
      </div>
    </div>
  ) : (
    <div className="center">Loading additives category...</div>
  )
  return (
    <div>
      <div className='container'>
        <h4 className="center">Category description</h4>
        {additivesCategory}
      </div>
    </div>
  )
}


     