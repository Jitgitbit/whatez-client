import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom';

function NavBar(props) {
  console.log(`=========>> PROPS IN NavBar:`,props)
  // setTimeout(() => {
  //   props.history.push('/about')                     // <<========= Thanks to withRouter and adding props, this now works !
  // }, 2000);
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a className="brand-logo">What Ez</a>
        <ul className='right'>
          <li><Link to="/">Log out</Link></li>
          <li><NavLink to="/photo">Upload photo</NavLink></li>
          <li><NavLink to="/chart">Your chart</NavLink></li> 
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(NavBar); // <<=== REMEMBER THIS FOR ADDING HISTORY TO A ROUTELESS COMPONENT!!!