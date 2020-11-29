//scroll effect    
$(window).scroll(function(){
    $(".main").css("opacity", 1.15 - $(window).scrollTop() / 1000);
  });
  $(window).scroll(function(){
    $(".qualifications").css("opacity", 2.6 - $(window).scrollTop() / 1000);
  });
  $(window).scroll(function(){
    $(".projects").css("opacity", 4.2 - $(window).scrollTop() / 1000);
  });
