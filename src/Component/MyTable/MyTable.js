import React from "react";
import "./MyTable.module.css";

export class MyTable extends React.Component {
  // state = {
  //   inputs: [
  //     {
  //       title: '주문고객',
  //       name: "order_name",
  //       style: {width: "270px"},
  //       placeholder: "주문하시는분의 이름을 적어주세요",
  //       readOnly: false
  //     },
  //     {
  //       title: '휴대전화',
  //       subInputs: [
  //         {
  //           type: "select",
  //           select: ["010", "011", "016", "017", "018", "019"],
  //           name: "telephone1",
  //           style: {width: "270px"}
  //         },
  //         {  type: "input",  name: "telephone2",           style: {width: "270px"}          },
  //         {  type: "input",  name: "telephone3",            style: {width: "270px"}          }
  //       ]
  //     },
  //   ]
  // }

  render() {
    return (
      <ul className={`orderSheetTable uk-list ${this.props.noneLine ? "" : "uk-list-divider"}`} style={{textAlign: "left", borderBottom: "1px solid #ddd"}}>
        {
          this.props.inputs.map((v, i) => (
            <li key={i} style={v.bgColor ? {padding:"10px", backgroundColor: v.bgColor}: {padding:"10px"}}>
              <div className="row">
                {v.title ?
                  (<div className="col-4" style={{maxWidth: "250px", width: v.headerWidth || null}}>{v.title}
                    <span className="point-color">{v.required ? '*' : null}</span>
                  </div>) : null
                }

                <div className={v.title ? "col-8" : ""}>
                  {
                    (() => {
                      if (v.subInputs) {
                        return (
                          v.subInputs.map((sv, ii) => {
                            switch (sv.type) {
                              case 'select':
                                return (
                                  <div key={ii} style={{display: "inline-block"}}>
                                    <div className="uk-form-controls">
                                      <select className="uk-select" style={sv.style} id={sv.name}>
                                        {sv.select.map((sel, iii) => (<option key={iii} value={sel}>{sel}</option>))}
                                      </select>
                                    </div>
                                  </div>);
                              case 'input':
                                return (
                                  <span key={ii}>
                                <span className="txt">-</span>
                                <input type="text" id={sv.name} style={sv.style} className="uk-input"/>
                                </span>
                                );
                            }
                          })
                        );
                      } else if (v.name) {
                        return (
                          <input type="text" id={v.name} style={v.style} className="uk-input"
                                 placeholder={v.placeholder} readOnly={v.readOnly ? "readonly" : null}/>
                        )
                      } else {
                        return (
                          <div style={v.style}>{v.element}</div>
                        )
                      }
                    })()
                  }
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
}