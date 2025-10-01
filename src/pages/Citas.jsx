import Calendar from '../components/Calendar.jsx';

const events = [
  { title: 'Limpieza · Juan Pérez', date: '2024-05-21T10:00:00' },
  { title: 'Ortodoncia · María López', date: '2024-05-21T12:30:00' },
  { title: 'Implante · Luis Gómez', date: '2024-05-22T09:00:00' }
];

export default function Citas() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Agenda de citas</h1>
          <p className="text-sm text-slate-500">Consulta las citas programadas por día, semana o mes.</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          + Nueva cita
        </button>
      </div>

      <Calendar events={events} />
    </div>
  );
}
