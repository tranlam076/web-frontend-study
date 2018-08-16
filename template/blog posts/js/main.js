// hide header on scroll
window.onscroll = function(){
	if(window.pageYOffset <= 260){
		var position = window.pageYOffset;
		var opacity = (100 - (position * 100 / 260)) / 100;
		document.getElementById("header").style.opacity = opacity;
	}
}