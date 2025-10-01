import { useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { appointmentsCalendar } from '../data/mockData.js';

const statusColors = {
  pendiente: '#fbbf24',
  confirmada: '#22c55e',
  cancelada: '#ef4444',
  completada: '#2563eb'
};

function AppointmentsPage() {
  const events = useMemo(
    () =>
      appointmentsCalendar.map((event) => ({
        ...event,
        backgroundColor: statusColors[event.status],
        borderColor: statusColors[event.status]
      })),
    []
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-700">Agenda de citas</h1>
          <p className="text-sm text-slate-500">Visualiza y administra todas las citas programadas.</p>
        </div>
        <Button className="md:self-start">+ Nueva cita</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calendario de citas</CardTitle>
        </CardHeader>
        <CardContent>
          <FullCalendar
            height="auto"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="es"
            events={events}
            headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default AppointmentsPage;
