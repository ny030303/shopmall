import React from "react";
import "./ShoppingBagPage.css";
import ShoppingBagTable from "../ShoppingBagTable/ShoppingBagTable";


export class ShoppingBagPage extends React.Component {
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
      //   count: 1
      // },
    ]
  };

  componentDidMount() {
    let shoppingList = JSON.parse(localStorage.getItem('ShoppingList')) || [];
    console.log(shoppingList);
    this.setState({
      shoppingList: shoppingList.map((v, i) => ({
        number: `${v.cloth.pid}-${i}`,
        name: v.cloth.title,
        size: v.size,
        price: v.cloth.salePrice,
        listPrice: v.cloth.firstPrice,
        clothesImg: v.cloth.image,
        salePercent: 100 - Math.floor(v.cloth.salePrice * 100 / v.cloth.firstPrice),
        count: v.qty,
        checked: true
      })),
      allChecked: true
    });
  }

  deleteShoppingList = (e) => {
    let number = e.target.dataset.number.split('-');
    console.log(number);
    let shoppingList = JSON.parse(localStorage.getItem('ShoppingList')) || [];
    shoppingList.splice(Number(number[1]), 1);
    localStorage.setItem('ShoppingList', JSON.stringify(shoppingList));
    this.componentDidMount();
  };

  onCheckboxChange = (e) => {
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

  gotoBuyItems = () => this.props.history.push('/OrderSheet');

  render() {
    return (
      <div>
        <div style={{paddingTop: "90px"}}/>
        <div className="inner_align">
          <h2 className="title-content">SHOPPING BAG</h2>
          <div className="progress-wrap">
            <div className="stepImg" style={{backgroundImage: "url('/img/buyStep1.png')"}}/>
          </div>
          <br/><br/><br/>
          <ShoppingBagTable
            type="shoppingBag"
            thead={[
              (<label><input className="uk-checkbox" type="checkbox"
                             checked={this.state.allChecked}
                             onChange={this.allCheckboxChange}/></label>),
              "상품정보", "판매금액", "수량", "주문금액", "선택"
            ]}
            datas={this.state.shoppingList}
            deleteItem={this.deleteShoppingList}
            onCheckboxChange={this.onCheckboxChange}
          />
          <div className="orderButtonWrap">
            <button className="blackBtnStyle" onClick={this.gotoBuyItems}>BUY</button>
          </div>
        </div>
      </div>

    )
  }
}