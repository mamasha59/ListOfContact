import React from 'react';
import { Routes , Route , Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Authorize from '../Authorize/Authorize';
import * as API from '../../utils/MainApi';

function App() {

  const [ contacts, setContacts ] = React.useState([]); // --- хук создания контакта пользователя
  const [ loggedIn, setLoggedIn ] = React.useState(false); // --- состояние авторизации
  const [ profile, setProfile ] = React.useState([]); // --- хук авторизации пользователя
  const [getContact,setGetContact] = React.useState([]) // --- контакты пользователя

  const navigate = useNavigate(); // ----редирект

  const handleLogin = (phone,name) => { // ---авторизация пользователя
    API.postUser(phone,name)
     .then((res)=>{
       localStorage.setItem('user',JSON.stringify(res))
       setProfile(res)
      })
     .catch((err) => console.log(err))
     .finally(()=>{setLoggedIn(true)
      navigate ('/user')
    })
  }

  const takeContacts = () => { // --- в разработке
     API.getContant()
    .then((res)=>{
     const contacts = res.filter((contact) => contact.ownerID === contacts.id)
      setGetContact(contacts)
    }).catch((err)=>{console.log('ошибка:' + err)})
  }

  function addPhone (name,phone){ // --- добавление нового контакта пользователя(шаблон)
   if(name || phone){
     const newItem ={
       id: Math.random().toString(36).substring(2,9),
       name: name,
       phone: phone
     }
     setContacts([...contacts,newItem])
     API.postContant(phone,name,profile.id)
   }else{
     console.log('НИЧЕГО НЕТУ')
   }
  }

  function handleDelete (id){ // ---удаление контакта пользователя
    setContacts([...contacts.filter((user) => user.id !== id)])
  }
  // const findPhone = (userValue) => { // --- функция поиска контактов(в разработке)
  //  const test = users.filter(user => 
  //   user.name.toLowerCase().includes(userValue.toLowerCase()),
  //   )

  // }

  return (
    <div className="page">
      <Routes>

      <Route exact path='/' 
              element={<Authorize postUser={handleLogin}/>}
        />
      <Route exact path='/user'
        element={loggedIn 
        ? <Main
          takeContacts={takeContacts}
          profile={profile}
          addPhone={addPhone}
          contacts={contacts}
          handleDelete={handleDelete}
          // findPhone={findPhone}
          />
        : <Navigate to="/" />}
      />

            
          

      </Routes>
    </div>
  );
}

export default App;
