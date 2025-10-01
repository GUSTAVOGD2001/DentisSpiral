import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { metrics, upcomingAppointments, appointmentStats, revenueByMonth } from '../data/mockData.js';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Calendar, DollarSign, Users } from 'lucide-react';

const COLORS = ['#2563eb', '#cbd5f5'];

function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">Dashboard</h1>
        <p className="text-sm text-slate-500">Resumen general de la clínica Smile Center</p>
      </div>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total pacientes</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-slate-700">{metrics.patients}</p>
            <p className="text-xs text-slate-400 mt-1">+12% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total citas</CardTitle>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-slate-700">{metrics.appointments}</p>
            <p className="text-xs text-slate-400 mt-1">16 citas programadas hoy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Ingresos del mes</CardTitle>
            <DollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-slate-700">
              {new Intl.NumberFormat('es-MX', { style: 'currency', currency: metrics.currency }).format(metrics.revenue)}
            </p>
            <p className="text-xs text-slate-400 mt-1">+18% vs mes anterior</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Citas próximas</CardTitle>
              <p className="text-sm text-slate-500">Revisa la agenda del día</p>
            </div>
            <Button variant="outline">Ver agenda completa</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-700">{appointment.patient}</p>
                  <p className="text-xs text-slate-500">{appointment.treatment}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">
                    {new Date(appointment.date).toLocaleDateString('es-MX', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${
                      appointment.status === 'confirmada'
                        ? 'bg-green-100 text-green-600'
                        : appointment.status === 'pendiente'
                        ? 'bg-amber-100 text-amber-600'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Citas atendidas vs canceladas</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={appointmentStats} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={4}>
                  {appointmentStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ingresos por mes</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value)} />
                <Line type="monotone" dataKey="ingresos" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recordatorios rápidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium text-slate-700">Enviar confirmaciones de citas de mañana</p>
                <p className="text-xs text-slate-500">Programa envíos automáticos antes de las 18:00 hrs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium text-slate-700">Revisar inventario de materiales</p>
                <p className="text-xs text-slate-500">Actualiza la lista de compras para la próxima semana.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium text-slate-700">Contactar a pacientes inactivos</p>
                <p className="text-xs text-slate-500">Envía recordatorios a pacientes con más de 6 meses sin consulta.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default DashboardPage;
