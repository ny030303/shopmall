import React from "react";
import OtherShopPage from "../../Component/OtherShopPage/OtherShopPage";
import MainFooter from "../../MainFooter/MainFooter";
import eventService from "../../services/EventService";


export class EventContents extends React.Component {
  state = {
    shopInfo: {
      name: "EVENT",
      menu: ["EVENT1", "EVENT2", "EVENT3", "EVENT4"],
      subMenu: [{link: "#/event/event", name: "event"}]
    },
    current: {menuIdx: 0, subMenuIdx: 0}
  };

  componentDidMount() {
    eventService.listenEvent('onTriangleMenuChange', idx => this.onChange(null, idx));
  }

  componentWillUnmount() {
    eventService.unlistenEvent('onTriangleMenuChange');
  }

  onChange = (menuIdx, subMenuIdx) => {
    const {current} = this.state;
    if( menuIdx ) {
      current.menuIdx = menuIdx;
    }
    if( subMenuIdx ) {
      current.subMenuIdx = subMenuIdx;
    }
    this.setState(current);
  };

  render() {
    const {subMenu} = this.props.match.params;
    console.log('Event-subMenu:', subMenu);
    return (
      <div>
        <OtherShopPage shopInfo={this.state.shopInfo} current={this.state.current} onChange={this.onChange}/>
      </div>
    )
  }
}