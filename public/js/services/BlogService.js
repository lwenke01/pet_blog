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
