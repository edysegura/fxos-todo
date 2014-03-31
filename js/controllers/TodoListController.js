/*
 * Todo List Controller
 */
todoListApp.controller('TodoListController', function($scope, TodoListServices) {

	$scope.tasks = TodoListServices.getList();

	$scope.addTask = function() {
		if($scope.description) {
			var task = {};
			task.done = false;
			task.description = $scope.description;
			TodoListServices.add(task);
			$scope.description = "";
		}
	}

	$scope.update = function() {
		TodoListServices.save();
	}

	$scope.remaining = function() {
		var count = 0;
		$scope.tasks.forEach(function(task) {
			if(!task.done) {
				count++;
			}
		}); 
		return count;
	}

	$scope.archive = function() {
		var remainingTasks = [];

		$scope.tasks.forEach(function(task) {
			if(!task.done) {
				remainingTasks.push(task);
			}
		});

		TodoListServices.save(remainingTasks);
		$scope.tasks = TodoListServices.getList();
	}

});