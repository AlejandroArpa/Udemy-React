
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { useTodo } from '../helpers/useTodo';



const TodoApp = () => {
	
	const {todos, onNewTodo, onRmClic, onToggleTodo  } = useTodo();

	return (
	<>
		<h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
		<hr />
		<div className='row'>
			<div className='col-7'>
				<TodoList todos={ todos } onRmClic={ onRmClic } onToggleTodo= { onToggleTodo } />
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
