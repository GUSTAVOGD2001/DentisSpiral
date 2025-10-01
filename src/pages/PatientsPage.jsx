import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Input } from '../components/ui/input.jsx';
import { Button } from '../components/ui/button.jsx';
import { patientsDirectory } from '../data/mockData.js';

function PatientsPage() {
  const [query, setQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(patientsDirectory[0]);

  const filteredPatients = useMemo(() => {
    return patientsDirectory.filter((patient) =>
      patient.name.toLowerCase().includes(query.toLowerCase()) || patient.email.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-700">Pacientes</h1>
          <p className="text-sm text-slate-500">Gestiona y consulta el historial completo de tus pacientes.</p>
        </div>
        <Button>+ Nuevo paciente</Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Directorio de pacientes</CardTitle>
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre o correo" />
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Paciente</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Teléfono</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Correo</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img src={patient.photo} alt={patient.name} className="h-10 w-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-semibold text-slate-700">{patient.name}</p>
                          <p className="text-xs text-slate-500">ID {patient.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">{patient.phone}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{patient.email}</td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="outline" onClick={() => setSelectedPatient(patient)}>
                        Ver detalle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPatients.length === 0 && (
              <p className="text-sm text-slate-500 text-center py-6">No se encontraron pacientes con ese criterio.</p>
            )}
          </CardContent>
        </Card>

        {selectedPatient && (
          <Card>
            <CardHeader>
              <CardTitle>Detalle del paciente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <img src={selectedPatient.photo} alt={selectedPatient.name} className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-700">{selectedPatient.name}</h3>
                  <p className="text-xs text-slate-500">{selectedPatient.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">ID:</span> {selectedPatient.id}</p>
                <p><span className="font-semibold">Fecha de nacimiento:</span> {selectedPatient.birthDate}</p>
                <p><span className="font-semibold">Teléfono:</span> {selectedPatient.phone}</p>
                <p><span className="font-semibold">Dirección:</span> {selectedPatient.address}</p>
                <p><span className="font-semibold">Notas:</span> {selectedPatient.notes}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-3">Historial de consultas</h4>
                <div className="space-y-3">
                  {selectedPatient.history.map((item) => (
                    <div key={item.date} className="border border-slate-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-slate-700">{item.treatment}</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                      <p className="text-xs text-slate-500">Costo: ${item.cost}</p>
                      <p className="text-xs text-slate-500">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-600 mb-3">Archivos adjuntos</h4>
                <div className="space-y-2">
                  {selectedPatient.attachments.map((file) => (
                    <a key={file.name} href={file.url} className="flex items-center justify-between text-sm text-primary hover:underline">
                      <span>{file.name}</span>
                      <span className="text-xs text-slate-400">{file.size}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default PatientsPage;
