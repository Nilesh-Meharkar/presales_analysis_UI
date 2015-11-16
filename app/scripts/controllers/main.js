'use strict';

/**
 * @ngdoc function
 * @name presalesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the presalesApp
 */
angular.module('presalesApp')
  .controller('MainCtrl', function ($scope, serviceApis) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var params = {};
    params.question = "what"; //search_query;
    params.unique_id = "ddd";//$rootScope.globalVar.company_unique_id;

    var serviceObj = serviceApis.search_query();
    serviceObj.search(params, function(successresponse){
      var searchResults = successresponse.related_questions.hits;
      alert("Success");
    }, function(errorresponse){

      alert("eerr");

      console.log("Error in searchResults get: ");
      console.log(errorresponse);
    });



  });
