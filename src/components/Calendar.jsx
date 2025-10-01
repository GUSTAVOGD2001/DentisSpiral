import React, { useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar() {
  const calendarRef = useRef(null)

  return (
    <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={[
          { title: 'Cita - Juan Pérez', date: '2025-10-01' },
          { title: 'Limpieza - Ana', date: '2025-10-02' }
        ]}
      />
    </div>
  )
}
