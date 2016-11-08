(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var numberOfItems = 0;

  $scope.checkIfTooMuch = function () {
    var commaSeparatedList = $scope.lunchMenu;
    var array = commaSeparatedList.split(',');
    numberOfItems = CountNotBlankValuesOnly(array);
    console.log("### = " + numberOfItems);
  };

  $scope.tooMuchOrEnjoy = function (numberOfItems) {
    if (numberOfItems > 3) {
      return "Too much!";
    } else {
      return "Enjoy!";
    }
  };

  function CountNotBlankValuesOnly(array) {
    var count = 0;
    array.forEach(function(entry) {
      if (entry) {
        count++;
      }
    });
    return count;
  }

}
})();
