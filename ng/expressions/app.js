angular
  .module('app', [])
  .controller('MyController',
  function($scope, $parse) {
    $scope.$watch('expr', function(newVal, olVal, scope) {
      if(newVal !== oldVal) {
        // set up parseFun with the expression
        var parseFun = $parse(newVal);

        // Get the value of the parsed expression
        $scope.parsedValue = parseFun(scope);
      }
    });
  })

  .controller('NewController',
  function($scope, $interpolate) {
    $scope.$watch('emailBody', function(body) {
      if(body) {
        var template = $interpolate(body);
        $scope.previewText = template({to: $scope.to});
      }
    });
  });
