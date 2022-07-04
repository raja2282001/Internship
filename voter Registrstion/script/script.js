
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
$(document).ready(function () {
    $("body").on("contextmenu",function(e){
        return false;
    });
});
