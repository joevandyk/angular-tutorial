(function() {

  window.PhoneListCtrl = function($scope) {
    $scope.phones = [
      {
        name: "Nexus",
        snippet: "Blah",
        age: 2
      }, {
        name: "Moto",
        snippet: "moto snippet",
        age: 1
      }, {
        name: "iPhone",
        snippet: "iphone nippet",
        age: 3
      }
    ];
    return $scope.hello = "Hello World";
  };

}).call(this);
