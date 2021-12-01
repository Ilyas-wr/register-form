$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "passWord") {
      input.attr("type", "text");
    } else {
      input.attr("type", "passWord");
    }
  });