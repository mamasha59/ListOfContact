import './Authorize.css';
import { FiCheck } from "react-icons/fi";
import React from 'react';

function Authorize({postUser}) {
     const [phone,setPhone] = React.useState('');
     const [name,setName] = React.useState('');

    function handlePhone(e){
     setPhone(e.currentTarget.value)
    }

    function handleName(e){
        setName(e.currentTarget.value)
    }

    function submitUser(e){
     e.preventDefault()
     postUser(phone,name)
    }

    return ( 
        <section className="login">
            <form className="login__signin" onSubmit={submitUser}>
                <h1 className="login__title">Авторизация <FiCheck/></h1>

                <label className="login__title-input">Введите имя для авторизации:</label>
                <input 
                className="login__add-phone" 
                type='text' 
                value={name} 
                placeholder="Введите имя"
                onChange={handleName}
                minLength="2"
                maxLength="11"
                required
                />

                <label className="login__title-input">Введите номер телефона для авторизации:</label>
                <input 
                className="login__add-phone" 
                type='tel' 
                value={phone} 
                placeholder="Введите номер телефона"
                onChange={handlePhone}
                minLength="2"
                maxLength="11"
                required
                />

                <button className='login__enter'>Войти</button>
            </form>
            <div>========================</div>
        </section>
     );
}

export default Authorize;