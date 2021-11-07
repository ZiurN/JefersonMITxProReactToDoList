function ToDoList ({toDoList, removeToDo}) {
	return (
		<ul>
			{toDoList.map((toDo, idx) =>
				<ToDo
					idx={idx}
					toDo={toDo}
					key={idx}
					removeToDo={removeToDo}/>
			)}
		</ul>
	)
}