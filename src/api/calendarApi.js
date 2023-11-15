import axios from "axios";
//Se encarga de interpretar las rutas antes de hacer la peticion
import { getEnvVariables } from '../helpers/';

const { VITE_API_URL } = getEnvVariables();

//Crear  base de URL
const calendarApi = axios.create({
    baseURL: VITE_API_URL
})

//Todo: Configurar los interceptores
calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
} )

export default calendarApi;
