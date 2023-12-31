import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout, clearErrorMessage} from '../store'
import { calendarApi } from '../api'


export const useAuthStore = () => {

    const {status, user, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const startLogin = async({email, password}) =>{
        //console.log({email, password});
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth', {email, password});
            //console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid:data.uid}));
        } catch (error) {
            console.log(error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout( () => {
                dispatch(clearErrorMessage());
            }, 10);
            
        }
        
    }

    const startRegister = async({name, email, password}) =>{
        //console.log({email, password});
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth/new', {name, email, password});
            //console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid:data.uid}));

        } catch (error) {
            console.log(error);
            dispatch(onLogout(error.response.data?.message || '--'));
            setTimeout( () => {
                dispatch(clearErrorMessage());
            }, 10);
            
        }
        
    }

    return {
        //Exponer

        //Propiedades
        status,
        user,
        errorMessage,
        //Methodos
        startLogin,
        startRegister
    }
}