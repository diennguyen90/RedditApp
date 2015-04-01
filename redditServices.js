angular.module('redditServices', [])

.factory('redditPosts', function(){
	var a = {
		posts: []
	}

	return{
		getPostArray: function(){
			return a;
		}
	} 
})