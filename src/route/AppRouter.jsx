import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CalendarPage } from '../calendar/pages/CalendarPage';

export const AppRouter = () =>{
    const authStatus = 'authenticate'; //not-authenticate

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