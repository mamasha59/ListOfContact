import React from "react";

function InputFind({findPhone}) {

    const [valueInput, setValueInput] = React.useState('');

    function handleSubmitFind(e){
     e.preventDefault()
     findPhone(valueInput)
    }

    function handleFindValue (e) {
        setValueInput(e.currentTarget.value)
      }
    return (  
        <form onSubmit={handleSubmitFind}>
            <input type="search" placeholder='Поиск по контактам' onChange={handleFindValue}/>
        </form>
    );
}

export default InputFind;