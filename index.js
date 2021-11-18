let message = `These are the users:`;
for (const user of window.users) {
	message += `\nUserID: ${user.id}, UserName: ${user.name}, From: ${user.address.city}`;
}
alert(message);

let selectedUserID = Number(prompt("Enter your UserID:"));
while (selectedUserID < 1 || selectedUserID > 10 || isNaN(selectedUserID)) {
	selectedUserID = Number(prompt("This user doesn't exist, please type a number between 1 and 10"));
}
let selectedUser = window.users.find((user) => user.id === selectedUserID);

let userWantsTo = 1;
let i = 200;
while (userWantsTo !== 5) {
	if (userWantsTo === 1) {
		let selectedUserToDoList = window.todos.filter((todo) => todo.userId === selectedUserID);
		let message = `These are ${selectedUser.name}'s tasks: `;
		for (const todo of selectedUserToDoList) {
			message += `\n${todo.id}. ${todo.title}`;
		}
		alert(message);
	} else if (userWantsTo === 2) {
		i++;
		let taskName = prompt("What's the title of the task you want to add? ");
		let taskCompleted = window.confirm("Is the task done or not? Click Ok for Yes, Cancel for No.");
		window.todos.push({ userId: selectedUserID, id: i, title: taskName, completed: taskCompleted });
		alert("You successfully added a new task!");
	} else if (userWantsTo === 3) {
		let selectedTaskID = Number(prompt("Enter the taskID you want to delete:"));
		let selectedTask = window.todos.find((task) => task.id === selectedTaskID);
		while (selectedTask === undefined) {
			selectedTaskID = Number(prompt("The id you entered doesnt exist. Please try again!"));
			selectedTask = window.todos.find((task) => task.id === selectedTaskID);
		}
		let indexToDelete = window.todos.indexOf(selectedTask);
		window.todos.splice(indexToDelete, 1);
		alert("You successfully deleted a task!");
	} else if (userWantsTo === 4) {
		let selectedTaskID = Number(prompt("Enter the taskID you want to update:"));
		let selectedTask = window.todos.find((task) => task.id === selectedTaskID);
		while (selectedTask === undefined) {
			selectedTaskID = Number(prompt("The id you entered doesnt exist. Please try again!"));
			selectedTask = window.todos.find((task) => task.id === selectedTaskID);
		}
		let newTaskTitle = prompt("Enter the new title for the task:");
		let newTaskCompleted = window.confirm("Is the task done? Click Ok for Yes, Cancel for No.");
		let indexToUpdate = window.todos.indexOf(selectedTask);
		indexToUpdate = window.todos.indexOf(selectedTask);
		window.todos[indexToUpdate].title = newTaskTitle;
		window.todos[indexToUpdate].completed = newTaskCompleted;
		alert("You successfully updated a task!");
	}

	userWantsTo = Number(
		prompt(`What do you want to do next? Type:
        1 - Show me my tasks again
        2 - Add a new task
        3 - Delete a task
        4 - Update a task
        5 - End the program`)
	);
	while (userWantsTo < 1 || userWantsTo > 5 || isNaN(userWantsTo)) {
		userWantsTo = Number(
			prompt(`This action doesn't exist! Please type:
        1 - Show me my tasks again
        2 - Add a new task
        3 - Delete a task
        4 - Update a task
        5 - End the program`)
		);
	}
}
