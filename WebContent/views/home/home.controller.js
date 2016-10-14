(function() {
	'use strict';
	
	angular
		.module('pwapp')
		.controller('HomeController', HomeController);
	
	
	/** @ngInject */
	function HomeController($scope, $anchorScroll) {
		$scope.participants = [
   		    {
   		    	id: "mns",
   		    	name: "Marks & Spencer",
   		    	img: "images/logos/mns.jpg"
   		    },
   		    {
   		    	id: "tesco",
   		    	name: "Tesco",
   		    	img: "images/logos/tesco.jpg"
   		    },
   		    {
   		    	id: "sainsburys",
   		    	name: "Sainsburys",
   		    	img: "images/logos/sainsburys.jpg"
   		    },
   		    {
   		    	id: "morrisons",
   		    	name: "Morrisons",
   		    	img: "images/logos/morrisons.png"
   		    },
   		    {
   		    	id: "farmfoods",
   		    	name: "Farmfoods",
   		    	img: "images/logos/farmfoods.gif"
   		    },
   		    {
   		    	id: "iceland",
   		    	name: "Iceland",
   		    	img: "images/logos/iceland.png"
   		    },
   		    {
   		    	id: "aldi",
   		    	name: "Aldi",
   		    	img: "images/logos/aldi.png"
   		    }
   		];	
		
		$scope.scrollTo = function(destination) {
			console.log(destination);
			$location.hash(destination);
			$anchorScroll();
		}
	}
	
})();
