function ToDo ({idx, toDo, removeToDo}) {
	return (
		<li id={idx * 10} className="list-item">
			{toDo.content}
			<button
				id={idx}
				className="btn"
				title="Mark as Completed"
				onClick={() => {removeToDo(idx);}}>&#10003;</button>
		</li>
	);
}