/* functions for image search */
/*
	* Google Image Search API 使い方 javascript - 目標は商店街をつくる事なんです。
	http://itakanaya9.hatenablog.com/entry/2014/02/05/024342
*/
function GetImageData(){
	setTimeout(function(){ CallImageSearch(); }, 0);
}
function CallImageSearch(){
	loadScript(  MakeImageSearchQuery( SEARCH_KEYWORD ) );
}
function MakeImageSearchQuery(keyword){
	var url = "http://ajax.googleapis.com/ajax/services/search/images";
	var params = {
		v: "1.0", callback: "CookImageSearchResult", 
		rsz: "small", imgtype: "photo", as_filetype: "jpg"
	};
	params.q = keyword;
	params.imgsz = GetWindowPixels() > 1024 * 1024 ? "xxlarge" : "large";
	params.start = Math.floor( Math.random() * 32 );
	var query = GetParameterUrl(url, params);
	return query;
}
function CookImageSearchResult(json){
	var image, title, url;
	json = json || {};
	console.log(json);
	if(json.responseStatus < 400 && json.responseData != null){
		var responses = json.responseData.results;
		var response = responses[ Math.floor( Math.random() * responses.length ) ];
		if ( response ) {
			image = response.url;
			url = response.originalContextUrl;
			if(response.titleNoFormatting)
				title = response.titleNoFormatting;
			else
				title = url;
			
		}
	}
	if( image ) { 
		SetBackGroundImage( image );
		SetContextLink( title, url );
		GetImageInfo( image );
	}
}

