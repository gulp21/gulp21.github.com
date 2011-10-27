if(navigator.language.indexOf("de")>-1 && window.location.href.indexOf("index_de")==-1) {
	window.location="index_de.html";
}
if(navigator.platform.toLowerCase().indexOf("linux")>-1) {
	document.getElementById("trLinux").className="highlight";
} else if(navigator.platform.toLowerCase().indexOf("win")>-1) {
	document.getElementById("trWindows").className="highlight";
}
