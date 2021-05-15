import { React, useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    //tendremos el input value actualizado con el valor que la ultima persona escribio

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
//cuando la persona de ENTER o 'submit' no se refrescara la pagina
        e.preventDefault(); 

        if( inputValue.trim().length > 0 ) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }     
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}