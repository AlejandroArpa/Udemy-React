import { useState } from "react"


export const AddCategory = ({ onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( {target} ) =>{
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        if( inputValue.trim() <= 1 ) return;
        onNewCategory (inputValue);
        setInputValue('')
    }

    return (
        <form action="" onSubmit={ ( event ) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar gifts" 
            onChange={ (event) => onInputChange(event) }
            value={ inputValue }
            />
        </form>
    )
}