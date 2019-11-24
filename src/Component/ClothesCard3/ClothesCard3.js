import React from "react";
import {withRouter} from 'react-router-dom';
import "./ClothesCard3.css";
import {getLoginInfo, setHeartUser} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";

class ClothesCard3 extends React.Component {
  gotoDetailClothes = () => {
    console.log(this.props.cloths);
    this.props.history.push("/detailClothes/" + this.props.cloths.pid);
  };

  countUpHeart = (e, cloths) => {
    e.stopPropagation();
    let user = getLoginInfo();
    console.log(user);
    if (!user) {
      alertDialog.show('알림', '로그인 후 이용가능합니다..');
      return;
    }
    setHeartUser({check: true, uid: user.id, pid: cloths.pid}, res => {
      console.log(res);
    });
  };

  render() {
    const {cloths} = this.props;
    return (
      <div className="clothesCard3" onClick={this.gotoDetailClothes}>
        <div className="clothesCard3ImageWrap">
          <div className="clothesCard3Image" style={{backgroundImage: "url(" + cloths.image + ")"}}/>
          <div className="size-box" onClick={(e) => this.countUpHeart(e, cloths)}>
            <i className="far fa-heart"/>
            <div className="clotCard2HeartText">{cloths.heartCnt}</div>
          </div>
        </div>
        <div className="thumbnail-info transition-normal">
          <div className="title">{cloths.title}</div>
          <div className="price clear">
            <div className="pull-left"><strong>{cloths.salePrice.toLocaleString()}</strong>
              <del>{cloths.firstPrice.toLocaleString()}</del>
            </div>
          </div>
          <div className="color-chip">
            {
              cloths.colorPick.map((v, i) => (
                <div style={{backgroundColor: v.color}} className="middle-color-circle" key={i} title={v.title}/>))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClothesCard3);