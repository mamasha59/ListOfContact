import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.scss';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';

import * as API from '../../utils/MainApi';

function App() {

  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ users, setUsers ] = React.useState([]);
  const [valueInput, setValueInput] = React.useState(''); // --хук импута

  function handleFindValue (e) { // --- валью импута
    setValueInput(e.currentTarget.value)
  }

  React.useEffect(()=>{
    setLoggedIn(true)
    API.getUsers()
     .then((res)=>{setUsers(res)})
     .catch((err) => console.log('ОШИБКА - '+err))
     .finally(()=>{setLoggedIn(false)
    })
  },[])

  return (
    <div className="page">
      <Routes>

      <Route exact path='/'
        element={<Main valueInput={valueInput} handleFindValue={handleFindValue} loggedIn={loggedIn} users={users}/>}
      />
      <Route exact path='/profile'
        element={<Profile/>}
      />
      </Routes>
    </div>
  );
}

export default App;
