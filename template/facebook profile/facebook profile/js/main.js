// set width for element function
function viewport(){
	if(screen.width<=340)
		document.getElementById("myViewport").setAttribute("content","width=340, user-scalable=no");
	else{
		document.getElementById("myViewport").setAttribute("content","width=device-width, user-scalable=no");
	}
}
window.onresize = function(){
	viewport();
}
document.onload = function(){
	viewport();
}