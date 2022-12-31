import { useState } from "react"


export const AddCategories = ({  onNewCategory }) => {
    

    const [inputValue, setinputValue] = useState("");

    const onInputChange = ({ target }) => {
    
        
        setinputValue( target.value ); //lo que escribo naruto
    }
  
    const onSubmit = (event) => {
        event.preventDefault();
       if (inputValue.trim().length <= 1 ) return;
        // onAddCategory(categories =>[inputValue, ...categories ] );
        onNewCategory(inputValue.trim())
        setinputValue('');
    }
 
    return (

            <form onSubmit={ onSubmit   }>
            <input
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
    
  )
}
