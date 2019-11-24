import React from "react";
import "./ShopContents.css";
import SPTitle from "../SPTitle/SPTitle";
import ClothesCard2 from "../../ClothesCard2/ClothesCard2";
import {MySelect} from "../../MySelect/MySelect";
import ClothesCard3 from "../../ClothesCard3/ClothesCard3";

class ShopContents extends React.Component {

  state = {
    lastItems: 20
  };

  onSelect = (sel) => {
    console.log(sel);
  };

  componentDidMount() {
    window.addEventListener('scroll',  (e) => {
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      if ((scrollTop + clientHeight) >= scrollHeight) {
        this.setState({lastItems: this.state.lastItems + 10});
      }
    });
  }

  render() {
    const {shopInfo} = this.props;
    return (
      <div className="screen">
        <SPTitle shopInfo={shopInfo}/>
        <div className="margin1"></div>
        <div>
          <div className="shopBestText">{shopInfo.name} BEST</div>
          <div className="shopBestLineBar"></div>
        </div>
        <div className="inner_align" style={{width: "1250px"}}>
          {
            // 데이터 정보다 shopInfo에 전달한 정보로 교체
            this.props.bestItems.map((v, i) => (<ClothesCard2 key={i} cloths={v}/>))
          }
        </div>
        <div className="clothesProductsHead inner_align">
          <div className="clotProHeadTitle">PRODUCT(<span>{this.props.normalItems.length}</span>)</div>

          <MySelect onSelect={this.onSelect} datas={["신상품 순", "판매 순", "좋아요 순", "높은가격 순", "낮은가격 순"]}/>
          <div className="filterWrap">
            <dl className="filter-size filterCheck">
              <dt>SIZE</dt>
              <dd>
                <div><input type="checkbox" name="sizecd[]" id="size24" value="24"/></div>
                <label>24</label>
              </dd>
            </dl>
            <dl className="filter-color filterCheck"></dl>
            <dl className="filter-price filterCheck"></dl>
            <dl className="filter-state filterCheck"></dl>
            <div className="filter-button-wrap">
              <button>RESET</button>
              <button>SEARCH</button>
            </div>
          </div>
        </div>

        <div className="inner_align" style={{width: "1250px"}}>
          {
            // 데이터 정보다 shopInfo에 전달한 정보로 교체
            this.props.normalItems.map((v, i) =>
              ((this.state.lastItems) > i ? <ClothesCard3 key={i} cloths={v}/> : null))
          }
        </div>
      </div>
    );
  }
}

export default ShopContents;