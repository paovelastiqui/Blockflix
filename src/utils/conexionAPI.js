
const API = "https://api.themoviedb.org/3"
const Api_Auth =import.meta.env.API_AUTH

export const get = (path) =>{
    
    return fetch (API + path,{
            headers :{
                Authorization: Api_Auth
            }
        }).then((results)=>results.json())
        
}
