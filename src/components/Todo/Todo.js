import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../redux/todo/todoActions';
import { TodoItem } from '../TodoItem/TodoItem';

export const Todo = () => {
	const TodoInputRef = useRef();
	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todo);

	const getTodosFetch = () => {
		axios
			.get('http://localhost:8080/todo')
			.then((data) => {
				dispatch(getTodos(data));
			})
			.catch((err) => console.log(err));
	};

	const hendelSubmit = () => {
		axios
			.post('http://localhost:8080/todo', {
				title: TodoInputRef.current.value,
				isComplete: false,
			})
			.then((data) => {
				TodoInputRef.current.value = '';
				getTodosFetch();
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getTodosFetch();
	}, []);

	const deleteTodo = (id) => {
		axios
			.delete(`http://localhost:8080/todo/${id}`)
			.then((data) => {
				getTodosFetch();
			})
			.catch((error) => console.log(error));
	};
	const editTodo = (id) => {
		const changeText = prompt('Edit Todo');
		axios
			.put(`http://localhost:8080/todo/${id}`, {
				title: changeText,
				isComplete: false,
			})
			.then((data) => {
				getTodosFetch();
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<div className="container">
				<h2 className="text-center fs-1 mt-5">Todo App</h2>

				<form
					className="mb-5"
					onSubmit={(evt) => {
						evt.preventDefault();
						hendelSubmit();
					}}
				>
					<div class="input-group mb-3 mt-4 w-50 mx-auto">
						<input
							type="text"
							ref={TodoInputRef}
							class="form-control"
							placeholder="Enter todo"
							required
						/>
						<button className="btn btn-success" type="submit">
							Add
						</button>
					</div>
				</form>

				<ul className="list-unstyled mb-0">
					{todo.todo?.data?.map((item) => (
						<TodoItem
							obj={item}
							deleteFn={deleteTodo}
							editFn={editTodo}
						/>
					))}
				</ul>
			</div>
		</>
	);
};
