angular
  .module('app', ['emailParser'])
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

  .controller('NewController', ['$scope', 'EmailParser',
  function($scope, EmailParser) {
    $scope.$watch('emailBody', function(body) {
      if(body) {
        $scope.previewText = EmailParser.parse(body, {
          to: $scope.to
        });
        
      }
    });
  }]);
