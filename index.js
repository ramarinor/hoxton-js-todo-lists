let message = `These are the users:`;
for (const user of window.users) {
	message += `\nUserID: ${user.id}, UserName: ${user.name}, From: ${user.address.city}`;
}
alert(message);

let selectedUserID = Number(prompt("Enter your UserID:"));
while (selectedUserID < 1 || selectedUserID > 10) {
	selectedUserID = Number(prompt("This user doesn't exist, please type a number between 1 and 10"));
}
let selectedUser = window.users.find((user) => user.id === selectedUserID);
let selectedUserToDoList = window.todos.filter((todo) => todo.userId === selectedUserID);

message = `These are ${selectedUser.name}'s tasks: `;
for (const todo of selectedUserToDoList) {
	message += `\n${todo.id}. ${todo.title}`;
}

alert(message);
