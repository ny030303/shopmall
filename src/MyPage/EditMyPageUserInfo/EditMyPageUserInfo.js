import React from "react";
import "./EditMyPageUserInfo.css";
import {MyTable} from "../../Component/MyTable/MyTable";
import {getLoginInfo, getUsers, logout, putUsers} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";
import eventService from "../../services/EventService";

class EditMyPageUserInfo extends React.Component {
  state = {
  };

  componentDidMount() {
    let user = getLoginInfo();
    console.log(user);
    document.querySelector("#edit_user_name").value = user.name;
    document.querySelector("#edit_user_birthday").value = user.birthday;
    document.querySelector("#edit_user_tel1").value = user.phone.substr(0, 3);
    document.querySelector("#edit_user_tel2").value = user.phone.substr(4, 4);
    document.querySelector("#edit_user_tel3").value = user.phone.substr(-4);
    document.querySelector("#edit_user_id").value = user.id;
  }


  updateUserInfo = (e) => {
    let pwd = document.querySelector("#edit_user_pwd").value.trim();
    let uid = document.querySelector("#edit_user_id").value;
    if ( pwd != "") {
      putUsers({
        name: document.querySelector("#edit_user_name").value,
        birthday: document.querySelector("#edit_user_birthday").value,
        phone: document.querySelector("#edit_user_tel1").value
          + document.querySelector("#edit_user_tel2").value
          + document.querySelector("#edit_user_tel3").value,
        id: uid,
        pwd: pwd,
      }, res => {
        alertDialog.show('알림', '회원 정보가 수정됐습니다. 재로그인 해주세요.');
        eventService.emitEvent("logout");
      });
    }
    else {
      alertDialog.show('알림', '비밀번호를 반드시 입력해주세요.')
    }
  };

  render() {
    const {cloths} = this.props;
    return (
      <div>
        <h5 style={{borderBottom:"1px solid #ddd", padding:"20px 0"}}><b>회원정보 수정</b></h5>
        <br/>
        <h5 style={{fontSize: "17px", display:"inline-block"}}>회원 기본정보</h5>
        <p style={{fontSize:"14px", color:"#888", display:"inline-block", margin: "0 0 0 265px"}}>* 개인정보 수정 시 하단의 “변경사항 저장” 을 클릭하셔야 수정내용 반영됩니다.</p>
        <MyTable inputs={
          [
            {
              title: '이름',
              name: "edit_user_name",
              style: {width: "270px"},
              placeholder: "이름을 적어주세요",
            },
            {
              title: '생년월일',
              name: "edit_user_birthday",
              style: {width: "400px"},
              placeholder: "생년월일을 적어주세요. (ex: 20030110)",
            },
            {
              title: '휴대전화',
              subInputs: [
                {
                  type: "select",
                  select: ["010", "011", "016", "017", "018", "019"],
                  name: "edit_user_tel1",
                  style: {width: "100px", fontSize: "13px"}
                },
                {type: "input", name: "edit_user_tel2", style: {width: "100px"}},
                {type: "input", name: "edit_user_tel3", style: {width: "100px"}}
              ]
            },
            {
              title: '아이디',
              name: "edit_user_id",
              style: {width: "400px"},
              placeholder: "아이디를 적어주세요",
              readOnly:true
            },
            {
              title: '비밀번호',
              name: "edit_user_pwd",
              style: {width: "400px"},
              placeholder: "새로운 비밀번호를 적어주세요",
            },
          ]
        }/>
        <br/><br/>
        <div className="orderButtonWrap">
          <button className="blackBtnStyle" onClick={this.updateUserInfo}>변경사항 저장</button>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default EditMyPageUserInfo;