var originalScrollpos = window.pageYOffset;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var h = document.getElementById('topbar').clientHeight;
  var currentScrollPos = window.pageYOffset;
  //var originalMargin = document.getElementById("stuff").style.margin;
  if (0 == currentScrollPos) {
    document.getElementById("bar").style.top = "0";
    document.getElementById("topbar").style.top = "0";
    //document.getElementById("stuff").css("margin-top") = "64px";
   //document.getElementById("content").style.margin = "0";
  }
  else {
    document.getElementById("bar").style.top = "-75px";
    document.getElementById("topbar").style.top = "-75px";
    //document.getElementById("content").style.margin = "1.5vw";
    //document.getElementById("stuff").style.margin = "0 12.445095168374817vw 0";
    //document.getElementById("stuff").css("margin-top") = "0";
  }
  if (prevScrollpos < currentScrollPos) {
    if (currentScrollPos < h) window.scrollTo(0, h+1);
  }
  prevScrollpos = currentScrollPos;
  //document.getElementById("scroll").innerHTML = currentScrollPos;
  document.getElementById("under").clientHeight = h;
  
}
