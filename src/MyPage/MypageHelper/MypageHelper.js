import React from "react";
import "./MypageHelper.css";

class MypageHelper extends React.Component {
  state = {};

  // gotoShoppingBag = () => {
  //     console.log(this.props.cloths);
  //     this.props.history.push("/detailClothes/" + this.props.cloths.pid);
  // };

  render() {
    const {cloths} = this.props;
    return (
      <div className="MyPagehelper">
        <nav className="sub-lnb">
          <h3><a>MY PAGE</a></h3>
          <div style={{borderBottom: "2px solid #333", width: "76%"}}/>
          <br/>
          {/*<dl>*/}
          {/*    <dt>주문내역 조회</dt>*/}
          {/*    <dd><a>주문/배송 조회</a></dd>*/}
          {/*    <dd><a >취소/교환/반품 조회</a></dd>*/}
          {/*</dl>*/}
          {/*<dl>*/}
          {/*    <dt>쇼핑혜택 및 활동</dt>*/}
          {/*    <dd><a>회원등급안내</a></dd>*/}
          {/*    <dd><a>MY LIKE ITEMS</a></dd>*/}
          {/*    <dd><a>나의 구매후기</a></dd>*/}
          {/*    <dd><a>1:1문의</a></dd>*/}
          {/*</dl>*/}
          <dl>
            <dd onClick={() => this.props.onSelectPage(0)} className="cursor-hand">회원정보</dd>
            <dd onClick={() => this.props.onSelectPage(1)} className="cursor-hand">회원정보 수정</dd>
            <dd onClick={() => this.props.onSelectPage(2)} className="cursor-hand">회원탈퇴</dd>
          </dl>
          <div style={{borderBottom: "2px solid #333", width: "76%"}}/>
          <br/><br/><br/>
        </nav>
      </div>
    );
  }
}

export default MypageHelper;