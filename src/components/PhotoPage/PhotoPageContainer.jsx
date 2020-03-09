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
    user: state.user.user
  };
};

export default connect(mapStateToProps)(PhotoPageContainer);