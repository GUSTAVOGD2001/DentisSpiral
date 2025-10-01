import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import PatientsPage from './pages/PatientsPage.jsx';
import AppointmentsPage from './pages/AppointmentsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import AppLayout from './layouts/AppLayout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pacientes" element={<PatientsPage />} />
        <Route path="/citas" element={<AppointmentsPage />} />
        <Route path="/reportes" element={<ReportsPage />} />
        <Route path="/configuracion" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
