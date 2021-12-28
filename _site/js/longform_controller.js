// entries is the json service

// new
app_longform.controller('longform_controller', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        // set 'entries' as data from controller 
        $scope.entries = data.records;
          
        console.log($scope.entries);

    });  
}]);

//oldreads
app_longform.controller('oldreads_controller', ['$scope', 'oldentries',
    function($scope, oldentries) {
      oldentries.then(function(data) {
        // set 'entries' as data from controller 
        $scope.entries = data.records;
          
        console.log($scope.entries);

    });  
}]);
