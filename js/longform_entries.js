// service to fetch 'entries' from json data (via airtable API)

var Airtable = require('airtable');


// new 

var table_reads = new Airtable({apiKey: 'keyjxzR8ckt48ealv'}).base('app5lKJ3fALLBkCtj');

table_reads('reads').select({
    view: "all",
    field: "read_date", 
    direction: "desc"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

var entries = table_reads

console.log(entries)


//
//// new 
//app_longform.factory('entries', ['$http', function($http) {
//  return $http.get('https://api.airtable.com/v0/app5lKJ3fALLBkCtj/reads?api_key=keyjxzR8ckt48ealv&sort%5B0%5D%5Bfield%5D=read_date&sort%5B0%5D%5Bdirection%5D=desc')
//        .then(function(response) {
//          // return data of the GET response
//          return response.data;
//        })
//}]);
//
//// oldreads
//app_longform.factory('oldentries', ['$http', function($http) {
//  return $http.get('https://api.airtable.com/v0/app5lKJ3fALLBkCtj/oldreads?api_key=keyjxzR8ckt48ealv')
//        .then(function(response) {
//          // return data of the GET response
//          return response.data;
//        })
//}]);