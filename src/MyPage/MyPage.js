import React from "react";
import "./MyPage.css";
import MypageHelper from "./MypageHelper/MypageHelper";
import ShoppingBagTable from "../Component/ShoppingBagTable/ShoppingBagTable";
import EditMyPageUserInfo from "./EditMyPageUserInfo/EditMyPageUserInfo";
import DeleteMyPageUser from "./DeleteMyPageUser/DeleteMyPageUser";
import {atou, getHeartItems, getLoginInfo, getOrderItems} from "../services/DataService";


const MyPageMain = ({shoppingList, loginUser, onLogout}) => (
  <>
    <h5><b>{loginUser.name}님 반갑습니다.</b></h5>
    {/*<h5><b>asdfasdf님 반갑습니다.</b></h5>*/}
    <div className="jumbotron subJumboStyle" style={{display: "flex"}}>
      <img src="/img/icon_grade_welcome.png"/>
      <div style={{padding: "20px 20px 0 33px"}}>
        <div className="">{loginUser.name}님 현재 등급은 <span className="point-color">WELECOME</span>입니다.</div>

        {/*<div className="">sdafasdf님 현재 등급은 <span className="point-color">WELECOME</span>입니다.</div>*/}
        <div>
          <button className="smallWhiteBtn" onClick={onLogout}>로그아웃</button>
        </div>
      </div>
      <div></div>
    </div>

    <br/>
    <h5>최근 주문 내역 <span className="myPageSubTitle">최근 3개월간 구매하신 내역 입니다.</span></h5>
    <br/>
    <img src="/img/lognDelivery.png"/>
    <br/><br/>
    <ShoppingBagTable type="myPageOrderList" thead={["상품정보", "주문금액", "수량", "선택", "구입일"]}
                      datas={shoppingList}/>
  </>
);

const MyHeartItems = ({heartItems}) => (
  <>
    <h5 style={{borderBottom: "2px solid #333", paddingBottom: "10px"}}>MY LIKE ITEMS</h5>
    <br/>
    <ul>
      {
        heartItems.map((v, i) => (
          <li className="sideShoppingBag" key={i}
              style={{padding: "20px", margin: "5px", width: "47%", border: "1px solid #ddd", display: "inline-block"}}>
            <div className="sideShoppingBagImg" style={{display: "inline-block"}}><img
              src={v.clothesImg}
              alt="상품 썸네일"/></div>
            <div className="sideShoppingBag-info">
              <div className="title auto">{v.name}</div>
              <div className="price"><strong>{v.price.toLocaleString()}</strong></div>
              <div className="sideShoppingBagHeart cursor-hand"><i className="far fa-heart"/><span> {v.count}</span></div>
            </div>
          </li>
        ))
      }
    </ul>
  </>
);

class MyPage extends React.Component {
  state = {
    shoppingList: [
      // {
      //   number: "MJ4K7482",
      //   name: "(화보착장)남녀공용 뽀글이 리버시블 후드집업",
      //   size: "S",
      //   price: 151200,
      //   listPrice: 168000,
      //   clothesImg: "http://image.guesskorea.com/images/MJ/MJ4K7482/MJ4K7482_M.jpg",
      //   salePercent: 10,
      //   buyDay: "2019-11-21 00:00:00",
      //   count: 1
      // }
    ],
    heartItems: [],
    loginUser: {
      birthday: "", email: "", id: "", name: "", phone: "", pwd: ""
    },
    currentPage: 0
  };

  componentDidMount() {
    this.setState({loginUser: getLoginInfo()});
    getOrderItems(getLoginInfo().id, res => {
      let shoppingList = [];
      res.data.forEach(v => {
        let orderItems = Object.assign(v, {buyitems: JSON.parse(atou(v.buyitems))});
        orderItems.buyitems.forEach(v => {
          v.buyDay = orderItems.buytime;
          shoppingList.push(v);
        });
      });
      this.setState({shoppingList: shoppingList});
    });

    getHeartItems(getLoginInfo().id, res => {
      console.log(res);
      let heartItems = [];
      res.data.forEach(v => {
        heartItems.push({
          name: v.title,
          price: Number(v.price),
          listPrice: Number(v.oldPrice),
          clothesImg: v.img1,
          count: Number(v.ulike)
        });
      });
      this.setState({heartItems: heartItems});
    })
  };

  onSelectPage = (pageNum) => this.setState({currentPage: pageNum});

  render() {
    const {cloths} = this.props;
    return (
      <div className="MyPage">
        <div style={{paddingTop: "90px"}}/>
        <div className="inner_align row">
          <br/><br/><br/>
          <div className="col-3" style={{display: "inline-block", position: "absolute", top: "100px"}}>
            <MypageHelper onSelectPage={this.onSelectPage}/>
          </div>
          <div className="col-9" style={{display: "inline-block", margin: "0 0 0 310px"}}>
            <br/><br/>
            {[
              (<>
                <MyPageMain loginUser={this.state.loginUser} shoppingList={this.state.shoppingList}
                            onLogout={this.props.logout}/>
                <br/><br/><br/>
                <MyHeartItems heartItems={this.state.heartItems}/>
              </>),
              (<EditMyPageUserInfo/>),
              (<DeleteMyPageUser/>)
            ][this.state.currentPage]}
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;