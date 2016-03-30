'use strict';

/**
 * @ngdoc overview
 * @name easterEggsApp
 * @description
 * # easterEggsApp
 *
 * Main module of the application.
 */
angular
  .module('easterEggsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.sucessMessage = "";
    $scope.$parent.activeView = "main";

    $scope.isfound = function(message) {
        $scope.$apply(function() {
            $scope.sucessMessage = message;
        });
    }
  }]);

'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
      $scope.$parent.activeView = "about";
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name easterEggsApp.directive:eggDirective
 * @description
 * # eggDirective
 */
angular.module('easterEggsApp')
  .directive('eggDirective', function () {
    return {
      scope: {
        foundcallback: "&"
      },
      link: function postLink(scope, element, attrs) {
        var getRandomInt = function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var images = ["images/grass.jpg",
                      "images/grass1.jpg",
                      "images/grass2.jpg",
                      "images/grass3.jpg",
                      "images/grass.jpg"], clearGrassCount = getRandomInt(1, images.length-1);

        element.append('<img src="images/grassEgg.jpg" class="eggImage"/>');

        for(var i = 0 ; i <= clearGrassCount ; i++) {

           var imageElement = angular.element('<img src="' + images.shift() + '" class="eggImage"/>');
           if (i === 0) {
             imageElement.attr("data-last-empty", true);
           }

           imageElement.one("click", function () {
             this.one("animationend webkitAnimationEnd oAnimationEnd", function() {
               var isEmtpy = this.attr("data-last-empty");
               this.remove();
               if(isEmtpy) {
                 var msgHtml = [
                   '<ul class="media-list">',
                   '<li class="media">',
                   '<div class="media-left text-nowrap">',
                   '<br/><br/>',
                   'Браво! Ти спечели предложение за работа от ',
                   '</div>',
                   '<div class="media-body">',
                   '<img class="media-object" src="images/logo.png" alt="Questers">',
                   '</div>',
                   '</li>',
                   '</ul>',
                   'Защо не изпратиш едно cv на <a href="mailto:careers@questersgroup.com">careers@questersgroup.com</a> ?'
                 ].join("\n");
                 scope.foundcallback({msg: msgHtml});
               } else {
                 scope.foundcallback({msg: 'След ровене в тревата не откри нищо. Опитай отново.'});
               }
             }.bind(this));
            this.addClass("eggImageAnimate");
          }.bind(imageElement));

           element.append(imageElement);
        }
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name easterEggsApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the easterEggsApp
 */
angular.module('easterEggsApp')
  .controller('RootCtrl', ["$scope", function ($scope) {
      $scope.activeView = "";
  }]);

angular.module('easterEggsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>Хм. Какво трябва да пише тук? Ако ти харесват такива неща можеш да ме добавиш в skype. skype id-то ми е <b>gonaumov</b>.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h3> Наближава великден. Защо не поровиш из тревата? Може и да излезе нещо. Просто кликай от горе. Така я преравяш. </h3> </div> <div class=\"row marketing\"> <div data-ng-bind-html=\"sucessMessage\" class=\"sucessMessageHolder\"></div> <div data-egg-directive data-foundcallback=\"isfound(msg)\"></div> </div>"
  );

}]);
