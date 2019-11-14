import React from "react";
import "./ShopContents.css";
import SPTitle from "../SPTitle/SPTitle";
import ClothesCard2 from "../../ClothesCard2/ClothesCard2";
import {MySelect} from "../../MySelect/MySelect";
import MainFooter from "../../../MainFooter/MainFooter";
import ClothesCard3 from "../../ClothesCard3/ClothesCard3";

class ShopContents extends React.Component {

  state = {
    sliderDatas: [
      {
        image: "http://image.guesskorea.com/images/MJ/MJ4K7481/MJ4K7481_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ4K7481/MJ4K7481_O.jpg",
        title: "남녀공용 뽀글이 스텐집업",
        salePrice: 133200,
        firstPrice: 148000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D3122/YJ3D3122_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1569982826-29.jpg",
        title: "여성 블랙 밴딩 슬림 붓컷",
        salePrice: 124200,
        firstPrice: 138000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3K9466/MJ3K9466_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ3K9466/MJ3K9466_O.jpg",
        title: "남녀공용 기획 등판 GUESS 루즈핏 맨투맨",
        salePrice: 52200,
        firstPrice: 58000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D6195/YJ3D6195_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/YJ/YJ3D6195/YJ3D6195_O.jpg",
        title: "(셀럽착장)여성 인디고 하프 로고 밴딩 와이드",
        salePrice: 151200,
        firstPrice: 168000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D1125/YJ3D1125_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1567995850-40.jpg",
        title: "여성 D톤 맘핏",
        salePrice: 124200,
        firstPrice: 138000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      }
    ]
  }

  onSelect = (sel) => {
    console.log(sel);
  };

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
            this.props.normalItems.map((v, i) => (<ClothesCard3 key={i} cloths={v} />))
          }
        </div>
        <MainFooter/>
      </div>
    );
  }
}

export default ShopContents;