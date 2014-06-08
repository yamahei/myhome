/* functions for image exif */
/*
	* IMG·2·JSON — An image meta–data to JSON web application
	http://img2json.appspot.com/
*/
function GetImageInfo(imageURL){
	setTimeout(function(){ CallImageExif(imageURL); }, 0);
}
function CallImageExif(imageURL){
	loadScript(  MakeImageExifQuery(imageURL) );
}
function MakeImageExifQuery(imageURL){
	var url = "http://img2json.appspot.com/go/";
	var params = {
		url: imageURL, callback: "CookImageExifResult"
	};
	var query = GetParameterUrl(url, params);
	return query;
}
function CookImageExifResult(json){
	json = json || {};
	console.log(json);
	var exif = json.exif;
	if(exif){
		/*
			* http://blog.livedoor.jp/dankogai/archives/51262202.html
			  404 Blog Not Found:Ajax - URIのJPEGからEXIFを抜いて、Google Mapsで表示する
			* http://akabeko.me/blog/2010/04/javascript-%E3%81%A0%E3%81%91%E3%81%A7-exif-%E3%82%92%E8%AA%AD%E3%82%80/
			  JavaScript だけで EXIF を読む | アカベコマイリ
		*/
	}
}

