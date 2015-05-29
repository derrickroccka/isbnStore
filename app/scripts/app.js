'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('isbnStore', ['ionic','ngCordova','firebase'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.controller('ExampleController', function($scope, $cordovaBarcodeScanner, $firebaseObject, IsbnService) {

	$scope.scanBarcode = function(from) {
		$cordovaBarcodeScanner.scan().then(function(imageData) {

			IsbnService.books.get[from](imageData.text).then(function(book){
				window.alert(JSON.stringify(book));
			});
			console.log('Barcode Format -> ' + imageData.format);
			console.log('Cancelled -> ' + imageData.cancelled);
		}, function(error) {
			console.log('An error happened -> ' + error);
		});
	};

});
