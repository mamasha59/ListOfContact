import './Pnones.css';
import { FcFullTrash } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import React from 'react';

function Pnones({contact,number,handleDelete,id}) {

    const [newUser, setNewUser] = React.useState('');

    function handleNewChange (e) {
        setNewUser(e.currentTarget.value)
    }

   function handeSubmitNew (e) {
    e.preventDefault()
    }

   function deleteCOntact () {
    handleDelete(id)
   }

    return (
        <li key={contact.id} className="phone-list">
         <div className='phone-list__container'>

             <form className='phone__form' onSubmit={handeSubmitNew}>
                <div className='phone-list__user-block'>
                    <input
                     className="phone-list__name phone-input-block" 
                     type='text' 
                     defaultValue={contact} 
                     onChange={handleNewChange}
                     minLength="2"
                     maxLength="11"
                     />
                </div>
                    <input 
                    className="phone-list__number phone-input-block" 
                    type='text' 
                    defaultValue={number} 
                    onChange={handleNewChange}
                    minLength="2"
                    maxLength="11"
                    />
                <div className='phone-list__utils'>
                    <button className='phone-list__edit phone-align'><AiFillEdit/>Редактировать</button>
                    <button className='phone-list__delete phone-align' onClick={deleteCOntact}><FcFullTrash/>Удалить</button>
                </div>
            </form>

        </div>
        </li>
    );
}

export default Pnones;