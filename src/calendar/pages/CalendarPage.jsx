import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { addHours } from 'date-fns'
import { Navbar } from "../components/Navbar"
import {localizer, messagesEs } from '../../helpers/'
import { CalendarEvent } from "../components/CalendarEvent"
import { CalendarModal } from '../components/CalendarModal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useUiStore, useCalendarStore } from '../../hooks'
import { FabAddNew } from '../components/FabAddNew'
import { FabDelete } from '../components/FabDelete'
//import { useCalendarStore } from '../../hooks/useCalendarStore'

  // const event = [
  //   {
  //       title: 'Día de muertos',
  //       notes: 'Comprar pan de muerto',
  //       start: new Date(),
  //       end: addHours( new Date(), 3),
  //       bgColor: '#B705FF',
  //       user:{
  //           _id:'123',
  //           name:'Amanda Sabino'
  //       }
  //   }
  // ]


export const CalendarPage = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
    const { openDateModal } = useUiStore();
    const {events, setActiveEvent } = useCalendarStore();

    const eventStyleGetter = (event, start, end, isSelected) => {

      const style = {
          backgroundColor:'#BD75DA',
          borderRadius:'0px',
          color:'black'
      }
  
      return {
          style
      }
    }
    
    const onSelect = (event) => {
      console.log(event);
      setActiveEvent(event);
    }
    const onDoubleClick = (event) =>{
      openDateModal();
      //setActivEvent
    }
  
    const onViewChanged = (event) => {
      console.log({click : event});
      localStorage.setItem('lastView' , event);
      //setLastView(event);
    }

    return (
        <>
            <Navbar />
            
                <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messagesEs()}
                eventPropGetter={eventStyleGetter}
                components={
                    { event:CalendarEvent}
                }
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
                defaultView={lastView}
                
                />
                <CalendarModal />
                <FabAddNew />
                <FabDelete />
            
        </>
    )
}