(function () {
    'use strict';

    function HomeCtrl() {
        var self = this;
    }


    // create the module and assign controllers
    angular.module('ts.controllers', [])
        .controller('HomeCtrl', HomeCtrl)

    // inject dependencies to controllers
    HomeCtrl.$inject = [];
})();