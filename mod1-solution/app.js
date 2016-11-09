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
    if (numberOfItems > 3) {
      $scope.tooMuchOrEnjoy = "Too much!";
    } else {
      $scope.tooMuchOrEnjoy = "Enjoy!";
    }
  };

  function CountNotBlankValuesOnly(array) {
    var count = 0;
    array.forEach(function(entry) {
      if (entry != null && entry.replace(" ", "") != "") {
        count++;
      }
    });
    return count;
  }

}
})();
