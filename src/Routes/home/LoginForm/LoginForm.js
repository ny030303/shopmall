import React from 'react';
import {Redirect} from 'react-router-dom';
import {getUsers} from "../../../services/DataService";

import "./LoginForm.css"
import alertDialog from "../../../services/AlertDialog";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userPwd: '',
    }
  }

  handleClick = () => {
    if( this.state.userId.length == 0 || this.state.userPwd.length == 0) {
        alertDialog.show('알림', '아이디와 패스워드를 입력해주세요.');
        return;
    }

    getUsers(this.state.userId, this.state.userPwd, res => {
       console.log(res)
    });
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: "/"}};
    console.log('login from:', from);
    return ((this.props.authed === true) ? (<Redirect to={from}/>) : (
      <div className="div-form-login">
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
             width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input value={this.state.userId} type="text" className="form-control" placeholder="user id"
               onChange={({target: {value}}) => this.setState({userId: value})}/>
        <div style={{height: "2px"}}> </div>
        <input value={this.state.userPwd} type="password" className="form-control"  placeholder="password"
               onChange={({target: {value}}) => this.setState({userPwd: value})}/>
        <div style={{height: "2px"}}> </div>
        <div className="checkbox mb-3">
          <label> <input type="checkbox" value="remember-me"/> Remember me </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>Sign in</button>
      </div>
    ));
  }
}

export default LoginForm;