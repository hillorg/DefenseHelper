(function(){
var app = angular.module('defenseHelper',['ngFacebook']);
  
  app.config(['$facebookProvider', function($facebookProvider) {
    $facebookProvider.setAppId('1415657258730982').setPermissions(['email','user_friends']);
  }]);
  app.run(['$rootScope', '$window', function($rootScope, $window) {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));
    $rootScope.$on('fb.load', function() {
      $window.dispatchEvent(new Event('fb.load'));
    });
  }]);
  
  app.controller('myCtrl', ['$scope', '$facebook', function($scope, $facebook) {
    $scope.$on('fb.auth.authResponseChange', function() {
      $scope.status = $facebook.isConnected();
      if($scope.status) {
        $facebook.api('/me').then(function(user) {
          $scope.user = user;
        });
      }
    });
app.controller('DefenseController', function($scope){
  $scope.user = {
    name: "Jamarr Hill",
    company: "Quicken Loans",
    time_accessed: Date.now()
  };
});

app.controller('UrlController', function(){
  
  var re = /\w+$/i; 
  var m;
  this.letsFormat = false;
 
  this.postID = function(PostURL){
    if ((isUndefined(m = re.exec(PostURL)))) {
      if (m.index === re.lastIndex) {
          re.lastIndex++;
      }
      // View your result using the m-variable.
      // eg m[0] etc.
      this.letsFormat = true;
      return letsFormat;
      //return {
        //letsFormat: letsFormat,
        //m: m
      //};
    }
  };
  $scope.getFriends = function() {
      if(!$scope.status) return;
      $facebook.api('/me?fields=likes').then(function(friends) {
        $scope.friends = friends.data;
      });
    };
    
    $scope.getPost = function() {
      if(!$scope.status) return;
      $facebook.api('/10152715571901846').then(function(posts) {
        $scope.posts = posts.data;
      });
    };
    
});
}) (); 
