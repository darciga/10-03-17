(function () {
    'use strict';

    function HomeCtrl() {
        var self = this;
        self.title = 'Mi Monica';
        self.subheadCard = 'Bienvenida a mi vida.';
        self.headlineCard = '¡Hola bonita!';
        self.card1 = 'Estoy muy contento de estar contigo, ' + 
                'que me permitas conocerte, descubrir en ti esa ternura al abrazarme, ' + 
                'esa luz que irradias cuando sonríes, ' + 
                ' esa calma que me transmites cuando me miras. ' + 
                ' Y más aún el sabor de tus besos que con cada uno ' + 
                ' de ellos me pones a temblar y  ' + 
                'aceleras a mi corazón a velocidades relativistas ' + 
                ' al punto de detener el tiempo mi chaparrita hermosa.';
        self.card2 = 'Son muchas las sensaciones que tengo cuando estoy a tu lado mi novia, mi chaparrita, mi china, mi Monica, se bienvenida' +
                ' a mi vida, bienvenida a mis sueños, que agradable es encontrarte, hace mucho que te espero, bienvenida a' +
                ' mi alma, eres tu lo que más quiero, con los ojos cerrados y con los brazos abiertos desbordado de ilusiones ' +
                ' para compartir los días, así es como te lo digo, para siempre bienvenida.';
        self.card3 = 'Cariñoso y detallista porque tu te lo mereces, me preocupo por llenarte el corazón de cosas bellas, arroparte ' +
                'en un segundo con caricias que sean dulces, bienvenida seas tu, has llegado justo a tiempo.';
        self.card4 = 'Chaparrita espero que te haya gustado, es un fragmento de una canción, ' +
                ' se llama Bienvenida de Horacio Palencia. ' + 
                'Tambien "abajito" está el enlace hacia el código fuente de esto que estas leyendo, checalo y corre la aplicacíón. Si tienes duda de algo dime.' +
                'Te quieroooo muchooo chaparrita';

    }


    // create the module and assign controllers
    angular.module('ts.controllers', [])
        .controller('HomeCtrl', HomeCtrl)

    // inject dependencies to controllers
    HomeCtrl.$inject = [];
})();