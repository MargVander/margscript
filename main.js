setTimeout(function monPopup(){ 
	confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);

function RedirectionJavascript(){
  document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
}

function monPopup() {
	if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please") == true) {
		RedirectionJavascript();
	} else {
		return false;
	}
}