var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 1){
        $("header").css({"background": "#F6FBFB"})
    }
    if(1 > scrolled){
        $("header").css({"background": "none"})
    }

}
