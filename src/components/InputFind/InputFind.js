import React from "react";

function InputFind({findPhone}) {

    function handleSubmitFind(e){
     e.preventDefault()
    }

    return (  
        <form onSubmit={handleSubmitFind}>
            <input type="search" placeholder='Поиск по городу' onChange={findPhone}/>
        </form>
    );
}

export default InputFind;