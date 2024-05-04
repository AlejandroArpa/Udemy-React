import { useState } from "react"
import { AddCategory } from "./AddCategory";

export const GifApp = () => {
	
	const [categories, setCategories] = useState([ 'One Punch' ]);
	const onAddCategory = (newCategory) => {
		setCategories ([...categories, newCategory]);
	}
	
	return (
		<>
			{/* titulo */}
			<h1>GifApp</h1>
			<AddCategory AddCategory = {onAddCategory} />
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{
					categories.map( category => {return (<li key={category}>{category}</li>)})
				}
			</ol>
		</>
		)
}
