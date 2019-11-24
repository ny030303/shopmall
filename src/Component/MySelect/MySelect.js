import React from "react";

export class MySelect extends React.Component {
  onSelect = (e) => {
    this.props.onSelect(e.target.dataset.sel);
  };

  render() {

    return(
      <div className="dropdown">
        <div className="clothesLookUp" data-toggle="dropdown">조회 <i className="fas fa-caret-down"></i></div>
        <div className="dropdown-menu dropdown-menu-right">
          { this.props.datas.map((v,i) => (
            <div key={i} data-sel={i} className="dropdown-item" href="#" onClick={this.onSelect}>{v}</div>
          )) }
        </div>
      </div>
    )
  }
}