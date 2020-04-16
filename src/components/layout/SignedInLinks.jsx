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
  const {user} = props
  console.log(`user status:`, user)
  console.log(`props status:`, props)
  const identification = user.user ? <Link to='/info'>{user.user.email}</Link> : <Link to='/info'>no login</Link>
  return (
    <ul className='right'>
      <li>{identification}</li>
      <li><NavLink to='/photo' className='btn btn-floating pink lighten-1'><i className="material-icons">add_a_photo</i></NavLink></li> 
      <li><NavLink to="/chart">Your chart</NavLink></li> 
      <li><NavLink to="/info">Info</NavLink></li>
      {/* <li><Link to="/">Log out</Link></li> */}
      {/* <li><a onClick={handleLogout}>Log Out</a></li> */}
      <li><Link to="/main">ALT</Link></li> 
    </ul>
  )
}
const mapStateToProps = (state) => {
  console.log(`state in here:`,state)
  return {
    user: state.user
  }
}
// export default connect(mapStateToProps)(NavBar)
export default connect(mapStateToProps)(SignedInLinks);