app.controller('TransportController', function($scope, $interval, NotesService, BpmService) {

	$scope.currentPos = 0;

	let increment = function() {
		$scope.currentPos++;
    	if ($scope.currentPos > 7) $scope.currentPos = 0;
	}

	let checkSound = function() {
    	NotesService.checkSound($scope.currentPos);
    };

    $scope.$on('tick', function() {
    	increment();
    	checkSound();
    });

});