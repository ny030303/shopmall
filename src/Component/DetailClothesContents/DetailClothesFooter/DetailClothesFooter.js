import React from "react";
import "./DetailClothesFooter.css";

class DetailClothesFooter extends React.Component {
  render() {
    return (
      <div className="DetailClothesFooter">
        <br/> <br/>
        <div className="quick-reference">
          <h5>제품정보</h5>
          <table className="th-left table">

            <colgroup>
              <col style={{width: "147px"}}/>
              <col style={{width: "auto"}}/>
            </colgroup>
            <tbody>
            <tr>
              <th scope="row">소재</th>
              <td>겉감: 폴리에스터 100% 배색1: 면 60% 나일론 40% 배색2: 폴리에스터 100%</td>
            </tr>
            <tr>
              <th scope="row">색상</th>
              <td>
                BLK(블랙)
                , BEG(베이지)
              </td>
            </tr>
            <tr>
              <th scope="row">사이즈</th>
              <td>S,M,L,XL</td>
            </tr>
            <tr>
              <th scope="row">제조국</th>
              <td>VIETNAM</td>
            </tr>
            <tr>
              <th scope="row">제조사</th>
              <td>게스홀딩스코리아유한회사</td>
            </tr>
            <tr>
              <th scope="row">제조연월</th>
              <td>2019</td>
            </tr>
            </tbody>
          </table>
          <br/>
          <div className="row">
            <div className="col-7">
              <h5>실측 사이즈</h5>
              <table className="th-left table">
                <colgroup>
                  <col style={{width: "auto"}}/>
                </colgroup>
                <thead>
                <tr>
                  <th scope="col">사이즈</th>
                  <th scope="col">S</th>
                  <th scope="col">M</th>
                  <th scope="col">L</th>
                  <th scope="col">XL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">어깨넓이</th>
                  <td>46.5</td>
                  <td>49</td>
                  <td>51</td>
                  <td>53</td>

                </tr>
                <tr>
                  <th scope="row">가슴둘레</th>
                  <td>112</td>
                  <td>120</td>
                  <td>125</td>
                  <td>132</td>

                </tr>
                <tr>
                  <th scope="row">소매길이</th>
                  <td>57</td>
                  <td>62</td>
                  <td>63</td>
                  <td>64.5</td>

                </tr>
                <tr>
                  <th scope="row">총길이</th>
                  <td>66</td>
                  <td>69.8</td>
                  <td>71</td>
                  <td>72.2</td>

                </tr>
                </tbody>
              </table>
              <ul className="notice">
                <li>- 이미지의 색상은 모니터 사양과 해상도에 따라 차이가 있을 수 있습니다.</li>
                <li>- 사이즈 단위는 cm이며, 상품소재나 재는 위치에 따라 오차가 있을 수 있습니다.</li>
                <li>- 위 사항들은 교환 및 반품, 환불의 사유가 될 수 없으며, 고객님의 단순변심으로 분류됩니다.</li>
              </ul>
            </div>
            <div className="col-5">
              <img src="/img/clothesSize.jpg" alt="실제 사이즈"/>
            </div>
          </div>
        </div>
        <div className="margin1"></div>
        <div id="tab3" className="row">
          <div className="col">
            <h5>배송안내</h5>
            <p style={{marginLeft: "0px"}}></p>
            <p></p>
            <p></p>
            <dl>
              <dt>배송기간</dt>
              <dd>본 상품은 입금일 기준 평균 3~5일이 소요됩니다. (토/일/공휴일 제외)</dd>
              <dd>본 상품은 오프라인 매장과 동시 판매되고 있으므로,<br/>주문접수 후 상품준비 도중 판매가 증가하여 발송지연<br/> 또는 품절 될 수 있으니 이점 양해 바랍니다.</dd>
              <dd> 배송이 지연되는 경우 고객님께 빠르게 안내 될 수 있도록 노력하겠습니다.</dd>
            </dl>
            <dl>
              <dt>배송업체</dt>
              <dd>CJ 대한 통운 택배 │ 대표번호 <span style={{color: "rgb(253, 68, 28)"}}>1588-1255</span>
                <br/> 상담 운영 시간 월~금요일 08:00~18:00 / 토요일 09:00~13:00
              </dd>
            </dl>
            <dl>
              <dt>배송지역</dt>
              <dd>전국배송 가능 (제주도나 기타도서산간 지역은 별도의 추가요금이 부과될 수 있습니다.)</dd>
            </dl>
            <dl>
              <dt>배송비</dt>
              <dd>결제 금액 기준 30,000원 이상 구매시 무료배송 (할인쿠폰 적용금액 기준)<br/>구매 시 배송비는 2,500원 (3만원 이상 무료)</dd>
              <dd> 도서,산간,오지 일부 지역은 배송비가 추가됩니다.
              </dd>
              <dd>전국 배송 가능 (제주도나 기타도서 지방은 별도의 요금이 부과됩니다.)</dd>
            </dl>
            <dl>
              <dt>당일퀵배송</dt>
              <dd>주문 기준 건 당 5,000원 (서울 시내만 배송 가능)</dd>
              <dd>매일 오후 3시 이전 주문결제완료 건 (토/일/공휴일 제외)</dd>
              <dd>오프라인 매장에서 상품준비 도중 판매가 증가하여 발송지연<br/>또는 품절 될 수 있으니 이점 양해 바랍니다.</dd>
              <dd>배송이 지연되는 경우 고객님께 빠르게 안내 될 수 있도록 노력하겠습니다.</dd>
              <dd>배송 업체 : 원더스퀵 │ 대표번호 02-785-2082</dd>
            </dl>
          </div>
          <div className="col">
            <h5>교환/반품안내</h5>
            <dl>
              <dt>신청 방법 및 절차</dt>
              <dd>마이페이지 &gt; 주문조회 메뉴에서 접수 가능합니다.</dd>
              <dd>반품접수 후 영업일 기준 2~3일 이내에 자사 지정 택배 기사님이 직접 방문하여 상품을 수거합니다.</dd>
              <dd>지정택배를 통해서 교환/반품이 가능합니다</dd>
            </dl>
            <dl>
              <dt>교환/반품 시 주의사항</dt>
              <dd>교환 및 반품은 상품 수령 후 14일 이내에 신청 가능합니다.</dd>
              <dd>상품은 착용한 흔적이 있거나, 상품 TAG이 손상된 경우 교환/반품/환불이 불가합니다.
                <br/>교환 시 맞교환은 불가능하며, 상품 입고 후 교환을 원하시는 제품으로 배송해드립니다.
              </dd>
              <dd>교환 및 반품 내역이 접수되지 않거나, 지정된 반송처로 반송되지 않을 시, 교환/반품/환불 절차가 지연되오니 양해 부탁 드립니다.</dd>

            </dl>
            <dl>
              <dt>교환/반품 가능한 경우</dt>
              <dd>교환 및 반품은 상품 수령 후 14일 이내에 신청 가능합니다.</dd>
              <dd>상품을 미사용한 상태에서 반송하여 주십시오.</dd>
              <dd>반송된 후 물류센터에서 반송확인 후 환불 및 교환처리 됩니다.</dd>
            </dl>
            <dl>
              <dt>교환/반품 불가능한 경우</dt>
              <dd>교환 또는 반품 요청 후 상품이 5일 이내 도착하지 않은 경우, 교환/반품이 되지 않습니다.</dd>
              <dd>고객님의 책임 있는 사유로 상품이 훼손된 경우,</dd>
              <dd>상품 고유의 포장이 훼손되어 상품가치가 상실된 경우 (TAG/라벨/비닐포장/케이스 등의 훼손 및 분실)</dd>
              <dd>데님의 특성상 워싱은 상품마다 차이가 있을 수 있으며, 이로 인한 무료 반품은 불가합니다.</dd>
            </dl>
            <dl>
              <dt>교환/반품 배송비</dt>
              <dd>교환,반품 배송비 : 5,000원<br/>묶음 주문의 부분 교환 : 5,000원 (왕복 택배비)</dd>
              <dd>묶음 주문의 부분 반품 : 2,500원
                <br/>단, 부분 반품 시 3만원 이상 무료 배송인 원 주문의 총 결재 금액이 3만원 미만이 될 경우, 왕복 배송비 5,000원 과금<br/>교환 / 반품시 배송비 결제
              </dd>
            </dl>
            <p></p><p></p>
            <article className="pull-left">
              <dl>
                <dd>신청 방법 : 신청사유 입력 및 배송비 결제 → 자사지정택배 자동 회수지시</dd>

              </dl>
            </article>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

// off-canvas
export default DetailClothesFooter;