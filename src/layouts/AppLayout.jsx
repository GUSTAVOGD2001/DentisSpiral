import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { cn } from '../lib/utils.js';
import { LogOut, Menu, Settings, Users, Calendar, BarChart2, LayoutDashboard, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Pacientes', to: '/pacientes', icon: Users },
  { name: 'Citas', to: '/citas', icon: Calendar },
  { name: 'Reportes', to: '/reportes', icon: BarChart2 },
  { name: 'Configuración', to: '/configuracion', icon: Settings }
];

function SidebarContent({ collapsed = false, onItemClick = () => {}, onLogout = () => {} }) {
  return (
    <>
      <div className={cn('flex items-center gap-3 px-6 py-4 border-b border-slate-200', collapsed && 'justify-center px-4')}>
        <img src="/smile.svg" alt="Smile Center" className="h-10 w-10" />
        {!collapsed && <div className="font-semibold text-lg text-slate-700">Smile Center</div>}
      </div>
      <nav className="flex-1 overflow-y-auto py-6 space-y-1 scrollbar-thin">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors',
                  collapsed && 'justify-center px-4',
                  isActive && 'bg-primary/10 text-primary shadow-sm'
                )
              }
              onClick={onItemClick}
            >
              <Icon className="h-5 w-5" />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>
      <div className={cn('px-6 pb-6', collapsed && 'px-4')}>
        <Button variant="outline" className={cn('w-full', collapsed && 'justify-center px-0')} onClick={onLogout}>
          <LogOut className={cn('h-4 w-4', !collapsed && 'mr-2')} />
          {!collapsed && 'Cerrar sesión'}
        </Button>
      </div>
    </>
  );
}

function AppLayout() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    setMobileOpen(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside
          className={cn(
            'hidden md:flex md:flex-col bg-white border-r border-slate-200 min-h-screen transition-all duration-200',
            collapsed ? 'md:w-20' : 'md:w-64'
          )}
        >
          <SidebarContent collapsed={collapsed} onItemClick={() => {}} onLogout={handleLogout} />
        </aside>

        {mobileOpen && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <div className="absolute inset-0 bg-slate-900/40" onClick={() => setMobileOpen(false)} />
            <aside className="relative z-50 w-72 bg-white border-r border-slate-200 flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <img src="/smile.svg" alt="Smile Center" className="h-10 w-10" />
                  <div className="font-semibold text-lg text-slate-700">Smile Center</div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <SidebarContent onItemClick={() => setMobileOpen(false)} onLogout={handleLogout} />
            </aside>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)}>
                  <Menu className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex"
                  onClick={() => setCollapsed((prev) => !prev)}
                  title={collapsed ? 'Expandir menú' : 'Colapsar menú'}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="md:hidden flex items-center gap-2 font-semibold text-slate-700">
                  <img src="/smile.svg" alt="Smile Center" className="h-8 w-8" />
                  Smile Center
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-slate-500 text-right">
                  Secretaria Ana
                  <p className="text-xs text-slate-400">Secretaria</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  SA
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
