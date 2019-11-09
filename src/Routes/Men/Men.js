import React from "react";
import ShopContents from "../../Component/ShopPage/ShopContents/ShopContents";

export class Men extends React.Component {
  componentDidMount() {
    // 우먼 데이터 처리
  }

  render() {
    const {subMenu} = this.props.history.params;
    console.log('Men-subMenu:', subMenu);
    return(
      <ShopContents/>
    )
  }
}