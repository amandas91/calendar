import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

export const calendarSlice = createSlice ({
    name: 'calendar',
    initialState:{
        events: [
            {
                title: 'Día de muertos',
                notes: 'Comprar pan de muerto',
                start: new Date(),
                end: addHours( new Date(), 3),
                bgColor: '#B705FF',
                user:{
                    _id:'123',
                    name:'Amanda Sabino'
                }
            }
        ], 
        atactiveEvent:null
    },
    reducers:{

        onSetActiveEvent: (state, { payload }) => {
            //Hacer llamado de un id, o de toda la información
            //activeEcent recibirá la nueva información del formulario
            state.atactiveEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.atactiveEvent = null;
        },
        onUpdateEvent: (state, { payload }) =>{
            state.events = state.events.map ( event => {
                if(event._id === payload._id){
                    return payload;
                }

                return event;
            })
        },
        onDeleteEvent: (state) =>{

        }
    }

});

export const { onSetActiveEvent,
    atactiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent } = calendarSlice.actions;