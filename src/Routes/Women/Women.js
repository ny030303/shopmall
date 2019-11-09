import React from "react";
import ShopContents from "../../Component/ShopPage/ShopContents/ShopContents";
import {getClothesOfWomen} from "../../services/DataService";

export class Women extends React.Component {
  componentDidMount() {
    // 우먼 데이터 처리
    // getClothesOfWomen(this.state.userId, this.state.userPwd, res => {
    //   console.log(res)
    // });
  }

  render() {
    const {params} = this.props.match;
    console.log('Women-subMenu:', params);
    return(
      <ShopContents/>
    )
  }
}