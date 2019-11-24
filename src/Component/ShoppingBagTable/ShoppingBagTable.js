import React from "react";
import {withRouter} from 'react-router-dom';
import "./ShoppingBagTable.css";

class ShoppingBagTable extends React.Component {

  buyNowItem = e => {
    console.log(e.target.dataset.number);
    let buyItem = this.props.datas.filter(v => v.number == e.target.dataset.number);
    console.log(buyItem);
    localStorage.setItem('buyItem', JSON.stringify(buyItem));
    this.props.history.push('/OrderSheet');
  };

  render() {
    const {datas} = this.props;
    let checkedData = datas.filter(v => v.checked);
    let total = checkedData.map(v => v.listPrice).reduce((a, b) => a + b, 0);
    let salePrice = total - checkedData.map(v => v.price).reduce((a, b) => a + b, 0);
    return (
      <ul style={{padding: "0"}} className={`${this.props.type == "myPageOrderList" ? "ShoppingBagTable" : ""}`}>
        <table className="table" style={{textAlign: "center", borderTop: "2px solid #222"}}>
          <thead>
          <tr>
            {
              this.props.thead.map((v, i) => (<th key={i}>{v}</th>))
            }
          </tr>
          </thead>

          <tbody>
          {
            datas.map((v, i) => (
              <tr data-num={v.number} key={i} style={{borderBottom: "1px solid #ddd"}}>
                {
                  (this.props.type == "shoppingBag" || this.props.type == "orderSheet") ? (
                    <td><label><input className="uk-checkbox" type="checkbox" data-number={v.number} checked={v.checked}
                                      onChange={this.props.onCheckboxChange}/></label></td>) : null
                }
                <td>
                  <div className="orderSheetClothesWrap">
                    <div className="orderSheetClothesImg">
                      <img src={v.clothesImg} alt="상품 썸네일"/>
                    </div>
                    <div className="orderSheetClothesInfo">
                      <div style={{fontWeight: "bold", color: "#666"}}>{v.name}</div>
                      <div>품번 : {v.number}</div>
                      <div>사이즈 : {v.size}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <ul className="orderSheetSalePrice">
                    <li><span style={{color: "#111"}}>{v.price.toLocaleString()}</span> <span>원</span></li>
                    {
                      (this.props.type == "orderSheet" || this.props.type == "shoppingBag") ? (
                        <li>
                          <p>
                            <del style={{fontSize: "13px"}}>{v.listPrice.toLocaleString()} 원</del>
                          </p>
                          <p className="discount-color">{v.salePercent}%</p>
                        </li>) : ("")
                    }

                  </ul>
                </td>
                <td><span>{v.count}</span></td>
                {
                  (this.props.type == "orderSheet") ? (<td>
                    <strong className="emphasis-color">{v.price.toLocaleString()}</strong> <span>원</span>
                  </td>) : null
                }

                {
                  (this.props.type == "shoppingBag") ? (
                    <td>
                      <strong className="emphasis-color">{v.price.toLocaleString()}</strong> <span>원</span>
                    </td>
                  ) : (this.props.type == "shoppingBag" || this.props.type == "orderSheet") ? (
                    <td>
                      <ul className="table-button-area">
                        <li className="uk-button uk-button-default uk-button-small">
                          <span data-basketidx="295067" style={{width: "70px"}}>쿠폰사용 X</span>
                        </li>
                      </ul>
                    </td>
                  ) : ("")
                }
                {
                  (this.props.type == "shoppingBag") ? (
                    <td>
                      <button className="smallBlackBtn" data-number={v.number} onClick={this.buyNowItem}>바로구매</button>
                      <br/>
                      <button className="smallWhiteBtn" data-number={v.number} onClick={this.props.deleteItem}>삭제
                      </button>
                    </td>) : (<td><span className="fz-12 text-tone-b">일반택배</span></td>)
                }
                {
                  (this.props.type == "myPageOrderList") ? (<td>{v.buyDay}</td>) : null
                }

              </tr>
            ))
          }
          </tbody>
        </table>
        {
          (this.props.type == "shoppingBag" || this.props.type == "orderSheet") ? (
            <div className="jumbotron totalTron">
              <div>총 상품금액 <span>{total.toLocaleString()}</span>원</div>
              <div><i className="fas fa-minus-circle"/></div>
              <div>총 할인금액 <span>{salePrice.toLocaleString()}</span>원</div>
              <div><i className="fas fa-plus-circle"/></div>
              <div>배송비 <span>0</span>원</div>
              <div><i className="fas fa-equals"/></div>
              <div className="item last">총 주문금액 <strong
                className="point-color">{(total - salePrice).toLocaleString()}</strong> 원
              </div>
            </div>) : ""
        }
      </ul>
    )
  }
}

export default withRouter(ShoppingBagTable);