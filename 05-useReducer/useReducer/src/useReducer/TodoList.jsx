

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onRmClic, onToggleTodo }) => {
  return (
	<ul className='list-group'>
		{
			todos.map( todo => (
				<TodoItem  key={ todo.id } todo= { todo } onRmClic= { onRmClic } onToggleTodo= { onToggleTodo } />
			) )
		}
	</ul>
  )
}

export default TodoList
