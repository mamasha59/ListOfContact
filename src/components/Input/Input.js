import React from 'react';
import './Input.css';

function Input({addPhone}) {

    const [name, setValueName] = React.useState('')
    const [phone, setValuePhone] = React.useState('')

    function handleChangeName (e) { //----значение импута имени
        setValueName(e.currentTarget.value)
        
    }

    function handleChangePhone (e) { //--значение импута телеофна
        setValuePhone(e.currentTarget.value)
    }

    function submitChange (e){ // --- сабмит формы
        e.preventDefault()
        addPhone(name,phone)// --создание(отображение) контакта на фронте
        setValueName('') // --очистка инпутов
        setValuePhone('') // --очистка инпутов
    }
    return ( 
        <form className='add' onSubmit={submitChange}>

        <div className='add__number-block add-name'>
            <label className='add__name'>Имя</label>
            <input 
              className='add__new-data' 
              type='text' 
              placeholder='Введите имя контакта'
              minLength="2"
              maxLength="11"
              value={name}
              onChange={handleChangeName}
              required
            />
          </div>
  
          <div className='add__number-block add-phone'>
            <label className='add__phone'>Номер телефона</label>
            <input 
              className='add__new-data' 
              type='tel' 
              placeholder='Введите номер 8-xxx-xxx-xx-xx'
              minLength="2"
              maxLength="11"
              value={phone}
              onChange={handleChangePhone}
              required
            />
          </div>
  
            <button className='add__button' type='submit'>Добавить</button>
        </form>
     );
}

export default Input;