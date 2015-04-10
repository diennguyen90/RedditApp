angular.module('redditServices', [])

.factory('redditPosts', function(){
	var a = {
		posts: [{title: 'google', upvote:0}, {title:'facebook', upvote: 0}]
	}

	return{
		getPostArray: function(){
			return a;
		}
	} 
})