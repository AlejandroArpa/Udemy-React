import React from 'react'
import { useForm } from './useForm'

const TodoAdd = ({ onNewTodo }) => {

	const {description, onInputChange, onResetForm} = useForm({
		description: ''
	})

	const onFormSubmit = ( event ) => {
		event.preventDefault();
		if ( description.length <= 1 ) return;

		const newTodo = {
			id: new Date().getTime(),
			description,
			done: false,
		}

		onNewTodo(newTodo);
		onResetForm();
	}

	return (
		<form onSubmit={ onFormSubmit }>
			<input type="text" name='description' value= { description } onChange={ onInputChange } className='form-control' placeholder='Ingrese su descripcion aqui' id="" />
			<button 
				type='submit' 
				className='btn- btn-outline-primary mt-1' 
				>
					Agregar
			</button>
		</form>
	)
}

export default TodoAdd
