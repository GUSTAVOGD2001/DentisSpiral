const kpis = [
  {
    label: 'Total de pacientes',
    value: '1,248',
    trend: '+8.2% vs. mes anterior'
  },
  {
    label: 'Citas programadas',
    value: '86',
    trend: '12 cancelaciones esta semana'
  },
  {
    label: 'Ingresos del mes',
    value: '$245,800 MXN',
    trend: 'Objetivo alcanzado al 74%'
  }
];

const upcomingAppointments = [
  { id: 1, patient: 'Juan Pérez', date: '21 Mayo 2024', time: '10:00 AM', status: 'Confirmada' },
  { id: 2, patient: 'María López', date: '21 Mayo 2024', time: '11:30 AM', status: 'Pendiente' },
  { id: 3, patient: 'Luis Gómez', date: '21 Mayo 2024', time: '01:00 PM', status: 'Confirmada' },
  { id: 4, patient: 'Ana Martínez', date: '22 Mayo 2024', time: '09:30 AM', status: 'Reprogramar' },
  { id: 5, patient: 'Laura García', date: '22 Mayo 2024', time: '12:00 PM', status: 'Confirmada' }
];

const statusStyles = {
  Confirmada: 'bg-emerald-100 text-emerald-700',
  Pendiente: 'bg-amber-100 text-amber-700',
  Reprogramar: 'bg-rose-100 text-rose-700'
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <article
            key={kpi.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">{kpi.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{kpi.value}</p>
            <p className="mt-4 text-sm text-slate-500">{kpi.trend}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Próximas citas</h2>
          <p className="text-sm text-slate-500">Gestión rápida de pacientes que llegan en las próximas 48 horas.</p>
        </div>
        <ul className="divide-y divide-slate-200">
          {upcomingAppointments.map((appointment) => (
            <li key={appointment.id} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-900">{appointment.patient}</p>
                <p className="text-sm text-slate-500">
                  {appointment.date} · {appointment.time}
                </p>
              </div>
              <span
                className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyles[appointment.status] ?? 'bg-slate-100 text-slate-600'
                }`}
              >
                {appointment.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
