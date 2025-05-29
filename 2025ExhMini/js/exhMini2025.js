$(function() {
  let len = 77
  $('.JQellipsis').each(function() {
    if ($(this).html().trim().length > len) {
      var str = $(this).html().substring(0, len - 1) + "...";
      $(this).html(str);
    }
  });
});