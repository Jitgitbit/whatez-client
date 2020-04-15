import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { withRouter } from "react-router";
// import { signIn } from '../../store/actions/authActions';
import { userLogin } from "../../store/actions/authActions";


class LogIn extends Component {
  state = {
    email:'',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value                  // this is how either pwd or email is specified in input !!!
    });
  }
  // handleChange = event => {
  //   const { value } = event.target;
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   this.props.signIn(this.state)
  // }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("this.state:", this.state);
    console.log("what is props dispatch in handleSubmit:", this.props.dispatch);
    await this.props.dispatch(userLogin(email, password, this.props.history));
    console.log("handleSubmit-Login: ", this.props.user);
  };
  render() {
    // const {authError, auth} = this.props
    // const {auth} = this.props
    const {user} = this.props
    if(user.user) return <Redirect to='/'/>
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
            <div className="red-text center">
    {/* {authError ? <p>{authError}</p> : null} */}
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
    // authError: state.auth.authError,
    // auth: state.user.user.token
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
// export default withRouter(connect()(SignIn));
export default connect(mapStateToProps)(LogIn);