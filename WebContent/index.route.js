(function () {
    'use strict';

    angular
            .module('pwapp')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                .state('members', {
                	url: '/members',
                	templateUrl: 'views/members/members.html',
                	controller: 'MembersController',
                	controllerAs: 'members'
                })
                .state('about', {
                	url: '/about.html',
                	templateUrl: 'views/about/about.html',
                	controller: 'AboutController',
                	controllerAs: 'about'
                })
                .state('board', {
                	url: '/board.html',
                	templateUrl: 'views/board/board.html'
                })
                .state('contact', {
                	url: '/contact',
                	templateUrl: 'views/contact/contact.html',
                	controller: 'ContactController',
                	controllerAs: 'contact'
                })
        $urlRouterProvider.otherwise('/home');
    }

})();
