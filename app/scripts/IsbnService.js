/**
*
* @name IsbnService.js
* @description This file includes a service that connects to ISBNdb API.
* @author Derrick Roccka
*
**/

'use strict';

(function(){
	//dependencies to be injected
	var deps = ['$q','$http'];
	/**
	*
	* @name IsbnService
	* @description Function that contains all the functionalities of IsbnService factory
	* @param {Object} $q
	* @param {Object} $http
	**/
	function IsbnService($q, $http){

		return{

			books: {
				get: {
					/**
					*
					* @name get
					* @description gets a book from ISBNdb by ISBN code
					* @param {String} ISBN	- ISBN of the scanned barcode
					**/
					fromISBNdb: function(ISBN){
						var deferred = $q.defer();
						$http.get('http://isbndb.com/api/v2/json/CY94LBXO/book/'+ISBN).success(function(response) {
							console.log('OBJETO RESPUESTA books.get',response);
							deferred.resolve(response);
						});
						return deferred.promise;
					},
					fromOutpan: function(ISBN){
						var deferred = $q.defer();
						$http.get('https://www.outpan.com/api/get-product.php?apikey=69d3949bdda2c20d258697eebdba723f&barcode='+ISBN).success(function(response) {
							console.log('OBJETO RESPUESTA books.get',response);
							deferred.resolve(response);
						});
						return deferred.promise;
					}
				}
			}
		};
	}
	IsbnService.$inject = deps;
	//Attatching ControllerHome function into the app
	angular
		.module('isbnStore')
		.factory('IsbnService',IsbnService);

})();