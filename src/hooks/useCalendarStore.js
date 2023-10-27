import { useDispatch, useSelector } from "react-redux";
import { onSeactiveEvent, onAddNewEvent,onUpdateEvent, onDeleteEvent } from "../store";


export const useCalendarStore = () =>{

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSeactiveEvent(calendarEvent));
    } 

    const startSavingEvent = async(calendarEvent) => {
        //TODO CRUD
        
        if(calendarEvent._id)
        {
            //Actualizar
            //dispatch(onUpdateEvent({...calendarEvent, _id: new Date().getTime()}));
            dispatch(onUpdateEvent({...calendarEvent}));
        } else{

            //Agregar uno nuevo
            dispatch(onAddNewEvent({...calendarEvent,  _id: new Date().getTime()}));
            
        }
    }

    const startDeleteEvent = async () => {
        //Delete
        dispatch(onDeleteEvent());
    }

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent
    }

}