import React from 'react'


const TodoItem = ({ todo, onRmClic, onToggleTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
			onClick={ () => onToggleTodo( todo ) }
			>{ todo.description }</span>
			<button className='btn btn-danger' onClick={ ( event ) => onRmClic (todo) }>Borrar</button>		

		</li>
	)
}

export default TodoItem
