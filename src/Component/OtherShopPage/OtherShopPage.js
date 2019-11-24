import React from "react";
import "./OtherShopPage.css";
import ClothesCard2 from "../ClothesCard2/ClothesCard2";
import {MySelect} from "../MySelect/MySelect";
import ClothesCard3 from "../ClothesCard3/ClothesCard3";
import MainFooter from "../../MainFooter/MainFooter";
import TriangleMenu from "../TriangleMenu/TriangleMenu";

class OtherShopPage extends React.Component {
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

  onMenuClick = (e) => {
    this.props.onChange(Number(e.target.dataset.idx));
  };

  render() {
    const {shopInfo} = this.props;
    const {menuIdx, subMenuIdx} = this.props.current;
    console.log(menuIdx, subMenuIdx, shopInfo);
    return (
      <div className="screen">
        <div className="otherShopPageTitle">{shopInfo.name}</div>
        <div style={{textAlign: "center"}}>
          <div className="subMenuTitle">{shopInfo.subMenu[subMenuIdx].name}</div>
          <TriangleMenu name={shopInfo.name} menus={shopInfo.subMenu}/>
        </div>

        <ul className="otherShopPageSubMenu">
          {
            shopInfo.subMenu[subMenuIdx].menu.map((v,i) => (
              <li key={i}>
                <button data-idx={i} className={menuIdx == i ? 'btnActive' : null} onClick={this.onMenuClick}>{v}</button>
              </li>
            ))
          }
        </ul>

        <div className="clothesProductsHead inner_align" style={{marginTop: "40px"}}>
          <div className="clotProHeadTitle">PRODUCT(<span>{this.props.items.length}</span>)</div>

          <MySelect onSelect={this.onSelect} datas={["신상품 순", "판매 순", "좋아요 순", "높은가격 순", "낮은가격 순"]}/>
          <div className="filterWrap">
            <dl className="filter-size filterCheck">
              <dt>SIZE</dt>
              <dd>
                <div><input type="checkbox" name="sizecd[]" id="size24" value="24"/></div>
                <label>24</label>
              </dd>
            </dl>
            <dl className="filter-color filterCheck"/>
            <dl className="filter-price filterCheck"/>
            <dl className="filter-state filterCheck"/>
            <div className="filter-button-wrap">
              <button>RESET</button>
              <button>SEARCH</button>
            </div>
          </div>
        </div>

        <div className="inner_align" style={{width: "1250px"}}>
          {
            // 데이터 정보다 shopInfo에 전달한 정보로 교체
            this.props.items.map((v, i) => ((this.state.lastItems) > i ? <ClothesCard3 key={i} cloths={v}/> : null))
          }
        </div>
      </div>
    );
  }
}

export default OtherShopPage;