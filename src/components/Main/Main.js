import React from 'react';
import Input from '../Input/Input';
import Pnones from '../Pnones/Pnones';
import Header from '../Header/Header';

function Main({handleDelete,addPhone,contacts,findPhone,profile}) {

    return (
        <>
        <Header findPhone={findPhone} profile={profile}/>
        <div className='page__container'>
        <Input addPhone={addPhone}/>
        <ul className='page__block-users'>
        {contacts.length === 0 ? <div className='page__error'>Пока ничего нет :( Добавьте контакт!</div> :
            contacts.map((contact) => {
                        return(
                            <Pnones
                            contact={contact.name} 
                            number={contact.phone}
                            key={contact.id}
                            handleDelete={handleDelete}
                            id={contact.id}
                            />)
                    })          
        }
            
        </ul>
        </div>
      </>
     );
}

export default Main;