var statesApp = angular.module('statesApp', []);



// mainController
statesApp.controller('mainController', ['$scope', 'statesService', function($scope, $statesService) {

	// Get array of states from statesService
	$scope.stateData = $statesService.getStates();

	$scope.statesLeftCounter = 50;

	$scope.checkState = function(userInput, remainingStatesArray) {
		
		// Loop over each remaining state and compare its string to the user input
		for(var i = 0; i < $scope.stateData.length; i++)
		{
			if( $scope.userInput == $scope.stateData[i].name )
			{
				// Remove from states array
				$scope.stateData.pop($scope.stateData[i].name);
				console.log('length: ' + $scope.stateData.length);

				// Decrement counter
				$scope.statesLeftCounter--;

				// Show state to user: remove 'not-guessed', add 'guessed' class


				// Reset user input
				$scope.userInput = '';
			}
		}

		// Reset user input
		$scope.userInput = '';
	}
}]);