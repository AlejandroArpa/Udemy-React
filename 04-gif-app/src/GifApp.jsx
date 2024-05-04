import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifApp = () => {
	
	const [categories, setCategories] = useState([ 'One Punch' ]);
	
	const onAddCategory = (newCategory) => {
		if( categories.includes(newCategory) )return
		setCategories ([...categories, newCategory]);
	}
	
	return (
		<>
			{/* titulo */}
			<h1>GifApp</h1>
			<AddCategory 
				onNewCategory = { event => onAddCategory(event) }
			/>
			{
				categories.map( category =>  (
					<GifGrid key={ category } category={ category } />
				))
			}
		</>
		)
}
