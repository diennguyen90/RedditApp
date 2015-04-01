angular.module('redditApp', ['ui.router', 'redditServices'])

//routing the front end
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})
	.state('posts', {
		url:'/posts/{id}',
		templateUrl: '/post.html',
		controller: 'PostsCtrl'
	});
	$urlRouterProvider.otherwise('home');
}])


.controller('MainCtrl', function($scope, redditPosts){
	
	//accessing redditPosts services
	$scope.posts = redditPosts.getPostArray();
	// console.log($scope.posts)

	// add posts 
	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes : 0})
		$scope.title = '';
		$scope.link = '';
		if($scope.title === '') return null;
	}



	//adds up 1 vote every click
	$scope.addUpvotes = function(post){
		post.upvotes += 1;
	}

});

// .controller('PostsCtrl', function($scope,$stateParams,redditPosts){

// })