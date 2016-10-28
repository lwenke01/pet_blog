
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
