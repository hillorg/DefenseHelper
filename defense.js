var app = angular.module('defenseHelper',[]);
  
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
});
