import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">Configuración</h1>
        <p className="text-sm text-slate-500">Personaliza la información del consultorio y las preferencias del sistema.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Preferencias generales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-700">Integraciones</p>
            <p className="text-xs text-slate-500">Configura la sincronización con tu sistema contable y recordatorios SMS.</p>
          </div>
          <Button variant="outline">Conectar integraciones</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SettingsPage;
