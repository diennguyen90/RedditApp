angular.module('redditApp', ['ui.router'])

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


.controller('MainCtrl', ['$scope', function($scope){
	// $scope.posts =[
	// {title:'post1', upvotes : 5},
	// {title:'post2', upvotes : 7},
	// {title:'post3', upvotes: 10},
	// {title:'post4', upvotes : 15}
	// ];
	$scope.posts = []

	$scope.addPost = function(){
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes : 0})
		$scope.title = '';
		$scope.link = '';
		if($scope.title === '') return false;
}
	//adds up 1 vote every click
	$scope.addUpvotes = function(post){
		post.upvotes += 1;
	}

}]);

// .controller('Posts', ['$scope', '$stateParams' function($scope,$stateParams){

// }])