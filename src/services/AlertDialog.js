import $ from "jquery"

class AlertDialog {
  show(title, message) {
    $('body').append(`
      <div class="modal fade" id="alertModal">
        <div class="modal-dialog" style="width: 600px">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">${title}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">${message}</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`
    );
    $('#alertModal').modal();
    $('#alertModal').on('hidden.bs.modal', function (e) {
      setTimeout(() => $('#alertModal').remove(), 100);
    });
  }
}

const alertDialog = new AlertDialog;

export default alertDialog;