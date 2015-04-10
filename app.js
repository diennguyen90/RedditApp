'use strict';
angular.module('redditApp', ['ngRoute', 'firebase'])

//routing the front end
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'MainCtrl'
		})
		.when('/posts/:title', {
			templateUrl: 'post.html',
			controller: 'PostCtrl'
		})
		 .otherwise({
        redirectTo: '/'
      });
})


.controller('MainCtrl',['$scope','$firebaseArray', function($scope,$firebaseArray){
   // $scope.posts = redditPosts.getPostArray();
     var ref = new Firebase('https://dienspost.firebaseio.com');

     $scope.posts = $firebaseArray(ref)
    $scope.addPost = function(){
    	 $scope.posts.$add({
    	 	title: $scope.title,
    	 	body: $scope.body,
    	 	upvotes: 0
    	 });
    }
	//adds up 1 vote every click
	// $scope.addUpvotes = function(post){
	// 	$scope.post = +1;
	// };

}])

.controller('PostsCtrl', function($scope,$routeParams){



});