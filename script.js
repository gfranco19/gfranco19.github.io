//scroll effect  
const x = window.matchMedia("(max-width: 600px)");
function scrollFunction(x){ 
    if (x.matches){
        $(window).scroll(function(){
            $(".main").css("opacity", 1.15 - $(window).scrollTop() / 1000);
          });
          $(window).scroll(function(){
            $(".notabilities").css("opacity", 4.5 - $(window).scrollTop() / 1000);
          });
          $(window).scroll(function(){
            $(".projects").css("opacity", 6.8 - $(window).scrollTop() / 1000);
          });
        $(".fa-github").addClass("fa-1x");
        $(".fa-linkedin").addClass("fa-1x");
        $(".fa-file").addClass("fa-1x");
        console.log("working");
  
    }else{
  $(window).scroll(function(){
    $(".main").css("opacity", 1.15 - $(window).scrollTop() / 1000);
  });
  $(window).scroll(function(){
    $(".notabilities").css("opacity", 2.6 - $(window).scrollTop() / 1000);
  });
  $(window).scroll(function(){
    $(".projects").css("opacity", 4.2 - $(window).scrollTop() / 1000);
  });
  $(".fa-github").addClass("fa-2x");
  $(".fa-linkedin").addClass("fa-2x");
  $(".fa-file").addClass("fa-2x");
}
}

scrollFunction(x);
x.addListener(scrollFunction);



