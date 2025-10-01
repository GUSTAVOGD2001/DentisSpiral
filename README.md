# Smile Center - Frontend

Aplicación frontend construida con React y Vite para el sistema de gestión de consultorio dental **Smile Center**. El objetivo es ofrecer una interfaz moderna para administrar pacientes, citas y reportes.

## 🚀 Requisitos previos
- Node.js >= 18
- npm >= 9

## 📦 Instalación
```bash
npm install
```

## ▶️ Ejecutar en modo desarrollo
```bash
npm run dev
```

El servidor se levantará por defecto en `http://localhost:5173`.

## Desarrollo
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```
3. Abre en el navegador la URL que muestre Vite (por defecto http://localhost:5173).

### Notas
- Si aparece un error con PowerShell sobre ExecutionPolicy, usa:
  - Temporal (solo esta terminal):
    ```powershell
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```
  - O para tu usuario:
    ```powershell
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
    ```
- Si “vite no se reconoce”, verifica que esté en devDependencies y reinstala:
  ```powershell
  rd /s /q node_modules
  del package-lock.json
  npm install
  ```

Guía de recuperación:
```powershell
rd /s /q node_modules
del package-lock.json
npm cache clean --force
npm install
```

## 🧭 Rutas principales
- `/login` – Inicio de sesión para administradores y secretarias.
- `/dashboard` – Panel principal con métricas, citas próximas y gráficas.
- `/pacientes` – Directorio de pacientes con filtros y detalle.
- `/citas` – Agenda con vista de calendario (FullCalendar).
- `/reportes` – Visualización de reportes y estadísticas.
- `/configuracion` – Ajustes generales del sistema.

## 🧩 Dependencias destacadas
- **react** & **react-dom** – Librería base para la UI.
- **react-router-dom** – Manejo de rutas en el cliente.
- **tailwindcss** – Estilos utilitarios.
- **@fullcalendar/react** – Agenda de citas.
- **recharts** – Visualización de gráficas.
- **lucide-react** – Iconografía moderna.
- **axios** – Cliente HTTP listo para integrar con APIs REST.

## 🛠️ Estructura del proyecto
```
src/
 ├─ components/
 │   └─ ui/        # Componentes reutilizables estilo shadcn/ui
 ├─ data/          # Datos mock para la UI
 ├─ layouts/       # Layouts principales
 ├─ pages/         # Vistas del sistema
 └─ lib/           # Utilidades y cliente API
```

## 🔗 Integración con backend
Los componentes están listos para conectarse a un backend Node.js mediante API REST usando `fetch` o `axios`. Las funciones de ejemplo se encuentran en `src/lib/utils.js` y pueden adaptarse para consumir los endpoints reales.
