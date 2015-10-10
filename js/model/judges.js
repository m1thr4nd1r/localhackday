var Util = (function(){
    var _public = {};
    _public.loadPage = function(href)
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }
    return _public;
})();

var Spoj = (function(){

    var _private = {};
    _private.baseUrl = "https://br.spoj.com/";
    _private.profilePath = "users/"; 
    _private.getUserProfile = function(user){
        Util.loadPage(_private.baseUrl + _private.profilePath + user);
    };

    var _public = {};
    _public.getUser = _private.getUserProfile;
    _public.get = function(){
        _public.getUser("m1thr4nd1r");
    }

    return _public;
})();

var URIJudge = (function(){

	var _private = {};
	_private.baseUrl = "https://www.urionlinejudge.com.br/";
	_private.judgePath = "judge/";
	_private.profilePath = "profile/"; 
	_private.defaultLang = 'pt';
	_private.getUserById = function(id){
		console.log(id);
		console.log(_private);
	};

	var _public = {};
	_public.userId = "";
	_public.getUser = _private.getUserById;
	_public.get = function(){
		_public.getUser(123);
	}

	return _public;
})();
