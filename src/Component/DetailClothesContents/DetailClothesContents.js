import React from "react";
import "./DetailClothesContents.css";
import ImageGallery from "react-image-gallery";
import DetailClothesFooter from "./DetailClothesFooter/DetailClothesFooter";
import DetailClothesInfo from "./DetailClothesInfo/DetailClothesInfo";
import {DBItemDataToItems, getDetailItem} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";

class DetailClothesContents extends React.Component {
  state = {
    sizeNav: 0,
    qtyNum: 1,
    cloth: {
      pid: 0,
      image: "",
      hoverImage: "",
      title: "",
      salePrice: 0,
      firstPrice: 0,
      heartCnt: 0,
      colorPick: []
    }
  };

  componentDidMount() {
    let tableNames = ["women", "men", "denim", "denim", "bag"];
    let pid = this.props.match.params.pid;
    console.log("componentDidMount:", pid);
    getDetailItem(tableNames[Math.floor(pid / 10000) - 1], pid, res => {
      this.setState({cloth: res.data.length > 0 ? DBItemDataToItems(res.data[0]) : {}});
      console.log(this.state.cloth);
    })
  }

  addShoppingList = (e) => {
    let shoppingList = JSON.parse(localStorage.getItem('ShoppingList')) || [];
    shoppingList.push({cloth: this.state.cloth, size: this.state.sizeNav, color: 0, qty: this.state.qtyNum});
    localStorage.setItem("ShoppingList", JSON.stringify(shoppingList));
    alertDialog.show('알림', '쇼핑백에 추가되었습니다.<br>우측 상단의 쇼핑백 버튼으로 확인하세요.')
  };

  gotoOrderSheet = (e) => {
    this.addShoppingList(e);
    this.props.history.push("/OrderSheet");
  };

  render() {
    const {cloth} = this.state;
    return (
      <div className="detailClothes">
        <div className="marginTop90px"/>
        <img style={{width: "100%"}} src="/img/longImg.jpg"/>
        <div className="inner_align">

          <div className="viewSlideClothesWrap">
            <ImageGallery items={[
              {original: cloth.image, thumbnail: cloth.image},
              {original: cloth.hoverImage, thumbnail: cloth.hoverImage},
            ]} showPlayButton={false} showFullscreenButton={false} showNav={false}/>
          </div>

          <div className="clothesInfoList">
            <p className="uk-article-meta">YJ4W5802</p>
            <p className="uk-text-lead clothesInfoTitle">{cloth.title}</p>
            <div className="uk-article-meta clothesInfoPrice">
              <div>
                <del>{cloth.firstPrice.toLocaleString()}원</del>
              </div>
              <div><span className="uk-article-title" style={{color: "#333"}}>{cloth.salePrice.toLocaleString()}</span>원
              </div>
            </div>
            <div className="box-summary">
              <span style={{fontWeight: "bold"}}>배송</span><span style={{marginLeft: "57px"}}>✔ 택배배송</span>
              <button className="uk-button uk-button-default" style={{marginLeft: "100px"}}
                      uk-tooltip="title:택배로 발송하는 기본 배송 서비스입니다. 30,000 이상 구매시 무료배송됩니다. 30,000 미만 구매시 배송비 2,500원이 부과됩니다. 도서산간 지역은 배송비가 추가 될 수 있습니다.; pos: bottom-right">30,000원
                이상 무료배송
              </button>
            </div>
            <ul className="uk-list uk-list-divider clothesInfoMiddleList">
              <li>

                <div className="clothesInfoColorCircleWrap">
                  <div style={{fontWeight: "bold"}} id="clothesInfoColorTitle">color</div>
                  {/*<div className="big-color-circle" style={{backgroundColor: "purple"}}>*/}
                  {/*    <span uk-icon="icon: check; ratio: 2" style={{color: "#fff",marginLeft: ""}}></span>*/}
                  {/*</div>*/}
                  {/*<div className="big-color-circle" style={{backgroundColor: "purple"}}></div>*/}

                  <div className="uk-form-controls">
                    <label><input className="uk-radio big-color-circle" type="radio" name="radio1"/></label>
                    <label><input className="uk-radio big-color-circle" type="radio" name="radio1"/></label>
                  </div>
                </div>
              </li>
              <li style={{display: "flex"}}>
                <div style={{flex: "1"}}><span style={{fontWeight: "bold"}}>size</span></div>
                <ul className="uk-subnav uk-subnav-pill" style={{margin: "0"}}>
                  {
                    ["S", "M", "L", "XL"].map((v, i) => (
                      <li key={i}>
                        <a className={i == this.state.sizeNav ? "sizeNavActive" : ""}
                           onClick={() => this.setState({sizeNav: i})}>{v}</a>
                      </li>))
                  }
                </ul>
              </li>
              <li style={{display: "flex"}}>
                <div style={{flex: "1"}}><span style={{fontWeight: "bold"}}>QTY</span></div>
                <div>
                  <i className="fas fa-minus cursor-hand"
                     onClick={() => this.setState({qtyNum: (this.state.qtyNum - 1) || 1})}/>
                  <span style={{padding: "0 30px", fontSize: "20px"}}>{this.state.qtyNum}</span>
                  <i className="fas fa-plus cursor-hand"
                     onClick={() => this.setState({qtyNum: this.state.qtyNum + 1})}/>
                </div>

              </li>
              <li style={{display: "flex"}}>
                <div style={{flex: "1"}}><span style={{fontWeight: "bold"}}>TOTAL</span></div>
                <div><span className="uk-article-title" style={{color: "#333"}}>
                  {(cloth.salePrice * this.state.qtyNum).toLocaleString()}
                </span>원
                </div>
              </li>
              <li style={{border: "none"}}>
                <div className="row">
                  <div className="col">
                    <button className="btn blackBtnStyle" onClick={this.gotoOrderSheet}>BUY NOW</button>
                  </div>
                  <div className="col">
                    <button className="btn whiteBtnStyle" onClick={this.addShoppingList}>SHOPPING BAG</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <br/><br/><br/><br/><br/>
          <ul className="nav nav-tabs nav-justified" id="DetailClothesNav">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">상품상세정보</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu1">구매후기</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu2">배송/교환/반품</a>
            </li>
          </ul>
          <DetailClothesInfo cloth={cloth}/>
          <DetailClothesFooter/>
        </div>
      </div>
    );
  }
}

// off-canvas
export default DetailClothesContents;