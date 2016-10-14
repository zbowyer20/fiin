(function() {
	'use strict';
	
	angular
		.module('pwapp')
		.controller('MembersController', MembersController);
	
	
	/** @ngInject */
	function MembersController($scope) {
		$scope.founders = [
		    {
		    	id: "2_sisters",
		    	name: "2 Sisters",
		    	img: "images/logos/2_sisters.jpg"
		    },
		    {
		    	id: "ABP",
		    	name: "ABP Beef",
		    	img: "images/logos/abp.png"
		    },
		    {
		    	id: "arla",
		    	name: "Arla Foods",
		    	img: "images/logos/arla.jpg"
		    },
		    {
		    	id: "bakkavor",
		    	name: "Bakkavor",
		    	img: "images/logos/bakkavor.jpeg"
		    },
		    {
		    	id: "brakes",
		    	name: "Brakes",
		    	img: "images/logos/brakes.png"
		    },
		    {
		    	id: "compass",
		    	name: "Compass Group",
		    	img: "images/logos/compass.png"
		    },
		    {
		    	id: "cooperative",
		    	name: "The Co-operative",
		    	img: "images/logos/cooperative.jpg"
		    },
		    {
		    	id: "premier",
		    	name: "Premier Foods",
		    	img: "images/logos/premier_foods.png"
		    },
		    {
		    	id: "waitrose",
		    	name: "Waitrose",
		    	img: "images/logos/waitrose.jpg"
		    },
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
		    	id: "aldi",
		    	name: "Aldi",
		    	img: "images/logos/aldi.png"
		    },
		    {
		    	id: "samworth_brothers",
		    	name: "Samworth Brothers",
		    	img: "images/logos/samworth_brothers.png"
		    },
		    {
		    	id: "greencore",
		    	name: "Greencore",
		    	img: "images/logos/greencore.jpeg"
		    },
		    {
		    	id: "morrisons",
		    	name: "Morrisons",
		    	img: "images/logos/morrisons.jpg"
		    },
		    {
		    	id: "asda",
		    	name: "ASDA",
		    	img: "images/logos/asda.png"
		    },
		    {
		    	id: "kerry_foods",
		    	name: "Kerry Foods",
		    	img: "images/logos/kerry.jpg"
		    },
		    {
		    	id: "booker",
		    	name: "Booker",
		    	img: "images/logos/booker.jpg"
		    },
		    {
		    	id: "youngs",
		    	name: "Youngs",
		    	img: "images/logos/youngs.jpg"
		    },
		    {
		    	id: "moy_park",
		    	name: "Moy Park",
		    	img: "images/logos/moy_park.jpg"
		    }
		];
		$scope.members = [];
	}
	
})();
