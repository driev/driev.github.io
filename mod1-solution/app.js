(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function () {
    var array = SplitLunchMenuIntoArray();
    var numberOfItems = CountNotBlankValuesOnly(array);
    if (numberOfItems > 3) {
      $scope.tooMuchOrEnjoy = "Too much!";
    } else if (numberOfItems < 1) {
      $scope.tooMuchOrEnjoy = "Please enter data first.";
    } else {
      $scope.tooMuchOrEnjoy = "Enjoy!";
    }
  };

  function SplitLunchMenuIntoArray() {
    var lunchMenu = $scope.lunchMenu;
    if (!lunchMenu) {
      return [];
    }
    return lunchMenu.split(',');
  }

  function CountNotBlankValuesOnly(array) {
    var count = 0;
    array.forEach(function(entry) {
      if (entry != null && entry.replace(/ /g, "") != "") {
        count++;
      }
    });
    return count;
  }

}
})();
