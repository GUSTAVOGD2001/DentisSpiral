import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: replace with real API authentication
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-10 border border-slate-200">
        <div className="flex flex-col items-center text-center mb-8">
          <img src="/smile.svg" alt="Smile Center" className="h-16 w-16 mb-4" />
          <h1 className="text-2xl font-semibold text-slate-700">Smile Center</h1>
          <p className="text-sm text-slate-500">Gestión inteligente de pacientes y citas</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-left">
            <Label htmlFor="username">Usuario</Label>
            <Input
              id="username"
              placeholder="Correo o nombre de usuario"
              value={form.username}
              onChange={(event) => setForm({ ...form, username: event.target.value })}
              required
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              required
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
