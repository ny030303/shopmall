import React from "react";
import "./OrderSheetPage.css";
import {MyTable} from "../MyTable/MyTable";
import ShoppingBagTable from "../ShoppingBagTable/ShoppingBagTable";
import {PaymentNhnKcp} from "../PaymentNhnKcp/PaymentNhnKcp";
import {getLoginInfo, putOrderItems, utoa} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";

class OrderSheetPage extends React.Component {
  state = {
    shoppingList: [
      // {
      //   number: "",
      //   name: "",
      //   size: "S",
      //   price: 0,
      //   listPrice: 0,
      //   clothesImg: "",
      //   salePercent: 0,
      //   count: 0
      // }
    ],
    paymentParams: null,
    allChecked: true
  };

  componentDidMount() {
    let buyItem = localStorage.getItem('buyItem') || localStorage.getItem('ShoppingList') || "[]";
    console.log('buyItem', buyItem);
    let storedData = JSON.parse(buyItem);
    let shoppingList = [];

    localStorage.setItem('buyItem', '');
    console.log(storedData);
    storedData.forEach((v, i) => {
      if( v.number) {
        shoppingList.push({
          number: v.number,
          name: v.name,
          size: ["S", "M", "L", "XL"][v.size],
          price: v.price,
          listPrice: v.listPrice,
          clothesImg: v.clothesImg,
          salePercent: v.salePercent,
          count: v.qty,
          checked: true
        });
      }
      else {
        shoppingList.push({
          number: `${v.cloth.pid}-${i}`,
          name: v.cloth.title,
          size: ["S", "M", "L", "XL"][v.size],
          price: v.cloth.salePrice,
          listPrice: v.cloth.firstPrice,
          clothesImg: v.cloth.hoverImage,
          salePercent: 100 - Math.floor(v.cloth.salePrice * 100 / v.cloth.firstPrice),
          count: v.qty,
          checked: true
        });
      }
    });
    console.log(shoppingList);
    this.setState({shoppingList: shoppingList});
  }

  onCheckboxChange = (e) => {
    console.log(e.target.dataset.number);
    let {shoppingList} = this.state;
    if (e) {
      let idx = shoppingList.findIndex(v => v.number === e.target.dataset.number);
      shoppingList[idx].checked = !shoppingList[idx].checked;
    }
    let allChecked = shoppingList.filter(v => v.checked).length === shoppingList.length;
    console.log(shoppingList.filter(v => v.checked).length, shoppingList.length, allChecked);
    this.setState({shoppingList: shoppingList, allChecked: allChecked});
  };

  allCheckboxChange = (e) => {
    let {shoppingList} = this.state;
    shoppingList.forEach(v => v.checked = !this.state.allChecked);
    console.log(shoppingList);
    let allChecked = shoppingList.filter(v => v.checked).length === shoppingList.length;
    console.log(shoppingList.filter(v => v.checked).length, shoppingList.length, allChecked);
    this.setState({shoppingList: shoppingList, allChecked: allChecked});
  };

  OpenPayment = e => {
    let shopInfos = this.state.shoppingList;
    let buy_items = shopInfos.filter(v => v.checked);
    let buyPrice = buy_items.map(v => v.price).reduce((a, b) => a + b, 0);
    let buyTitle = shopInfos.length == 0 ? '' : shopInfos[0].name;
    if (shopInfos.length > 1) {
      buyTitle = shopInfos[0].name + ` 외 ${shopInfos.length}개`;
    }

    let today = new Date();
    let order_idxx = "NY" + today.getFullYear() + today.getTime();
    let user = getLoginInfo();
    console.log('USER:', user);
    this.setState({
      paymentParams: {
        ordr_idxx: order_idxx,
        good_name: buyTitle,
        good_mny: buyPrice,
        buyr_name: user.name,
        buyr_mail: user.email || '',
        buyr_tel1: user.phone,
        buyr_tel2: '',
        user_id: user.id,
        buy_items: JSON.stringify(buy_items)
      }
    });
  };

