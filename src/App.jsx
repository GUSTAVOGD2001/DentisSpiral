import React from 'react'

export default function App() {
  return (
    <div className="container">
      <h1>Smile Center</h1>
      <p>UI en React + Vite sin Tailwind, con CSS plano.</p>
      <div className="row">
        <div className="card kpi">Total Pacientes: 120</div>
        <div className="card kpi">Total Citas: 48</div>
        <div className="card kpi">Ingresos del Mes: $56,400</div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button className="btn">+ Nueva cita</button>
      </div>
    </div>
  )
}
