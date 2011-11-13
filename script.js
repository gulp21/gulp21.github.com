if(navigator.userAgent.toLowerCase().indexOf("linux")>-1) {
	if(navigator.userAgent.toLowerCase().indexOf("x86_64")>-1) {
		document.getElementById("trLinux64").className="highlight";
	} else if(navigator.userAgent.toLowerCase().indexOf("i686")>-1) {
		document.getElementById("trLinux32").className="highlight";
	} else {
		document.getElementById("trLinux64").className="highlight";
		document.getElementById("trLinux32").className="highlight";
	}
} else if(navigator.userAgent.toLowerCase().indexOf("win")>-1) {
	document.getElementById("trWindows").className="highlight";
}

if(navigator.language.indexOf("de")>-1 && window.location.href.indexOf("index_de")==-1) {
	window.location="index_de.html";
}
