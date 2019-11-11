import React from "react";
import "./OtherShopPage.css";
import ClothesCard2 from "../ClothesCard2/ClothesCard2";
import {MySelect} from "../MySelect/MySelect";
import ClothesCard3 from "../ClothesCard3/ClothesCard3";
import MainFooter from "../../MainFooter/MainFooter";
import TriangleMenu from "../TriangleMenu/TriangleMenu";

class OtherShopPage extends React.Component {

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
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D1159/YJ3D1159_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/YJ/YJ3D1159/YJ3D1159_O.jpg",
        title: "여성 D톤구제 보이프렌드",
        salePrice: 151200,
        firstPrice: 168000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "https://guess.ajashop.co.kr/SE2/upload/1571704712-43.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ4W5873/MJ4W5873_O.jpg",
        title: "남성 라쿤후드 심리스 다운",
        salePrice: 322200,
        firstPrice: 358000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ4S1681/MJ4S1681_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1568095810-81.jpg",
        title: "남성 베이직 터틀넥 풀오버",
        salePrice: 61200,
        firstPrice: 68000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3K5404/MJ3K5404_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1570009076-63.jpg",
        title: "(김민규공항패션)남성 레터링 믹스 맨투맨",
        salePrice: 68600,
        firstPrice: 98000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3D9104/MJ3D9104_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1568167605-61.jpg",
        title: "남성 기획 D톤워싱 크롭스트레이트",
        salePrice: 69000,
        firstPrice: 89000,
        heartCnt: 3,
        colorPick: [
          {title: "퍼플", color: "#5305ab"},
          {title: "아이보리", color: "#fdfbdc"}
        ]
      },
    ]
  };

  onSelect = (sel) => {
    console.log(sel);
  };

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
            shopInfo.menu.map((v,i) => (
              <li key={i}>
                <button data-idx={i} className={menuIdx == i ? 'btnActive' : null} onClick={this.onMenuClick}>{v}</button>
              </li>
            ))
          }
        </ul>

        <div className="clothesProductsHead inner_align" style={{marginTop: "40px"}}>
          <div className="clotProHeadTitle">PRODUCT(<span>36</span>)</div>

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
            this.state.sliderDatas.map((v, i) => (<ClothesCard3 key={i} cloths={v} />))
          }
        </div>

        <MainFooter/>
      </div>
    );
  }
}

export default OtherShopPage;