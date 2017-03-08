(function () {
    'use strict';

    function AppConfig($mdThemingProvider) {
        $mdThemingProvider.enableBrowserColor({
            theme: 'default', // Default is 'default'
            palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
            hue: '800' // Default is '800'
        });
    }

    function Run() {
    }

    angular.module('mony', ['ts.controllers', 'ngMaterial'])
        .config(AppConfig)
        .run(Run);

    Run.$inject = [];
    AppConfig.$inject = ['$mdThemingProvider'];
})();
