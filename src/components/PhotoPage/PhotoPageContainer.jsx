import React from 'react'
import UploaderForm from './UploaderForm'
import { connect } from "react-redux";


function PhotoPageContainer() {
  
  return (
    <div>
      <UploaderForm />
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user.user,
    shot: state.shot,
    history: state.history
  };
};

export default connect(mapStateToProps)(PhotoPageContainer);