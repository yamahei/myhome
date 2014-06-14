function SetContextLink( title, url ){
	/*var a = document.createElement('a');
	a.setAttribute('href', url);
	a.innerText = title;
	document.getElementById("info").appendChild(a);*/
	$("#info").empty().append("<a href='"+url+"'>"+title+"</a>");
}
function SetSearch(){
	var search = $("#search");
	$(search).focus().on("keypress", function(e){
		if(e.keyCode == 13){
			var keyword = $(this).val();
			var url;
			if(GetBrowserLanguage().match(/ja/i))
				url = "http://www.google.co.jp/search";
			else
				url = "http://www.google.com/search";
			var params = { q: keyword };
			var query = GetParameterUrl(url, params);
			location.href = query;
		}
	});	
}
function GetWindowPixels(){
	return $(window).width() * $(window).height() ;
}

