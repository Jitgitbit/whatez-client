import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { signUp } from '../../store/actions/authActions';
import { userSignUp } from "../../store/actions/authActions";


class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log("this.state", this.state);

    this.props.dispatch(userSignUp(username, email, password));
    this.clear();
    this.props.history.push("/login");
  };
  clear = () => {
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };
  render() {
    // const {auth, authError} = this.props
    const {user} = this.props
    // if(auth.uid) return <Redirect to='/'/>
    if(user.user) return <Redirect to='/'/>
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="username">username</label>
            <input type="text" id='username' onChange={this.handleChange} value={this.state.username}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
    {/* {authError ? <p>{authError}</p> : null} */}
            </div>
          </div>
          {/* <button className="btn pink lighten-1 z-depth-0" onClick={() => this.props.history.push("/")}>Cancel</button> */}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
    // auth: state.firebase.auth,
    // authError: state.auth.authError
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (newUser) => dispatch(signUp(newUser))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default connect(mapStateToProps)(SignUp);
// export default connect()(SignUp);