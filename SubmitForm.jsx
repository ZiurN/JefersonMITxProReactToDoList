function SubmitForm ({addToDo}) {
	const [newTodo, setNewTodo] = React.useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTodo) return;
		addToDo({content:newTodo , isComplete: false});
		setNewTodo('');
	}
	const handleOnChange = (e) => {
		setNewTodo(e.target.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder="Enter ToDo"
				value={newTodo}
				onChange={handleOnChange}
			/>
			<button className="btn">Add</button>
		</form>
	);
}