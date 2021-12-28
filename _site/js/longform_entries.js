// service to fetch 'entries' from json data (via airtable API)

// new 
app_longform.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/app5lKJ3fALLBkCtj/reads?api_key=keyjxzR8ckt48ealv&sort%5B0%5D%5Bfield%5D=read_date&sort%5B0%5D%5Bdirection%5D=desc')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// oldreads
app_longform.factory('oldentries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/app5lKJ3fALLBkCtj/oldreads?api_key=keyjxzR8ckt48ealv')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);
