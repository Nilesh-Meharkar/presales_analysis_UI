'use strict';

/**
 * @ngdoc function
 * @name presalesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the presalesApp
 */
angular.module('presalesApp')
  .controller('MainCtrl', function ($scope, client, serviceApis) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.inputKeyPress = function(keyCode){
        if(keyCode === 13){
            searchQuery();
        }
    };

    $scope.search = function(){
        searchQuery();
    };

    function searchQuery(){
        client.search({index: 'presales', type: 'data', body: {
            query: {
                match: {
                    bhavikas_comments: $scope.searchString
                }
            }
        }}).then(function(resp) {
            var response = resp.hits.hits;
            var responseArray = [];
            angular.forEach(response, function(value, key) {
                responseArray.push(value._source);
            });
            $scope.searchResults = responseArray;
        });
    }
  });
