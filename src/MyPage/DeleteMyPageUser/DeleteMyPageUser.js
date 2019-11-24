import React from "react";
import "./DeleteMyPageUser.css";
import {MyTable} from "../../Component/MyTable/MyTable";
import eventService from "../../services/EventService";
import {deleteUser, getLoginInfo} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";

class DeleteMyPageUser extends React.Component {
  state = {

  };

  deleteUser = (e) => {
    let user = getLoginInfo();
    deleteUser(user.id);
    alertDialog.show("알림", "회원탈퇴가 완료 되었습니다.");
    eventService.emitEvent("logout");
  };

  render() {
    const {cloths} = this.props;
    return (
      <div className="DeleteMyPageUser">
        <h5 style={{borderBottom:"1px solid #ddd", padding:"20px 0"}}><b>회원탈퇴</b></h5>
        <div className="loginWelcomeTitle">
          <h5 style={{fontSize: "20px"}}>그동안 GUESS KOREA를 이용해주셔서 감사합니다.</h5>
          <p>GUESS KOREA를 이용하시면서 불만족스러웠던 사항을 지적해주시면 서비스 개선에 참고하도록 하겠습니다.</p>
        </div>
        <br/><br/>
        <div className="jumbotron subJumboStyle">
          <b style={{fontSize: "16px"}}> GUESS KOREA 회원탈퇴 시 확인하셔야 할 사항을 반드시 체크하시기 바랍니다.</b><br/>
          <p style={{fontSize: "12px", color:"#888"}}>
             1.회원 탈퇴는 GUESS KOREA 온라인 쇼핑몰 탈퇴를 의미 합니다.<br/>
             2.쿠폰 혜택은 모두 소멸됩니다.<br/>
             3.거래 정보 관리를 위해서 회원ID, 상품정보, 거래내역 등의 기본정보는 5년간 보관됩니다.<br/>
             4.회원 탈퇴 후, 90일간 재가입이 불가합니다.<br/>
             5.재가입 시 기존 아이디 사용이 불가하며, 신규회원 가입으로 처리되므로, 개인정보가 복원되지 않습니다.(탈퇴전의 회원정보, 주문정보, 쿠폰 등)<br/>
             6.탈퇴 후에도 게시판형 서비스에 등록된 게시물은 그대로 남아있습니다.<br/>
             프로모션 등에 올린 게시글 및 댓글은 탈퇴시 자동삭제 되지 않고 남아있습니다. 삭제를 원하시는 게시글이 있다면 탈퇴전에 삭제하시기 바랍니다.<br/>
             7.구매확정 되지 않은 주문건이 있을 경우 주문 취소와 조회가 불가능합니다.<br/>
             8.회원탈퇴처리가 진행되는 과정에서 뉴스레터가 발송될 수 있습니다.<br/>
          </p>
        </div>
        <div className="orderButtonWrap">
          <button className="blackBtnStyle" onClick={this.deleteUser}>회원탈퇴</button>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default DeleteMyPageUser;