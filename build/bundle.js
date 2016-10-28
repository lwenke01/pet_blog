/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	angular.module('woofApp', ['ngRoute', 'appRoutes', 'MainCtrl','IdCtrl','AdminCtrl', 'BlogCtrl','AppDirectives', 'BlogService']);


/***/ },
/* 2 */
/***/ function(module, exports) {

	

	'use strict';

	angular.module('AppDirectives', [])
	.directive('customNav', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/partials/nav.html'
	  };
	})
	.directive('customHeader', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/partials/header.html'
	  };
	})
	.directive('customFooter', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/partials/footer.html'
	  };
	})
	.directive('customBar', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/partials/header-bar.html'
	  };
	})
	.directive('customBlog', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/blog-id.html'
	  };
	})
	.directive('customAbout', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/about.html'
	  };
	})
	.directive('customContact', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/contact.html'
	  };
	})
	.directive('customService', function(){
	  return {
	    retrict: 'E',
	    templateUrl: './views/services.html'
	  };
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	


	angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	  $routeProvider

	  // home page
	  .when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	  })

	  // blogss page that will use the BlogController
	  .when('/login', {
	    templateUrl: 'views/admin.html',
	    controller: 'AdminController'
	  })

	  .when('/admin', {
	    templateUrl: 'views/blog.html',
	    controller: 'BlogController'
	  });

	  //  .when('/:_id', {
	  //        templateUrl: 'views/blog-id.html',
	  //        controller: 'IdController'
	  //      });

	  $locationProvider.html5Mode(true);

	}]);


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	'use strict';

	angular.module('AdminCtrl', []).controller('AdminController', function($scope, $location, $window) {
	  const vm = this;
	  vm.username=null;
	    vm.email=null;
	  vm.password=null;
	  vm.loginUser=function(){
	    if(vm.username=='admin' && vm.password=='admin123')
	    {
	      alert('Successfully logged in');
	      $location.path('/admin');

	    } else {

	      alert('Not Authorized. Returning to Home Page');
	      $location.path('/');
	    };

	  };

	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	'use strict';

	angular.module('BlogCtrl', []).controller('BlogController',['$scope','$location', '$http', function($scope,$location, $http) {
	  var blogUrl = 'http://localhost:8080/api/blogs';
	  var clientUrl = 'http://localhost:8080/posts';
	    var vm = this;
	    vm.blogs = [];
	    vm.myComments = [];

	    // vm.numLimit = '1';
	    // vm.newest;
	    // vm.idUrl = [];



	vm.getBlogs = function(){
	  $http.get(blogUrl)
	      .then(function(data){
	          vm.blogs = data.data.reverse();

	          for(var i =0; i < data.data.length; i ++){
	            var blogId = data.data[i]._id;
	            vm.idUrl = clientUrl + '/' + blogId;
	            console.log(vm.idUrl);
	            vm.commentCount = data.data[i].comments.length;
	            console.log(vm.commentCount);
	            // data.data[i].indexOf();
	            vm.test = data.data[i].comments;
	            console.log(vm.test);
	            // console.log(data.data[i].indexOf());
	            }
	          });

	};


	vm.createBlog= function(blog){
	    $http.post(blogUrl, blog)
	    .then(function(res){
	      console.log('res data ', res.data);
	      vm.blogs.push(res.data);
	      console.log('blogs',vm.blogs);
	      vm.newBlog= null;
	      console.log('new blog',vm.newBlog);
	    });
	  };

	vm.addComment = function(comment){
	  $http.post(blogUrl, comment)
	    .then(function(res){
	      vm.myComments.push(res.data.comments);
	      // console.log('new',vm.newComments);
	      vm.newComment = null;


	    });

	};
	  vm.removeBlog= function(blog){
	      $http.delete(blogUrl + '/' + blog._id)
	      .then(function(res){
	        vm.blogs = vm.blogs.filter((a)=> a._id != blog._id);
	      });
	    };
	    vm.updateBlog= function(blog){
	      $http.put(blogUrl + '/' + blog._id, blog)
	      .then((res)=>{
	        blog.editing = false;
	      }, (err)=> console.log(err));
	    };
	    vm.toggleForm = function(blog){
	      if(!blog.editing){
	        blog.backup1 = blog.title;
	        blog.backup2 = blog.body;
	        blog.backup3 = blog.author;
	        blog.backup4 = blog.imgURL;
	        blog.editing = true;
	      } else {
	        blog.title = blog.backup1;
	        blog.body = blog.backup2;
	        blog.author = blog.backup3 ;
	        blog.imgURL = blog.backup4;
	        blog.editing = false;
	      };
	    };


	}]);


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	'use strict';

	angular.module('IdCtrl', []).controller('IdController',['$scope', '$http', function($scope, $http) {
	  var blogUrl = 'http://woof-republic.herokuapp.com/api/blogs';
	  // var clientUrl = 'http://localhost:8080/posts'
	    let vm = this;
	    // vm.blogs = [];
	    // vm.newest;
	    // vm.idUrl = [];



	vm.getIds = function(){
	  $http.get(blogUrl)
	      .then(function(data){
	          vm.bIds = data.data.reverse();



	      });
	};


	}]);


/***/ },
/* 7 */
/***/ function(module, exports) {

	

	angular.module('MainCtrl', []).controller('MainController', function($scope) {

	    $scope.tagline = 'To the moon and back!';

	});


/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('BlogService', []).factory('Blog', ['$http', function($http) {

	    return {
	        // call to get all blogs
	        get : function() {
	            return $http.get('/api/blogs');
	        },


	                // these will work when more API routes are defined on the Node side of things
	        // call to POST and create a new blog
	        create : function(blogData) {
	            return $http.post('/api/blogs', blogData);
	        },

	        // call to DELETE a blog
	        delete : function(id) {
	            return $http.delete('/api/blogs/' + id);
	        }
	    }

	}]);


/***/ }
/******/ ]);