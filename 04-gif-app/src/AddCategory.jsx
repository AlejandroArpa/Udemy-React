import { useState } from "react"


export const AddCategory = (props) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( {target} ) =>{
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        props.AddCategory (inputValue);
        
    }

    return (
        <form action="" onSubmit={ ( event ) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar gifts" 
            onChange={ (event) => onInputChange(event) }/>
        </form>
    )
}