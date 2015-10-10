var Util = (function(){
    _public = {};
    _public.loadPage = function(href)
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
})();

var Spoj = (function(){

    _private = {};
    _private.baseUrl = "https://www.urionlinejudge.com.br/";
    _private.judgePath = "judge/";
    _private.profilePath = "profile/"; 
    _private.defaultLang = 'pt';
    _private.getUserById = function(id){
        console.log(id);
        console.log(_private);
    };

    _public = {};
    _public.userId = "";
    _public.getUser = _private.getUserById;
    _public.get = function(){
        _public.getUser(123);
    }

    return _public;
})();

var URIJudge = (function(){

	_private = {};
	_private.baseUrl = "https://www.urionlinejudge.com.br/";
	_private.judgePath = "judge/";
	_private.profilePath = "profile/"; 
	_private.defaultLang = 'pt';
	_private.getUserById = function(id){
		console.log(id);
		console.log(_private);
	};

	_public = {};
	_public.userId = "";
	_public.getUser = _private.getUserById;
	_public.get = function(){
		_public.getUser(123);
	}

	return _public;
})();
