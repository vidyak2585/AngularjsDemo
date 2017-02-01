(function(){
var app = angular.module('firstExample',[]);
app.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
// default post header
$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// send login data
$scope.submit = function(){
//alert($scope.username + "---" + $scope.password);
var data = $.param({
userdata: JSON.stringify({
username:$scope.username,
password:$scope.password

})
});
$http.post("url", data).success(function(response, status) {
alert("success");
}).error(function(){
alert('error');
});
};
}]);
})();