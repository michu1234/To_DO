var taskApp = new Vue({
	el: "#todo-app",
	data: {
	tasks: [
		{name: "Take a picture of my dinner", done: false},
		{name: "Buy new typewriter", done: false},
		{name: "Grow mustache", done: false}
	],
},
	methods: {
		addTask: function(e){
		e.preventDefault();
		this.tasks.push({
			name: this.tasks.name,
			done: false
		});
		},
		deleteTask: function(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		},
	}
})
