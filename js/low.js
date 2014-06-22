/* low level functions */
function SetBackGroundImage(url){
	var BGUrl = 'url(' + url + ')';
	var interval = BG_BUFFER_INTERVAL * 1000;
	$(document.body).css('background-image', BGUrl);
	setTimeout(function(){ $("#buffer").css('background-image', BGUrl); }, interval );
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

