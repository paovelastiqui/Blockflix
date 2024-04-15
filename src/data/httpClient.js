const API="https://api.themoviedb.org/"
export function fetch(path){
    return fetch(API+path,{
        headers:{
            Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFkYTJhYTZjNmFiYTJjM2EyZWNiYWY4MGEzNGY4NCIsInN1YiI6IjY2MWQ0NzA1ZWMwYzU4MDE2Mzc0M2NlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5gfnssn7sKf-mgVObvemAt8Ak19cTeEunhX05qmklLA",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}