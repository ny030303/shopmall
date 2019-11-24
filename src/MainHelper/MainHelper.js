import React from "react";
import {withRouter} from 'react-router-dom';
import {setObserverVisibility} from '../services/EventService'
import $ from 'jquery';
import "./MainHelper.css";

class MainHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    };
    this.shoppingBagData = null;
  }


  componentDidMount() {
    this.shoppingBagData = localStorage.getItem('ShoppingList');
    let shoppingList = JSON.parse(this.shoppingBagData) || [];
    this.setState({
      shoppingList: shoppingList.map(v => ({
        number: v.cloth.pid,
        name: v.cloth.name,
        size: v.size,
        price: v.cloth.salePrice,
        listPrice: v.cloth.firstPrice,
        clothesImg: v.cloth.image,
        salePercent: 100 - Math.floor(v.cloth.salePrice * 100 / v.cloth.firstPrice),
        count: v.qty
      }))
    });

    setObserverVisibility(document.querySelector('#shopping-bag-flip'), visible => {
      console.log('### respondToVisibility ###', visible);
      if (visible && this.shoppingBagData != localStorage.getItem('ShoppingList')) {
        this.componentDidMount();
      }
    });
  }


  gotoShoppingBag = () => {
    console.log(this.props.cloths);
    this.props.history.push("/ShoppingBag");
    $('#shopping-bag-flip').toggle();
  };

  gotoMyPage = (e) => this.props.history.push("/MyPage");

  render() {
    return (
      <div id="helper">
        <div className="helper-nav-contents">
          <ul className="helper-nav-Wrap">
            <li uk-toggle="target: #shopping-bag-flip">
              <div className="helper-nav-icon">
                <i className="fas fa-shopping-bag"/>
              </div>
              <button className="helper-nav-black-btn"/>
            </li>
            <li onClick={this.gotoMyPage}>
              <div className="helper-nav-icon">
                <i className="fas fa-user"/>
              </div>
              <button className="helper-nav-black-btn"/>
            </li>
          </ul>
        </div>
        <div id="shopping-bag-flip" uk-offcanvas="flip: true;" style={{backgroundColor: "#fff"}}>
          <div className="uk-offcanvas-bar" style={{
            backgroundColor: "#fff",
            color: "#333",
            boxShadow: "0 0 30px 0 rgba(4,0,0,.15)",
            width: "380px",
            padding: "18px 23px"
          }}>
            <div className="uk-offcanvas-close cursor-hand" uk-icon="icon: close"/>
            <div className="cursor-hand"
                 style={{color: "#333", textAlign: "center", fontWeight: "bold"}}>쇼핑백 〉
            </div>
            <br/>

            <ul style={{padding: "0"}}>
              {
                this.state.shoppingList.map((v, i) => (
                  <li className="sideShoppingBag" key={i} style={{opacity: "1", marginTop: "0px,"}}>
                    <div className="sideShoppingBagImg"><img
                      src={v.clothesImg}
                      alt="상품 썸네일"/></div>
                    <div className="sideShoppingBag-info">
                      <div className="title auto">{v.name}</div>
                      <div className="price"><strong>{v.price.toLocaleString()}</strong></div>
                      <div className="option">{v.size} / {v.count}개</div>
                      <div className="sideShoppingBagHeart cursor-hand"><i className="far fa-heart"/><span> 0</span>
                      </div>
                    </div>
                  </li>
                ))
              }

            </ul>
            <button className="blackBtnStyle" onClick={this.gotoShoppingBag}>쇼핑백 바로가기</button>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainHelper);