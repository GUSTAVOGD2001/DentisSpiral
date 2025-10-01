import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, BarChart3 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Pacientes', to: '/pacientes', icon: Users },
  { name: 'Citas', to: '/citas', icon: CalendarDays },
  { name: 'Reportes', to: '/reportes', icon: BarChart3 }
];

const linkBaseClasses =
  'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors';

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="flex min-h-screen">
        <aside className="w-60 shrink-0 border-r border-slate-200 bg-white px-4 py-6">
          <div className="mb-8 px-2 text-2xl font-semibold text-slate-900">Smile Center</div>
          <nav className="flex flex-col gap-1">
            {navigation.map(({ name, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    linkBaseClasses,
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  ].join(' ')
                }
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 shadow-sm md:px-8">
            <div className="text-lg font-semibold">Panel administrativo</div>
            <div className="flex items-center gap-3">
              <div className="hidden text-right text-sm text-slate-500 sm:block">
                Bienvenida,
                <span className="block font-medium text-slate-700">Secretaria Ana</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                SA
              </div>
            </div>
          </header>

          <main className="flex-1 bg-slate-100 px-4 py-6 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
