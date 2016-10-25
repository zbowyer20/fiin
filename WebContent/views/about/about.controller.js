(function() {
	'use strict';
	
	angular
		.module('pwapp')
		.controller('AboutController', AboutController);
	
	
	/** @ngInject */
	function AboutController($scope) {
		$scope.questions = [
		   {
			   id: 1,
			   question: "What does the FIIN hope to achieve?",
			   answer: "FIIN members recognise that there is a need to be vigilant in order to ensure the integrity of food supply chains and to protect the interests of the consumer. All companies are carrying out their own raw material testing and validation and currently have no awareness of the extent to which other companies are testing the same supply chains. Submitting information to the FIIN operated by an independent third party gives an indication of the level of scrutiny of supply chains for different categories of raw materials. This will enable FIIN members to judge the efficacy of their testing regimes, and target their resources using the intelligence and insight from the FIIN."
		   },
		   {
			   id: 2,
			   question: "How is the information submitted by companies anonymised?",
			   answer: "The legal firm, Eversheds LLP, carries out administration of the FIIN. Eversheds anonymise the information received from FIIN members and compile it into a report."
		   },
		   {
			   id: 3,
			   question: "How is membership determined?",
			   answer: "The concept of the Food Industry Intelligence Network arose as a response by an industry workshop to address the recommendations of the Elliot report. The founding members of the FIIN agreed a model for membership. Companies wishing to join the FIIN can contact the FIIN administrator or any of the Board members. There is a membership fee that is scaled to the size of the business and all members are expected to contribute data into the Network."
		   },
		   {
			   id: 4,
			   question: "Can any companies join?",
			   answer: "FIIN membership is restricted to food companies including retailers, manufacturers and food service companies that operate within the UK and Ireland. Membership is accepted from SMEs through to large businesses."
		   },
		   {
			   id: 5,
			   question: "How is the FIIN governed?",
			   answer: "FIIN has a governance board consisting of representatives of each sector of the food industry – retail, manufacture (brand and own label), food service – and the administrator. Professor Chris Elliot of Queen’s University, Belfast is a non-executive independent adviser."
		   },
		   {
			   id: 6,
			   question: "How does the FIIN comply with competition law?",
			   answer: "The FIIN operates within the competition law. There is a legal adviser present at all FIIN meetings and Board meetings to ensure that there are no breaches of competition law. No attributable data are shared amongst FIIN members. All information is anonymised by the administrator before distribution in report form to FIIN members. No information that is traceable back to source is included in the report."
		   },
		   {
			   id: 7,
			   question: "Does the FIIN share information with the government?",
			   answer: "Members of the FIIN Board have met with the Food Standards Agencies of England, Ireland and Scotland, including the National Food Crime Unit (NFCU). All agencies are aware of the FIIN and supportive of its purpose. The Board will continue to meet with the food agencies to determine how they can best work together in the interests of the consumer."
		   }
		];
		
		$scope.open = null;
		
		$scope.toggleQuestion = function(id) {
			$scope.open = $scope.open == id ? null : id;
		}
	}
	
})();
