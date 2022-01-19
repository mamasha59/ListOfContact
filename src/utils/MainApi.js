 
 export const postUser = (phone,name) => { // ---авторизация
    return fetch('http://localhost:3000/user',{
      method: 'POST',
      headers: {
            Accept: "application/json",
            "Content-Type": "application/json" 
      },
      body:JSON.stringify({'phone':phone, //--телефон юзера
                           'name':name, // -- имя юзера
                           'id':Math.random().toString(36).substring(2,9), // -- айди юзера
                          })
      })
     .then(checkResponse)
  }

 export const postContant = (nameContact,phoneContact,ownerID) => { // --создать контакт Юзера
    return fetch('http://localhost:3000/noteBook',{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
                            'ownerID':ownerID,
                            'name':nameContact,
                            'phone':phoneContact,
                            })
    })
    .then(checkResponse)
 }

 export const getContant = () => { // --- получение всех контактов
    return fetch('http://localhost:3000/noteBook',{
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then(checkResponse)
    
 }

  const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);