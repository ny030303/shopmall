import React from "react";
import Slider from "react-slick";
import exportedEqual from "react-select/src/internal/react-fast-compare";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import ClothesCard from "../../../../Component/ClothesCard/ClothesCard";
import {getClothesOfWomen, getNormalItems} from "../../../../services/DataService";

export class SimpleSlider extends React.Component {
  state = {
    cardTypes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sliderDatas: [
      {
        pid: 0,
        image: "",
        hoverImage: "",
        title: "",
        salePrice: 0,
        firstPrice: 0
      },
    ]
  };

  componentDidMount() {
    let tableName = ["women", "men", "denim"][Math.floor(Math.random() * 3)];
    getNormalItems(tableName, "all", res => {
      let sliderDatas = [];
      for (let i = 0; i < 10; i++) {
        let idx = Math.floor(Math.random() * res.data.length);
        sliderDatas.push({
          pid: res.data[idx].id,
          image: res.data[idx].img1,
          hoverImage: res.data[idx].img2,
          title: res.data[idx].title,
          salePrice: Number(res.data[idx].price),
          firstPrice: Number(res.data[idx].oldprice)
        });
      }
      this.setState({sliderDatas: sliderDatas});
    });
  }

  render() {
    let settings = {
      lazyLoad: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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