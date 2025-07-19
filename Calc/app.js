// var app = angular.module('calculatorApp', []);

// app.controller('CalculatorController', function ($scope) {
//   $scope.num1 = 0;
//   $scope.num2 = 0;
//   $scope.result = undefined;

//   $scope.add = function () {
//     $scope.result = $scope.num1 + $scope.num2;
//   };

//   $scope.subtract = function () {
//     $scope.result = $scope.num1 - $scope.num2;
//   };

//   $scope.multiply = function () {
//     $scope.result = $scope.num1 * $scope.num2;
//   };

//   $scope.divide = function () {
//     if ($scope.num2 == 0) {
//       $scope.result = "Cannot divide by zero!";
//     } else {
//       $scope.result = $scope.num1 / $scope.num2;
//     }
//   };
// });


var app = angular.module('calculatorApp', []);

app.controller('CalculatorController', function ($scope) {
  $scope.result = undefined;
  $scope.isError = false;

  $scope.clear = function () {
    $scope.num1 = null;
    $scope.num2 = null;
    $scope.result = undefined;
    $scope.isError = false;
  };

  $scope.add = function () {
    calculate((a, b) => a + b);
  };

  $scope.subtract = function () {
    calculate((a, b) => a - b);
  };

  $scope.multiply = function () {
    calculate((a, b) => a * b);
  };

  $scope.divide = function () {
    if ($scope.num2 === 0) {
      $scope.result = "Cannot divide by zero!";
      $scope.isError = true;
    } else {
      calculate((a, b) => a / b);
    }
  };

  $scope.modulus = function () {
    if ($scope.num2 === 0) {
      $scope.result = "Cannot divide by zero!";
      $scope.isError = true;
    } else {
      calculate((a, b) => a % b);
    }
  };

  $scope.square = function () {
    if ($scope.num1 != null && $scope.num2 == null) {
      $scope.result = $scope.num1 * $scope.num1;
      $scope.isError = false;
    } else if ($scope.num2 != null && $scope.num1 == null) {
      $scope.result = $scope.num2 * $scope.num2;
      $scope.isError = false;
    } else {
      $scope.result = "Enter only one number to square!";
      $scope.isError = true;
    }
  };

  function calculate(operation) {
    if ($scope.num1 != null && $scope.num2 != null) {
      $scope.result = operation($scope.num1, $scope.num2);
      $scope.isError = false;
    } else {
      $scope.result = "Please enter both numbers!";
      $scope.isError = true;
    }
  }
});
