import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent, onAddNewEvent,onUpdateEvent } from "../store";


export const useCalendarStore = () =>{

    const dispatch = useDispatch();
    const { events, atactiveEvent } = useSelector(state => state.calendar);
    

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent));
    } 

    const startSavingEvent = async(calendarEvent) => {
        //TODO CRUD
        
        if(calendarEvent._id)
        {
            //Actualizar
            dispatch(onUpdateEvent({...calendarEvent, _id: new Date().getTime()}));
        } else{

            //Agregar uno nuevo
            dispatch(onAddNewEvent({...calendarEvent}));
            
        }
    }

    const startDeleteEvent = async () => {
        //Delete
    }

    return {
        events,
        atactiveEvent,
        hasEventSelected: !!atactiveEvent,
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }

}