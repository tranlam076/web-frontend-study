// viewport
function viewport(){
	if(screen.width<=420)
		document.getElementById("myViewport").setAttribute("content","width=420, user-scalable=no");
	else{
		document.getElementById("myViewport").setAttribute("content","width=device-width, user-scalable=no");
	}
}
// call the function
viewport();
window.onresize = function(){
	viewport();
}

// scroll and topbar

var seach_height = document.getElementById('search_form').offsetTop + document.getElementById('search_form').offsetHeight - 50;
window.onscroll = function() {
	var scroll_pos = window.pageYOffset ; 
	
	if ((scroll_pos > 0 ) && (scroll_pos < seach_height)){
		// bg color and size
		document.getElementById("topbar").className = "style1";
	}else if (scroll_pos >= seach_height){
		// search input
		document.getElementById("topbar").className = "style1 style2";
	}else{
		// none of above
		document.getElementById("topbar").className = "";
	}
};

function nav(){
	document.getElementById("nav").classList.toggle("active");
}