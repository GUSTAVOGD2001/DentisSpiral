import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Home, Mail, Phone } from 'lucide-react';
import { patientsData } from '../data/pacientes.js';

export default function PacienteDetalle() {
  const { id } = useParams();
  const patient = patientsData.find((item) => item.id === id);

  if (!patient) {
    return (
      <div className="space-y-4">
        <p className="text-lg font-semibold text-slate-900">Paciente no encontrado</p>
        <Link
          to="/pacientes"
          className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white"
        >
          Regresar al directorio
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/pacientes"
        className="inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-slate-900"
      >
        ← Volver al directorio
      </Link>

      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[280px,1fr]">
        <div className="flex flex-col items-center text-center">
          <div className="h-32 w-32 overflow-hidden rounded-full border border-slate-200">
            <img src={patient.photo} alt={patient.name} className="h-full w-full object-cover" />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900">{patient.name}</h1>
          <p className="text-sm text-slate-500">Paciente desde 2020</p>
          <p className="mt-4 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-700">
            Última visita: {patient.lastVisit}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Información de contacto</h2>
            <dl className="mt-3 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <div>
                  <dt className="text-xs uppercase text-slate-400">Teléfono</dt>
                  <dd className="font-medium text-slate-700">{patient.phone}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <div>
                  <dt className="text-xs uppercase text-slate-400">Correo</dt>
                  <dd className="font-medium text-slate-700">{patient.email}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:col-span-2">
                <Home className="h-4 w-4 text-slate-500" />
                <div>
                  <dt className="text-xs uppercase text-slate-400">Dirección</dt>
                  <dd className="font-medium text-slate-700">{patient.address}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:col-span-2">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                <div>
                  <dt className="text-xs uppercase text-slate-400">Fecha de nacimiento</dt>
                  <dd className="font-medium text-slate-700">{patient.birthDate}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Notas</h2>
            <p className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
              {patient.notes}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Historial reciente</h2>
          <p className="text-sm text-slate-500">Últimos tratamientos registrados para el paciente.</p>
        </div>
        <ul className="divide-y divide-slate-200">
          {patient.history.map((entry, index) => (
            <li key={`${patient.id}-${index}`} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-900">{entry.treatment}</p>
                <p className="text-sm text-slate-500">{entry.date}</p>
              </div>
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {entry.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
