function App () {
	const [toDoList, setToDoList] = React.useState(data);
	const addToDo = (newTodo) => {
		const newToDos = [...toDoList, newTodo];
		setToDoList(newToDos);
	}
	const removeToDo = (idx) => {
		const temp = [...toDoList];
		setToDoList(temp.splice(idx, 1));
		setToDoList(temp);
	}
	return (
		<div className="container">
			<SubmitForm addToDo={addToDo}/>
			<ToDoList toDoList={toDoList} removeToDo={removeToDo}/>
		</div>
	);
}
ReactDOM.render(<App/>, document.getElementById('root'));