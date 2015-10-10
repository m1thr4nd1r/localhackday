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
