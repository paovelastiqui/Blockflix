
const API = "https://api.themoviedb.org/3";
const Api_Auth = import.meta.env.API_AUTH;

export const get = async (path) => {
    try {
        const response = await fetch(API + path, {
            headers: {
                Authorization: Api_Auth
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
