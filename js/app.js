// longform
var app_longform = angular.module('longform', ['ngRoute', 'iso.directives', 'iso.services']);

app_longform.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl : '/js/longform_entry.html',
    controller  : 'longform_controller'
  })
  .when('/oldreads', {
    templateUrl : '/js/longform_entry.html',
    controller  : 'oldreads_controller'
  })
})

//app_longform.filter('dateParse', function(input) {
//  return function(input) {
//    var [month, day, year] = input.split(" "); 
//    let dateString = month + day + year; 
//    console.log(dateString);
////    return new Date(dateString);
//  };
//});
