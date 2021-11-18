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
		let taskCompleted = window.confirm("Is the task done or not? Click Ok for Yes, Cancel for No");
		window.todos.push({ userId: selectedUserID, id: i, title: taskName, completed: taskCompleted });
	}
	userWantsTo = Number(
		prompt(`What do you want to do next? Type:
        1 - Show me my tasks again
        2 - Add a new task
        3 - Delete a task
        4 - update a task
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
