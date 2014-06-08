/* low level functions */
function SetBackGroundImage(url){
	$(document.body).css('background-image', 'url(' + url + ')');
}
function GetBrowserLanguage() {
	try { return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2) }
	catch(e) { return undefined; }
}
function loadScript(src){
	var script = document.createElement('script');
	script.src = src;
	document.head.appendChild(script);
}
function GetParameterUrl(url, params){
	var _query = [];
	for(var k in params){ _query.push( k + "=" + encodeURI( params[k] ) ); }
	var query = [url, _query.join("&")].join("?");
	return query;
}


