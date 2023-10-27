import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const temEvent = {
    _id:new Date().getDate(),
    culture:'es',
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


export const calendarSlice = createSlice ({
    name: 'calendar',
    initialState:{
        events: [
            {
                temEvent
            }
        ], 
        activeEvent:null
    },
    reducers:{

        onSeactiveEvent: (state, { payload }) => {
            //Hacer llamado de un id, o de toda la información
            //activeEcent recibirá la nueva información del formulario
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
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
            if(state.activeEvent ){
                state.events = state.events.filter (event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        }
    }

});

export const { 
    activeEvent,
    onSeactiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent } = calendarSlice.actions;