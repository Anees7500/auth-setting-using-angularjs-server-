(function() {
    
    angular
    .module('app', ['auth0.auth0', 'ui.router'])
.config(config);
config.$inject = [
    '$stateProvider', '$locationProvider', '$urlRouterProvider', 'angularAuth0Provider'
]

    function config($stateProvider, $locationProvider, $urlRouterProvider, angularAuth0Provider){
        $stateProvider.state('home',
        {
            url: '/',
            controller: 'HomeController',
            templateUrl:'app/home/home.html',
            controllerAs:'vm'
        })
        .state('callback', {
            url: '/callback',
            controller:'CallbackController',
            templateUrl:'app/callback/callback.html',
            controller: 'vm'
        })
         .state('profile', {
             url: '/profile',
             controller: 'ProfileController',
             templateUrl: 'app/profile/profile.html',
             controller: 'vm'
         });

         angularAuth0Provider.init({
             clientID: 'GwqTNKjEdF2kJAr5OcpRFxdSH0MSyqEP',
             domain: 'dev-hctky86l.auth0.com',
             responseType:'token id_token',
             redirectUrl:'http://localhost:3000/callback',
             scope:'openid profile'
         });

        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    }
})();