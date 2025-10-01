import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { patientsData } from '../data/pacientes.js';

export default function Pacientes() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredPatients = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return patientsData;
    }

    return patientsData.filter((patient) =>
      patient.name.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Directorio de pacientes</h1>
          <p className="text-sm text-slate-500">Administra la información de tus pacientes y accede rápidamente a sus expedientes.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nombre..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold">Foto</th>
              <th scope="col" className="px-6 py-3 font-semibold">Nombre</th>
              <th scope="col" className="px-6 py-3 font-semibold">Teléfono</th>
              <th scope="col" className="px-6 py-3 font-semibold">Correo</th>
              <th scope="col" className="px-6 py-3 text-right font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredPatients.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-slate-500">
                  No se encontraron pacientes con ese nombre.
                </td>
              </tr>
            )}

            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-slate-200">
                    <img
                      src={patient.photo}
                      alt={patient.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">{patient.name}</div>
                  <div className="text-xs text-slate-500">Última visita: {patient.lastVisit}</div>
                </td>
                <td className="px-6 py-4 text-slate-600">{patient.phone}</td>
                <td className="px-6 py-4 text-slate-600">{patient.email}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => navigate(`/pacientes/${patient.id}`)}
                      className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-900 hover:text-white"
                    >
                      Ver
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
