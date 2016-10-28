

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
