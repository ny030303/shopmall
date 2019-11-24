import React from 'react';
import {Redirect} from 'react-router-dom';
import {getUsers} from "../../services/DataService";

import "./LoginForm.css"
import alertDialog from "../../services/AlertDialog";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    let userId = document.querySelector("#loginID").value;
    let userPwd = document.querySelector("#loginPWD").value;
    if (userId.length == 0 || userPwd.length == 0) {
      alertDialog.show('알림', '아이디와 패스워드를 확인해주세요.');
      return;
    }

    getUsers(userId, userPwd, res => {
      console.log("result:", res);
      if (res.result) {
        this.props.onUserLogin(true, res.users);
      } else {
        this.props.onUserLogin(false);
        alertDialog.show('알림', '아이디와 비밀번호를 확인해주세요.');
      }
    });
  };

  gotoSignUpForm = () => {
    this.props.history.push("/SignUp/");
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: "/"}};
    console.log('login from:', from);
    return ((this.props.authed === true) ? (<Redirect to={from}/>) :
      (
        <div className="loginForm">
          <div style={{paddingTop: "90px"}}/>
          {/*<div className="loginBackImg"></div>*/}
          {/*<div className="backDark"></div>*/}
          <div className="inner_align">
            <div className="loginWelcomeTitle">
              <h4 style={{fontSize: "29px"}}>오신 것을 환영합니다!</h4>
              <p>로그인을 하시면 다양한 혜택을 즐기실 수 있습니다.</p>
            </div>
            <br/><br/>

            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab"/>
              </li>

            </ul>
            <br/><br/>
            <div className="tab-content">
              <div className="container tab-pane active"><br/>
                <div className="signInputWrap">
                  <div style={{display: "flex"}}>

                    <div style={{width: "100px", padding: "10px 0px"}}>아이디</div>
                    <input type="text" className="uk-input" id="loginID"
                           placeholder="user id"/>
                  </div>

                  <div style={{padding: "5px"}}/>

                  <div style={{display: "flex"}}>
                    <div style={{width: "100px", padding: "10px 0px"}}>비밀번호</div>
                    <input type="password" className="uk-input" id="loginPWD"
                           placeholder="password"/>
                  </div>
                  <div style={{padding: "5px"}}/>
                  <div className="checkbox mb-3">
                    <label><input className="uk-checkbox" type="checkbox"/> 아이디 저장</label>
                  </div>
                  <button className="blackBtnStyle" type="submit"
                          onClick={this.login}>LOGIN
                  </button>
                </div>
                <br/><br/><br/>
                <div className="jumbotron loginJumbotron">
                  <p style={{padding: "8px 20px"}}>아직 게스코리아 회원이 아닌신가요? 회원가입후 풍성한 혜택을 누리세요</p>
                  <button className="smallGrayBtn" onClick={this.gotoSignUpForm}>회원가입</button>
                </div>
              </div>
              <br/><br/><br/><br/><br/><br/>
            </div>
          </div>
        </div>
      ));
  }
}

export default LoginForm;