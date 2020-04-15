import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
// import { useDispatch } from "react-redux";

function SignedInLinks(props) {
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch({
  //     type: "CLEAR_USER_DATA"
  //   });
  // };
  return (
    <ul className='right'>
      <li><NavLink to='/photo' className='btn btn-floating pink lighten-1'><i class="material-icons">add_a_photo</i></NavLink></li> 
      <li><NavLink to="/chart">Your chart</NavLink></li> 
      <li><NavLink to="/info">Info</NavLink></li>
      {/* <li><Link to="/">Log out</Link></li> */}
      {/* <li><a onClick={handleLogout}>Log Out</a></li> */}
      <li><Link to="/main">ALT</Link></li> 
    </ul>
  )
}
export default connect()(SignedInLinks);