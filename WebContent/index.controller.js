(function() {
	'use strict';
	
	angular
		.module('pwapp')
		.controller('FIINController', FIINController);
	
	
	/** @ngInject */
	function FIINController($scope) {
		$scope.navigation = [
		   {
			   name: "Home",
			   state: "home"
		   },
		   {
			   name: "Members",
			   state: "members"
		   },
		   {
			   name: "About Us",
			   state: "about"
		   },
		   {
			   name: "Board",
			   state: "board"
		   },
		   {
			   name: "Contact Us",
			   state: "contact"
		   }
		];
	}
	
})();
