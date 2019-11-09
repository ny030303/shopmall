import React from "react";
import Slider from "react-slick";
import exportedEqual from "react-select/src/internal/react-fast-compare";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import ClothesCard from "../../../../Component/ClothesCard/ClothesCard";

export class SimpleSlider extends React.Component {
  state = {
    cardTypes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sliderDatas: [
      {
        image: "http://image.guesskorea.com/images/MJ/MJ4K7481/MJ4K7481_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ4K7481/MJ4K7481_O.jpg",
        title: "남녀공용 뽀글이 스텐집업",
        salePrice: 133200,
        firstPrice: 148000
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D3122/YJ3D3122_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1569982826-29.jpg",
        title: "여성 블랙 밴딩 슬림 붓컷",
        salePrice: 124200,
        firstPrice: 138000
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3K9466/MJ3K9466_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ3K9466/MJ3K9466_O.jpg",
        title: "남녀공용 기획 등판 GUESS 루즈핏 맨투맨",
        salePrice: 52200,
        firstPrice: 58000
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D6195/YJ3D6195_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/YJ/YJ3D6195/YJ3D6195_O.jpg",
        title: "(셀럽착장)여성 인디고 하프 로고 밴딩 와이드",
        salePrice: 151200,
        firstPrice: 168000
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D1125/YJ3D1125_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1567995850-40.jpg",
        title: "여성 D톤 맘핏",
        salePrice: 124200,
        firstPrice: 138000
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ3D1159/YJ3D1159_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/YJ/YJ3D1159/YJ3D1159_O.jpg",
        title: "여성 D톤구제 보이프렌드",
        salePrice: 151200,
        firstPrice: 168000
      },
      {
        image: "https://guess.ajashop.co.kr/SE2/upload/1571704712-43.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ4W5873/MJ4W5873_O.jpg",
        title: "남성 라쿤후드 심리스 다운",
        salePrice: 322200,
        firstPrice: 358000
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ4S1681/MJ4S1681_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1568095810-81.jpg",
        title: "남성 베이직 터틀넥 풀오버",
        salePrice: 61200,
        firstPrice: 68000
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3K5404/MJ3K5404_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1570009076-63.jpg",
        title: "(김민규공항패션)남성 레터링 믹스 맨투맨",
        salePrice: 68600,
        firstPrice: 98000
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3D9104/MJ3D9104_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1568167605-61.jpg",
        title: "남성 기획 D톤워싱 크롭스트레이트",
        salePrice: 69000,
        firstPrice: 89000
      },
      {
        image: "http://image.guesskorea.com/images/NJ/NJ3K0132/NJ3K0132_11.jpg",
        hoverImage: "https://guesskorea.com/SE2/upload/1568098117-48.jpg",
        title: "[ONLY ONLINE] 남녀공용 2도 삼각 자수 맨투맨",
        salePrice: 39000,
        firstPrice: 48000
      },
      {
        image: "http://image.guesskorea.com/images/NJ/NJ3K0732/NJ3K0732_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1567993811-5.jpg",
        title: "[ONLY ONLINE] 남녀공용 사선발포 삼각 맨투맨",
        salePrice: 52200,
        firstPrice: 58000
      },
      {
        image: "http://image.guesskorea.com/images/MJ/MJ3D8150/MJ3D8150_M.jpg",
        hoverImage: "https://guess.ajashop.co.kr/SE2/upload/1568167429-19.jpg",
        title: "남성 기획 틴 D톤 슬림스트레이트",
        salePrice: 69000,
        firstPrice: 89000
      },
      {
        image: "https://guess.ajashop.co.kr/SE2/upload/1568966397-61.jpg",
        hoverImage: "http://image.guesskorea.com/images/MJ/MJ4W5880/MJ4W5880_B.jpg",
        title: "남녀공용 리버서블 숏다운",
        salePrice: 223200,
        firstPrice: 248000
      },
      {
        image: "http://image.guesskorea.com/images/YJ/YJ4K3400/YJ4K3400_M.jpg",
        hoverImage: "http://image.guesskorea.com/images/YJ/YJ4K3400/YJ4K3400_O.jpg",
        title: "여성 FUR 믹스 후디 집업",
        salePrice: 160200,
        firstPrice: 178000
      }
    ]
  };

  render() {
    let settings = {
      lazyLoad: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      beforeChange: (current, next) => this.setState({activeSlide: next}),
      afterChange: current => this.setState({activeSlide2: current})
    };
    // let cardStyle = [
    //     {width: "260px", height: "364px"},
    //     {width: "341px", height: "449px"}
    // ];
    return (
      <div id="sliderRoot">
        <Slider {...settings}>
          {
            this.state.sliderDatas.map((v, i) => (<ClothesCard key={i} cloths={v}/>))
          }
        </Slider>
      </div>
    );
  }
}