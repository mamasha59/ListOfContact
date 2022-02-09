import { Link } from 'react-router-dom';
import './User.scss';
import React from 'react';

function User({userName,userAdress,userCompany,user}) {
    
    const setUser = () =>{
        localStorage.setItem('user',JSON.stringify(user))
    }

    return (
        <div className="user">
            <h1 className='user__name'>{userName}</h1>
            <p className='user__adress'>City - {userAdress}</p>
            <p className='user__company'>Company : {userCompany}</p>
            <div className='user__button-box'>
               <Link className='user__button' to='/profile' onClick={setUser}>Подробнее</Link>
            </div>
        </div>
    );
}

export default User;