  onPaymentResult = result => {
    putOrderItems({
      oid: this.state.paymentParams.ordr_idxx,
      uid: this.state.paymentParams.user_id,
      buyitems: utoa(this.state.paymentParams.buy_items)
    });
    this.setState({paymentParams: null});
    alertDialog.show('알림', (result == '0000') ? '결제가 완료되었습니다.' : '결제가 취소되었습니다.');
    console.log("PaymentNhnKcp RESULT:", result);
    this.props.history.push('/MyPage');
  };

  render() {
    let shopInfos = this.state.shoppingList;
    let buyPrice = shopInfos.filter(v => v.checked).map(v => v.price).reduce((a, b) => a + b, 0);
    let buyTitle = shopInfos.length == 0 ? '' : shopInfos[0].name;
    if (shopInfos.length > 1) {
      buyTitle = shopInfos[0].name + ` 외 ${shopInfos.length}개`;
    }
    console.log(shopInfos, buyTitle);
    return (
      <div className="OrderSheetPage">
        <div style={{paddingTop: "90px"}}/>
        <div className="inner_align">
          <h2 className="title-content">주문서작성</h2>
          <div className="progress-wrap">
            <div className="stepImg" style={{backgroundImage: "url('/img/buyStep2.png')"}}/>
          </div>
          <div className="margin1"/>

          {/*주문 항목*/}
          <h5>주문상품 항목</h5>
          <ShoppingBagTable
            type="orderSheet"
            thead={[(<label><input className="uk-checkbox" type="checkbox"
                                   checked={this.state.allChecked}
                                   onChange={this.allCheckboxChange}/></label>),
              "상품정보", "판매금액", "수량", "주문금액", "쿠폰선택", "배송 방법"]}
            datas={shopInfos}
            onCheckboxChange={this.onCheckboxChange}
          />

          {/*회색 점보트론*/}

          <br/><br/><br/>
          {/* 주문고객 */}
          <h5>주문고객 정보</h5>
          <MyTable inputs={
            [
              {
                title: '주문고객',
                name: "order_name",
                style: {width: "270px"},
                placeholder: "주문하시는분의 이름을 적어주세요",
              },
              {
                title: '이메일',
                name: "order_email",
                style: {width: "270px"},
                placeholder: "주문하시는분의 이메일을 적어주세요",
              },
              {
                title: '휴대전화',
                subInputs: [
                  {
                    type: "select",
                    select: ["010", "011", "016", "017", "018", "019"],
                    name: "telephone1",
                    style: {width: "100px", fontSize: "13px"}
                  },
                  {type: "input", name: "telephone2", style: {width: "100px"}},
                  {type: "input", name: "telephone3", style: {width: "100px"}}
                ]
              },
            ]
          }/>
          <br/><br/><br/>

          <div className="row">
            <div className="col-8">
              <div className="orderTableTitleWrap">
                <h5>배송지 정보</h5>
                <div><label><input className="uk-checkbox" type="checkbox"/> 기본 주소로 저장</label></div>
                <div className="float-right">
                  <div><label><input className="uk-radio" type="radio" name="radio2"/> 주문고객과 동일</label></div>
                  <div><label><input className="uk-radio" type="radio" name="radio2"/> 새로 입력</label></div>
                </div>
              </div>
              <MyTable inputs={
                [
                  {
                    title: '받는분',
                    name: "delivery_name",
                    style: {width: "270px"},
                    placeholder: "이름을 입력하세요",
                    required: true
                  },
                  {
                    title: '주소',
                    name: "delivery_addr",
                    style: {width: "400px"},
                    placeholder: "주소를 입력하세요",
                    required: true
                  },
                  {
                    title: '휴대전화',
                    required: true,
                    subInputs: [
                      {
                        type: "select",
                        select: ["010", "011", "016", "017", "018", "019"],
                        name: "delivery_tel1",
                        style: {width: "100px", fontSize: "13px"}
                      },
                      {type: "input", name: "telephone2", style: {width: "100px"}},
                      {type: "input", name: "telephone3", style: {width: "100px"}}
                    ]
                  },
                  {
                    title: '전화번호',
                    subInputs: [
                      {
                        type: "select",
                        select: [
                          ' 02', '031', '032', '033', '041', '042', '043', '044', '051',
                          '052', '053', '054', '055', '061', '062', '063', '064'
                        ],
                        name: "delivery_tel2",
                        style: {width: "100px", fontSize: "13px"}
                      },
                      {type: "input", name: "telephone2", style: {width: "100px"}},
                      {type: "input", name: "telephone3", style: {width: "100px"}}
                    ]
                  },
                  {
                    title: '배송메모',
                    name: "delivery_memo",
                    style: {width: "400px"},
                    placeholder: "배송시 요청사항을 입력하세요 (한글 20자 이내)"
                  },
                ]
              }/>
            </div>
            <div className="col-4">
              <h5>결제금액</h5>
              <MyTable noneLine={true} inputs={
                [
                  {
                    headerWidth: "100px",
                    title: (<b>총 상품금액</b>),
                    style: {width: "200px"},
                    element: (<span><strong>{buyPrice.toLocaleString()}</strong> 원</span>)
                  },
                  {
                    title: '쿠폰할인',
                    style: {width: "200px"},
                    element: (<span><span className="point-color">- 0</span> 원</span>)
                  },
                  {
                    title: '배송비',
                    style: {width: "200px"},
                    element: (<span><span className="point-color">- 0</span> 원</span>)
                  },
                  {
                    title: (<b>총 주문금액</b>),
                    bgColor: "#e9ecef",
                    style: {width: "200px"},
                    element: (<span><strong className="point-color">{buyPrice.toLocaleString()}</strong> 원</span>)
                  },
                  {
                    element: (<div style={{color: "#aaa", fontSize: "12px", paddingLeft: "10px"}}>
                      <p>주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며,<br/>
                        구매에 동의 하시겠습니까? (전자상거래법 제8조 제2항)</p>
                      <div><label><input className="uk-checkbox" type="checkbox"/> 동의합니다.</label></div>
                    </div>)
                  }
                ]
              }/>
            </div>
          </div>
          <br/><br/><br/>
          <div className="jumbotron" style={{color: "#aaa", fontSize: "12px", padding: "30px"}}>
            <b style={{color: "#555", fontSize: "15px"}}><i className="fas fa-exclamation-circle"></i> 주문 전
              확인사항</b><br/>
            <ul>
              <li>당일퀵배송의 경우, 오프라인 매장과 동시 판매되고 있으므로 결제완료 후 또는 입고 확정 이후에도 품절/결품이 발생될 수 있습니다.</li>
              <li>결제 완료 이후 품절/결품이 발생한 경우, 고객님께 문자서비스를 통해 품절/결품 안내를 드리고 있으며, '마이페이지>주문배송조회'에서도 품절/결품여부를 확인하실 수 있습니다.</li>
              <li>품절/결품된 주문상품은 품절/결품 문자서비스 안내 후 자동취소해 드리며, 재결제가 필요한 경우 추가 안내 드립니다.</li>
              <li>품절/결품이 발생한 경우, 품절취소 고객보상 기준에 따라 보상해드리고 있습니다.</li>
              <li>당일퀵배송 주문의 경우, 평일 08:30 ~ 15:00까지의 주문 건에서만 당일 배송 처리가 가능합니다.</li>
            </ul>
          </div>
          <br/><br/>
          <div className="orderButtonWrap">
            <button className="whiteBtnStyle">SHOPPING BAG</button>
            <button className="blackBtnStyle" onClick={this.OpenPayment}>결제하기</button>
          </div>
          <br/><br/>
        </div>
        {
          this.state.paymentParams ? (
            <div style={{top: "50%", position: "fixed", left: "50%", transform: "translate(-50%, -50%)"}}>
              <PaymentNhnKcp onResult={this.onPaymentResult} params={this.state.paymentParams}/>
            </div>
          ) : null
        }
      </div>
    );
  }
}

// off-canvas
export default OrderSheetPage;