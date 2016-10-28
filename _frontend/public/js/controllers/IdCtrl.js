
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
