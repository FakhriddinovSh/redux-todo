import React from 'react';

export const TodoItem = ({ obj, deleteFn, editFn }) => {
	return (
		<>
			<li className="mb-3 w-50 mx-auto d-flex align-items-center justify-content-between shadow p-3 rounded-3">
				<h3>{obj.title}</h3>
				<div>
					<button
						className="btn btn-warning me-3"
						onClick={() => {
							editFn(obj.id);
						}}
					>
						EDIT
					</button>
					<button
						className="btn btn-danger"
						onClick={() => {
							deleteFn(obj.id);
						}}
					>
						DELETE
					</button>
				</div>
			</li>
		</>
	);
};
