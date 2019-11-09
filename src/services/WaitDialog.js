import $ from "jquery"

class WaitDialog {
  constructor() {
    this.timer = null;
  }

  show() {
    $('body').append(`
        <div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false">
          <div class="spinner-border text-primary wait-spinner"></div>
        </div>`
    );
    $('#pleaseWaitDialog').modal()
    this.timer = setTimeout(() => this.hide(1), 180000);
  }

  hide(bAutoClose) {
    if( bAutoClose === undefined ) {
      clearTimeout(this.timer);
    }
    $('#pleaseWaitDialog').modal('hide')
    $('#pleaseWaitDialog').remove();
  }
}
const waitDialog = new WaitDialog;

export default waitDialog;