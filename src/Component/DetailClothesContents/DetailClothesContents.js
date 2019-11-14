import React from "react";
import "./DetailClothesContents.css";
import ImageGallery from "react-image-gallery";
import {getDetailItem} from "../../services/DataService";

const ItemSpecification = ({}) => (
  <div className="specification">
    <section className="box-intro">
      <h2 className="v-hidden">상품명,간략소개</h2>
      <div className="clear">
        <p className="pull-left goods-code">NJ4W0515</p>
        <div className="pull-right">
          <div className="btn-like-count " data-hottcode="001001011000008255" data-section="product">
            <i className="icon-like small">좋아요</i>
            <span>8</span>
          </div>
        </div>
      </div>
      <p className="goods-nm">[ONLY ONLINE]남녀공용 넥배색 푸퍼 다운 점퍼</p>
      <div className="price-area clear">
        <div className="price">
          <strong>178,000</strong>원
        </div>
        <div className="card-benefit">
          <a href="#popup-card-benefit" className="btn-small is-line">카드혜택 보기</a>
        </div>
      </div>
    </section>
    <section className="box-summary ">
      <h2 className="v-hidden">상품의 금액, 쿠폰, 배송비 정보</h2>
      <ul className="goods-summary">
        <li>
          <label style={{top:"10px"}}>배송</label>
          <div className="inner clear">
            <div className="pull-left">
              <div className="option-box dir-flow">
                <div>
                  <input type="radio" id="delivery_type1" name="delivery_type_choice" checked="checked"
                         data-toggle="delivery" data-sync="basket_delivery_type" value="normal"/>
                  <label style={{marginRight: "11px"}} htmlFor="delivery_type1">택배배송</label>
                </div>
              </div>
            </div>
            <div className="pull-right delivery-comment ta-r">
              <div>
                <div className="tooltip reverse">
                  30,000원 이상 무료배송 &nbsp;<i className="icon-how-use">사용방법</i>
                  <div className="cover" style={{width:"300px"}}>
                    <div className="box ta-l">
                      - 택배로 발송하는 기본 배송 서비스입니다.
                      <br/> - 30,000 이상 구매시 무료배송됩니다.
                      <br/> - 30,000 미만 구매시 배송비 2,500원이 부과됩니다.
                      <br/> - 도서산간 지역은 배송비가 추가 될 수 있습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section className="box-option">
      <h2 className="v-hidden">상품의 옵션 선택</h2>
      <ul>
        <li>
          <label className="trans-y">COLOR </label>
          <div className="opt-colors">
            <input type="radio" name="opt_color" data-toggle="stock" data-sync="basket_color" value="BLK"
                   id="BLK" checked=""/>
            <label className="tone-dark" style={{backgroundColor: "#000000"}} htmlFor="BLK"
                   title="블랙"></label>
            <input type="radio" name="opt_color" data-toggle="stock" data-sync="basket_color" value="LGY"
                   id="LGY"/>
            <label className="tone-bright" style={{backgroundColor: "#c2c2c2"}} htmlFor="LGY"
                   title="라이트그레이"></label>
          </div>
        </li>
        <li className="opt">
          <label>SIZE</label>
          <div className="opt-size detail-page">
            <div>
              <input type="radio" name="opt_size" data-toggle="stock" data-sync="basket_size" id="sizeS"
                     value="S" checked=""/>
              <label htmlFor="sizeS">S</label>
            </div>
            <div>
              <input type="radio" name="opt_size" data-toggle="stock" data-sync="basket_size" id="sizeM"
                     value="M"/>
              <label htmlFor="sizeM">M</label>
            </div>
            <div>
              <input type="radio" name="opt_size" data-toggle="stock" data-sync="basket_size" id="sizeL"
                     value="L"/>
              <label htmlFor="sizeL">L</label>
            </div>
            <div>
              <input type="radio" name="opt_size" data-toggle="stock" data-sync="basket_size" id="sizeXL"
                     value="XL"/>
              <label htmlFor="sizeXL">XL</label>
            </div>
          </div>
          <a href="#popup-size-chart" className="btn-size-chart">사이즈 조견표
            <i className="icon-ruler"></i>
          </a>
        </li>
        <li>
          <label className="trans-y">QTY</label>
          <div className="quantity">
            <input type="text" value="1" name="qty" data-sync="basket_qty" title="구매수량" readOnly=""/>
            <button className="plus">수량증가</button>
            <button className="minus">수량감소</button>
          </div>
        </li>
        <li className="total-price">
          <label className="trans-y">TOTAL</label>
          <div className="total" id="price_total">
            <strong data-sync="basket_price_total">178,000</strong>원
          </div>
        </li>
      </ul>
    </section>
    <div className="area-button">
      <div className="" data-soldout="N">
        <a href="javascript:;" onClick="ProductDetail.order('buy');" className="btn-motion is-point hv-skew">
          <span>BUY NOW</span>
        </a>
        <a href="javascript:;" onClick="ProductDetail.order('basket');" className="btn-motion is-line hv-draw">
          <span>SHOPPING BAG</span>
        </a>
      </div>
      <div className="hide" data-soldout="Y">
        <a href="javascript:;" className="btn-motion is-line-red w100-per"><span>일시품절</span></a>
      </div>
    </div>
    <div className="user-entry clear">
      <div className="pull-left">
        <a href="/front/mypage_personalwrite.php?productcode=001001011000008255" target="_blank">1:1 문의</a>
      </div>
      <div className="pull-right">
        <a href="javascript:;" onClick="SNS.facebook();">
          <i className="icon-sns-facebook-blk">페이스북</i>
        </a>
        <a href="javascript:;" onClick="SNS.naverblog('[ONLY ONLINE]남녀공용 넥배색 푸퍼 다운 점퍼')">
          <i className="icon-sns-blog-blk">블로그</i>
        </a>
        <a href="javascript:;" onClick="ProductDetail.urlCopy()">
          <i className="icon-sns-url-blk">URL</i>
        </a>
      </div>
    </div>
    <div className="promotion-link">
      <a className="ellipsis" href="/front/promotion_detail.php?pidx=136&amp;event_type=1" target="_blank">
        MID SEASON SALE ~40%</a>
      <a className="ellipsis" href="/front/promotion_detail.php?pidx=126&amp;event_type=1" target="_blank">
        김민규 DAZED 19'FW화보</a>
    </div>
  </div>
);

class DetailClothesContents extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    const {data} = this.props.match.params;
    let dataParams = data.split('-');
    getDetailItem(dataParams[0], dataParams[1], res => {
      console.log(res);
      this.setState({
        images: [
          {
            original: res.data[0].img1,
            thumbnail: res.data[0].img1
          },
          {
            original: res.data[0].img2,
            thumbnail: res.data[0].img2
          }
        ]
      });
    });
  }

  render() {
    const {data} = this.props.match.params;
    console.log("/detailClothes, params Data: " + data);
    return (
      <div className="detailClothes">
        <div className="marginTop90px"/>
        <div className="row">
            <div className="col-7">
                <div className="inner_align">
                  <ImageGallery items={this.state.images}/>
                  <div>하위</div>
                </div>
            </div>
            <div className="col-5">
                <ItemSpecification/>
            </div>
        </div>
      </div>
    );
  }
}

export default DetailClothesContents;