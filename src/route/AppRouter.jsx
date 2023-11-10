import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CalendarPage } from '../calendar/pages/CalendarPage';
//import { getEnvVariables } from '../helpers/';

export const AppRouter = () =>{
    const authStatus = 'not-authenticate'; //not-authenticate
    //console.log(getEnvVariables());
    return (
        <Routes>
            {
                (authStatus === 'not-authenticate')
                ? <Route path='/auth/*' element={ <LoginPage/> }/>
                : <Route path='/*' element={ <CalendarPage/> }/>
            }
            
        </Routes>
    )
}