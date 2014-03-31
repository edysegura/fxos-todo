/*
 * TODO List Service
 */
todoListApp.factory('TodoListServices', function() {
	var 
		tasks = [],
		taskService = {};

	taskService.add = function(task) {
		tasks.push(task);
		taskService.save(tasks);
	}

	taskService.getList = function() {
		var jsonText = window.localStorage.getItem('tasks');
		if(jsonText) {
			tasks = JSON.parse(jsonText);
		}
		return tasks;
	}

	taskService.save = function(remainingTasks) {
		if(remainingTasks) {
			tasks = remainingTasks;
		}
		window.localStorage.setItem('tasks', JSON.stringify(tasks));	
	}
	
	return taskService;
});