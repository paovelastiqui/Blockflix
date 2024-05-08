import {API_KEY} from "../../credenciales.json"
const API = "https://api.themoviedb.org/3";

export const get = async (path) => {
    try {
      const response = await fetch(API + path, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-type":"aplication/json;charset-utf-8"
        },
      });
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al traer datos:", error);
      throw error;
    }
  };