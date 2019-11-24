import React from "react";
import "./SignUpForm.css";
import {MyTable} from "../../Component/MyTable/MyTable";
import {putUsers} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";


class SignUpForm extends React.Component {
  signUp = (e) => {
    putUsers({
      name: document.querySelector("#signup_name").value,
      birthday: document.querySelector("#signup_birthday").value,
      phone: document.querySelector("#signup_tel1").value
      + document.querySelector("#signup_tel2").value
      + document.querySelector("#signup_tel3").value,
      id: document.querySelector("#signup_id").value,
      pwd: document.querySelector("#signup_pwd").value,
    }, res => {
      console.log(res);
      if (res.result == 1) {
        this.props.history.push("/");
        alertDialog.show("알림", "회원가입이 완료 되었습니다.");
      }
      else {
        alertDialog.show("알림", "아이디가 중복되거나 빈 칸이 있습니다. 재확인 부탁드립니다.");
      }
    });
  };

  render() {
    const {cloths} = this.props;
    // console.log(cloths);
    return (
      <div>
        <div style={{paddingTop: "90px"}}/>
        <div className="inner_align">
          <div className="loginWelcomeTitle">
            <h4 style={{fontSize: "29px"}}>회원가입</h4>
            <p>항목에 맞춰 작성해 주시기 바랍니다.</p>
          </div>
          <br/><br/>

          <h5>필수항목</h5>
          <MyTable inputs={
            [
              {
                title: '이름',
                name: "signup_name",
                style: {width: "270px"},
                placeholder: "이름을 적어주세요",
              },
              {
                title: '생년월일',
                name: "signup_birthday",
                style: {width: "400px"},
                placeholder: "생년월일을 적어주세요. (ex: 20030110)",
              },
              {
                title: '휴대전화',
                subInputs: [
                  {
                    type: "select",
                    select: ["010", "011", "016", "017", "018", "019"],
                    name: "signup_tel1",
                    style: {width: "100px", fontSize: "13px"}
                  },
                  {type: "input", name: "signup_tel2", style: {width: "100px"}},
                  {type: "input", name: "signup_tel3", style: {width: "100px"}}
                ]
              },
              {
                title: '아이디',
                name: "signup_id",
                style: {width: "400px"},
                placeholder: "아이디를 적어주세요",
              },
              {
                title: '비밀번호',
                name: "signup_pwd",
                style: {width: "400px"},
                placeholder: "비밀번호를 적어주세요",
              },
            ]
          }/>
          <h5>약관동의</h5>
          <div className="jumbotron signUpJumbotron">
            <div readOnly="readOnly" className="textareaStyle">
              제 1 조 (목적)<br/>
              <br/>
              이 약관은 쇼핑몰 주식회사 ("회사" 또는 "쇼핑몰")가 제공하는 쇼핑몰 및 쇼핑몰 관련 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항,
              기타 필요한 사항을 규정함을 목적으로 합니다.<br/>
              <br/>
              <br/>
              제 2 조 (정의)<br/>
              <br/>
              이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
              ①"서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 쇼핑몰 및 쇼핑몰 관련 제반
              서비스를 의미합니다.<br/>
              ②"회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을 말합니다.<br/>
              ③"아이디(ID)"라 함은 "회원"의 식별과 "서비스" 이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자와 숫자의 조합을 의미합니다.<br/>
              ④"비밀번호"라 함은 "회원"이 부여 받은 "아이디와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을
              의미합니다.<br/>
              ⑤"유료서비스"라 함은 "회사"가 유료로 제공하는 각종 온라인디지털콘텐츠(각종 정보콘텐츠, VOD, 아이템 기타 유료콘텐츠를 포함) 및 제반 서비스를
              의미합니다.<br/>
              ⑥"포인트"라 함은 서비스의 효율적 이용을 위해 회사가 임의로 책정 또는 지급, 조정할 수 있는 재산적 가치가 없는 "서비스" 상의 가상 데이터를
              의미합니다.<br/>
              ⑦"게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스상"에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종
              파일과 링크 등을 의미합니다.<br/>
              정보통신망법 규정에 따라 쇼핑몰에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니
              자세히 읽은 후 동의하여 주시기 바랍니다.<br/>
              <br/>
              <br/>
              1. 수집하는 개인정보<br/>
              <br/>
              이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 쇼핑몰 서비스를 회원과 동일하게 이용할 수 없을걸용. 이용자가 메일, 캘린더, 카페, 블로그 등과
              같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 쇼핑몰은 필요한 최소한의 개인정보를 수집합니다.
            </div>
            <label><input className="uk-checkbox" type="checkbox"/> 이용약관(필수)</label>
          </div>

          <br/><br/>
          <button className="blackBtnStyle" style={{width: "235px", display: "block", margin: "0 auto"}}
                  onClick={this.signUp}>약관동의 밑 회원가입
          </button>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default SignUpForm;