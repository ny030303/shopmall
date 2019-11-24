import React from "react";
import {withRouter} from 'react-router-dom';
import "./ClothesCard2.css";
import {getHeartUser, getLoginInfo, setHeartUser} from "../../services/DataService";
import alertDialog from "../../services/AlertDialog";

class ClothesCard2 extends React.Component {
  state = {
    hearts: false
  };

  // componentDidMount() {
  //   let user = getLoginInfo();
  //   if( user) {
  //     getHeartUser(user.id, res => {
  //       console.log(res);
  //     })
  //   }
  // }

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
      <div className="clothesCard2" onClick={this.gotoDetailClothes}>
        <div className="clothesCard2ImageWrap">
          <div className="clothesCard2Image" style={{backgroundImage: "url(" + cloths.image + ")"}}/>
          <div className="size-box" onClick={(e) => this.countUpHeart(e, cloths)}>
            <i className="far fa-heart"></i>
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
                <div style={{backgroundColor: v.color}} className="color-circle" key={i} title={v.title}/>))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClothesCard2);