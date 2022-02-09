import React from "react";
import { Link } from "react-router-dom";

import './Profile.scss';
import { useFormWithValidation } from '../../validation/validation';

function Profile() {

  const [disabled , setDisadled] = React.useState(false); // ---сосояние ридонли

  const { values, handleChange, errors, setValues, isValid} = useFormWithValidation();

    function handleDisabled () {  // --- при клике на кнопку менять состояние формы(readOnly)
        setDisadled(!disabled)
    }

    function handleSubmit (e) { // ---сабмит формы
        e.preventDefault()
        console.log(JSON.stringify(values))
    }

   const { email, userName, name, street, city, zipcode, tel, website } = values;

   const user = localStorage.getItem('user') // --- берем из стореджа нужного юзера
   const userInfo = JSON.parse(user)

   React.useEffect(() => {
    setValues({
      email: userInfo.email,
      userName : userInfo.username,
      name: userInfo.name,
      street: userInfo.address.street,
      city: userInfo.address.city,
      zipcode: userInfo.address.zipcode,
      tel: userInfo.phone,
      website: userInfo.website,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValues]);

    return ( 
        <section className="profile">
           <form onSubmit={handleSubmit} id="form" type='submit' className="profile__form">
             <fieldset disabled={disabled ? '' : 'disabled'}>

                <div className="profile__main">
                   
                    <input
                    name='name'
                    value={name || ''}
                    type='text'
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    className="profile__name" 
                    required
                    />
                    <span className='authform__error'>{errors.name}</span>

                    <label className="profile__name-block">Username -
                        <input
                         name='userName'
                         value={userName || ''}
                         type='text'
                         onChange={handleChange}
                         minLength="2"
                         maxLength="30"
                         className="profile__username"
                        required 
                         />
                        <span className='authform__error'>{errors.userName}</span>
                    </label>

                    <label className="profile__email-block">Email -
                        <input
                         name='email'
                         value={email || ''}
                         type='email'
                         onChange={handleChange}
                         minLength="2"
                         maxLength="30"
                         className="profile__email"
                         required
                         />
                        <span className='authform__error'>{errors.email}</span>
                    </label>
                    
                </div>

                <div className="profile__adress">
                    <h3 className="profile__adress-title">Address :</h3>

                    <label className="profile__block">Street :
                        <input
                        name='street'
                        required 
                        type='text'
                        value={street || ''}
                        className="profile__address-street"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        />
                        <span className='authform__error'>{errors.street}</span>
                    </label>

                    <label className="profile__block">City :
                        <input 
                        required 
                        type='text'
                        name='city'
                        value={city || ''}
                        className="profile__address-city"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        />
                        <span className='authform__error'>{errors.city}</span>
                    </label>

                    <label className="profile__block">ZipCode :
                        <input 
                        required 
                        type='text'
                        name='zipcode' 
                        value={zipcode || ''}
                        className="profile__address-zipcode"
                        minLength="2"
                        maxLength="15"
                        onChange={handleChange}
                        />
                        <span className='authform__error'>{errors.zipcode}</span>
                    </label>

                    <label className="profile__block">Phone :
                        <input 
                        required 
                        type='tel'
                        name='tel' 
                        value={tel || ''}
                        className="profile__phone"
                        minLength="2"
                        maxLength="15"
                        onChange={handleChange}
                        />
                        <span className='authform__error'>{errors.tel}</span>
                    </label>

                </div>
                <label className="profile__block">WebSite :
                        <input 
                        required 
                        type='text'
                        name="website"
                        value={website || ''}
                        className="profile__website"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        />
                        <span className='authform__error'>{errors.website}</span>
                </label>
                <Link className="profile__back" to='/' onClick={(()=>{localStorage.clear()})}>Back to results</Link>
 
            </fieldset>
            <div>
                <textarea className="profile__comments" maxLength="180"  cols="50" rows="6" wrap="hard" placeholder="comments"></textarea>
            </div>
            <button type='submit' form="form" className={`${isValid ? "" : "profile__submit_inactive"} profile__create`}  disabled={`${isValid ? "" : "disabled"}`} >Submit and Sent</button>
            </form>
            <button onClick={handleDisabled} className='profile__create profile__create_green'>Edit form</button>

        </section>
     );
}

export default Profile;