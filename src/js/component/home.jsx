import React, { useState } from "react";

const Home = () => {
	const [newTodos, setNewTodos] = useState("")
	const [todos, setTodos] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"])

	const actValueNewTodos = (event) => {
		setNewTodos(event.target.value)
	}

	const addNewTodos = (event) => {
		event.preventDefault()
		setTodos([...todos, newTodos])
		setNewTodos("")
	}

	const deleteElements = (index) => {
		/*const newArray = []
		for (let i = 0; i < todos.length; i++) {
			if (index !== i) newArray.push(todos[i])*/
		const arrayModified = todos.filter((item, i) => i !== index)
		setTodos(arrayModified)
	}
	/*setTodos(newArray)*/

	return (
		<div className="w-50 m-auto">
			<form onSubmit={addNewTodos}>
				<div className="mb-3">
					<div className="header text-center mb-3 fs-1 ">
						todos
					</div>
					<input className="form-control" aria-describedby="emailHelp" value={newTodos} onChange={actValueNewTodos} />
				</div>
				<button type="submit" className="btn btn-outline-light mb-3">Submit</button>
			</form>
			<ul>
				{
					todos.map((item, index) => {
						return (<li className="lista" key={index}>{item} <button className="btn text-danger x" onClick={() => deleteElements(index)}><i className="fa-solid fa-x"></i></button></li>)
					})
				}
			</ul>
			{todos.length === 0 ? <span className="tasks">No tasks, add a task</span> : <span className="tasks">{todos.length} item left</span>}
		</div>
	);
};

export default Home;
