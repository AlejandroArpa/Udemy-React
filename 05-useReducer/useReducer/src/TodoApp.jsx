import React from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Recolectar la piedra del alma',
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		description: 'Recolectar la piedra del tiempo',
		done: false,
	},
]

const TodoApp = () => {
	
	const [ todos, dispatch ] = useReducer( todoReducer, initialState );

	const onNewTodo = ( todo ) =>{
		console.log( todo );

		
	}

	return (
	<>
		<h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
		<hr />

		<div className='row'>
			<div className='col-7'>
				<TodoList todos={ todos } />
			</div>

			<div className='col-5'>
				<h4>Agregar Todo</h4>
				<hr />
				<TodoAdd onNewTodo={ onNewTodo }/>
			</div>
		</div>

	</>
  )
}

export default TodoApp
