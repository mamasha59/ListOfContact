
 export const getUsers = () => { // --- получение всех контактов
    return fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then(checkResponse)
    
 }

  const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);