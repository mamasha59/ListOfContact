import React from 'react';
import User from '../User/User';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function Main({users,profile,loggedIn,handleFindValue, valueInput}) {

  const setFilter = () => { // --- функция поиска контактов
    const filtredUsers = users.filter(user =>  user.address.city.toLowerCase().includes(valueInput.toLowerCase())); // ---фильтрация по городу
    // console.log(filtredUsersByName)
     return (loggedIn ? <Preloader/> : (Object.keys(filtredUsers)).map((user, i) => (
     
       <User
              key={i}
              userName={filtredUsers[user].name}
              userAdress={filtredUsers[user].address.city}
              userCompany={filtredUsers[user].company.name}
              user = {filtredUsers[user]}
            />
            ) 
            ))
   };
   
    return (
      <>
        <Header findPhone={handleFindValue} profile={profile}/>
        <div className='page__container'>
          <div className='page__block-users'>{setFilter()}</div>
        </div>
      </>
     );
}

export default Main;