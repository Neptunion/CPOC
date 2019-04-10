var originalScrollpos = window.pageYOffset;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var originalMargin = document.getElementById("stuff").style.margin;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bar").style.top = "-75px";
    document.getElementById("topbar").style.top = "-75px";

    //document.getElementById("content").style.margin = "1.5vw";
    //document.getElementById("stuff").style.margin = "0 12.445095168374817vw 0";
    document.getElementById("stuff").css("margin-top") = "0";
  } else {
    document.getElementById("bar").style.top = -75+"px";
    document.getElementById("topbar").style.top = "-75px";
    //document.getElementById("content").style.margin = "1.5vw";
    //document.getElementById("stuff").style.margin = "0 12.445095168374817vw 0";
    document.getElementById("stuff").css("margin-top") = "0";
  }
  //if (prevScrollpos < currentScrollPos) {
  //  if (currentScrollPos < 64) window.scrollTo(0, 64);
  //}
  prevScrollpos = currentScrollPos;
  document.getElementById("scroll").innerHTML = currentScrollPos;
  if (0 == currentScrollPos) {
    document.getElementById("bar").style.top = "0";
    document.getElementById("topbar").style.top = "0";
   //document.getElementById("content").style.margin = "0";
    document.getElementById("stuff").css("margin-top") = "64px";
  }
}
