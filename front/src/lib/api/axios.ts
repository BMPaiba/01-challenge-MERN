import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL

export const MernApi = axios.create({
  baseURL: baseURL,
});


// // Interceptor para agregar el JWT a todas las solicitudes
// MernApi.interceptors.request.use(
//   (config) => {
//     // Obtener el token (puede ser desde almacenamiento local, cookies, etc.)
//     const token = `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_TOKEN}`;

//     // Añadir el token a las cabeceras
//     if (token) {
//       config.headers["Authorization"] = token;
//     }

//     console.log("JWT agregado a la solicitud");
//     return config;  // La solicitud con el token agregado
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
