import React from 'react';

import "./PaymentNhnKcp.module.css";

const nhnKcpUrl = '/nhnkcp/order.php';

export class PaymentNhnKcp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.refs.iframe.addEventListener('load', this.onIFrameLoad);
    window.addEventListener('message', msg => this.props.onResult(msg.data));
    document.getElementById('orderSubmit').click();
  }

  render() {
    const {params} = this.props;
    return (
      <div>
        <form action={nhnKcpUrl} target="kcpIframe" method="post" style={{display: "none"}}>
          <input type="text" name="ordr_idxx" value={params.ordr_idxx}/>
          <input type="text" name="good_name" value={params.good_name}/>
          <input type="text" name="good_mny" value={params.good_mny}/>
          <input type="text" name="buyr_name" value={params.buyr_name}/>
          <input type="text" name="buyr_mail" value={params.buyr_mail}/>
          <input type="text" name="buyr_tel1" value={params.buyr_tel1}/>
          <input type="text" name="buyr_tel2" value={params.buyr_tel2}/>
          <input type="submit" id="orderSubmit"/>
        </form>
        <iframe ref="iframe" width="760px" height="570px" name="kcpIframe" src={nhnKcpUrl}/>
      </div>)
  }
}