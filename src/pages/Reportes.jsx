import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const monthlyAppointments = [
  { month: 'Ene', atendidas: 42, canceladas: 6 },
  { month: 'Feb', atendidas: 48, canceladas: 4 },
  { month: 'Mar', atendidas: 51, canceladas: 5 },
  { month: 'Abr', atendidas: 47, canceladas: 3 },
  { month: 'May', atendidas: 53, canceladas: 7 }
];

const treatmentsData = [
  { name: 'Limpieza', value: 32 },
  { name: 'Ortodoncia', value: 21 },
  { name: 'Implantes', value: 15 },
  { name: 'Resinas', value: 18 },
  { name: 'Blanqueamiento', value: 14 }
];

const pieColors = ['#1f2937', '#0f172a', '#334155', '#64748b', '#94a3b8'];

export default function Reportes() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">Reportes</h1>
        <p className="text-sm text-slate-500">Visualiza el desempeño de la clínica con métricas rápidas.</p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="flex h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Citas atendidas vs canceladas</h2>
            <p className="text-sm text-slate-500">Comparativo mensual de la agenda.</p>
          </div>
          <div className="mt-6 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyAppointments}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#475569" fontSize={12} />
                <YAxis stroke="#475569" fontSize={12} allowDecimals={false} />
                <Tooltip cursor={{ fill: 'rgba(148, 163, 184, 0.15)' }} />
                <Legend />
                <Bar dataKey="atendidas" fill="#1f2937" radius={[4, 4, 0, 0]} name="Atendidas" />
                <Bar dataKey="canceladas" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Canceladas" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="flex h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Tratamientos más comunes</h2>
            <p className="text-sm text-slate-500">Distribución de procedimientos realizados en el último trimestre.</p>
          </div>
          <div className="mt-6 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={treatmentsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  innerRadius={60}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {treatmentsData.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>
    </div>
  );
}
