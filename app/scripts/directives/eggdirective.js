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
