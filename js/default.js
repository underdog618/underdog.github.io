$(document).ready(function () {
  $(".submit").gbox("<div><p style='color:red'>請確認輸入的內容!</p></div>", {
    titleBar: "請輸入完全",
    hasCloseBtn: true,
    hasActionBtn: true,
    clickBgclose: true,
  });
});
