$(function(){
	window.strage = new MyLocalStrage();
	var data = window.strage.get();
	var defaultData = {
		init: true,
		default_keyword: ["landscape", "motogp padock", "the world heritage photo"].join("\n"), 
		default_shortcuts: [
			"fa-facebook-square https://www.facebook.com/",
			"fa-github-alt https://github.com/",
			"fa-calendar https://www.google.com/calendar",
			"fa-envelope https://mail.google.com/mail/"
		].join("\n")
	};
	if( !data || !data.init ) { data = defaultData; }
	
	var modal = $("#settingWindow");
	var content = $(".modalContent", modal);
	var bg = $(".modalBG", modal);
	var fromData = function(){
		for(var k in data){
			var key = "#" + k;
			$(key, modal).val(data[k]);
		}
	};
	var toData = function(){
		for(var k in data){
			var key = "#" + k;
			data[k] = $(key, modal).val();
		}
		window.strage.set(data);
	};
	$("#syscmd a").click(function(){
		//var left = ($(document).innerWidth() - $(content).width()) / 2;
		//var top = ($(document).innerHeight() - $(content).height()) / 2;
		//$(content).css({'left': left,'top': top});
		fromData();
		$(modal).fadeIn(100);
	});
	var close = $(".closeSetting", modal);
	var reset = $(".setDefault", modal);
	$(close).click(function(){
		toData();
		SET_SHORTCUTS();
		$(modal).fadeOut(100);
	});
	$(reset).click(function(){
		data = defaultData;
		fromData();
	});
	
	SEARCH_KEYWORD = function(){
		var lines = data["default_keyword"].split(/\n+/);
		while(true){
			var line = lines[Math.floor(Math.random()*lines.length)];
			if(line) return line;
		}
	};
	SET_SHORTCUTS = function(){
		var block = $("#usercmd").empty();
		var lines = data["default_shortcuts"].split(/\n+/);
		var template = "<a href='{%_URL_%}'><i class='fa {%_ICON_%}'></i></a>";
		for(var i=0; i<lines.length; i++ ){
			var line = lines[i];
			if(line){
				var part = line.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/);
				var icon = part[0];
				var url =  part[1];
				if(icon && url){
					var shortcut = $(template.replace("{%_ICON_%}", icon).replace("{%_URL_%}", url));
					$(block).append($(shortcut));
				}
			}
		}
	};
});

