
const API = "https://api.themoviedb.org/3"


export const get = (path) =>{
    
    return fetch (API + path,{
            headers :{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFkYTJhYTZjNmFiYTJjM2EyZWNiYWY4MGEzNGY4NCIsInN1YiI6IjY2MWQ0NzA1ZWMwYzU4MDE2Mzc0M2NlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5gfnssn7sKf-mgVObvemAt8Ak19cTeEunhX05qmklLA",
                "Content-type":"aplication/json;charset-utf-8"
            }
        }).then((results)=>results.json())
        
}
