angular.module('easterEggsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>Хм. Какво трябва да пише тук? Ако ти харесват такива неща можеш да ме добавиш в skype. skype id-то ми е <b>gonaumov</b>.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h3> Наближава великден. Защо не поровиш из тревата? Може и да излезе нещо. Просто кликай от горе. Така я преравяш. </h3> </div> <div class=\"row marketing\"> <div data-ng-bind-html=\"sucessMessage\" class=\"sucessMessageHolder\"></div> <div data-egg-directive data-foundcallback=\"isfound(msg)\"></div> </div>"
  );

}]);
