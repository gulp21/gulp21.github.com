if(window.location.href.indexOf("qeodart")>-1) {
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
}

if(navigator.language.indexOf("de")>-1 && window.location.href.indexOf("_de")==-1) {
	if(window.location.href.indexOf(".html")==-1)
		window.location="index_de.html";
	else
		window.location=window.location.href.substr(0,window.location.href.length-5)+"_de.html";
}
