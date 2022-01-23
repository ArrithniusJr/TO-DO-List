$(function() {
  //sticky fixed header
  $(window).scroll(function() {
   if ($(this).scrollTop() > 1) {
    $('#stickyheader').addClass("sticky_header");
   }
   else {
    $('#stickyheader').removeClass("sticky_header");
   }
  });

  //adding notes and new elements(<li></li> and remove button)
  $("#add").on("click", function() {
    var value = $("#newit").val();
    if(value !== ' ') {
      var element = $("<li class='Listcont'></li>").text(value);
      $(element).append("<button class='rem'>remove</button>");
      $("#list").append(element);
      $("#newit").val('');
      $(".rem").on("click", function() {
        $(this).parent().remove();
        /*if($(".rem").data('clicked', true)) {
          $(".items").animate({
            height: '-=10px'
          }, 0010);
        }*/
      });/*
      $(".items").animate({
        height: '+=20px'
      }, 0050);*/
    };
  });
});
