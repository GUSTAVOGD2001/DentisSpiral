export const metrics = {
  patients: 320,
  appointments: 128,
  revenue: 48000,
  currency: 'MXN'
};

export const upcomingAppointments = [
  { id: 'CIT-001', patient: 'Juan Pérez', date: '2024-05-18T10:00:00', treatment: 'Limpieza dental', status: 'confirmada' },
  { id: 'CIT-002', patient: 'María López', date: '2024-05-18T11:30:00', treatment: 'Ortodoncia', status: 'pendiente' },
  { id: 'CIT-003', patient: 'Luis Gómez', date: '2024-05-18T14:00:00', treatment: 'Extracción', status: 'confirmada' },
  { id: 'CIT-004', patient: 'Ana Martínez', date: '2024-05-18T16:30:00', treatment: 'Implante', status: 'pendiente' }
];

export const appointmentStats = [
  { name: 'Atendidas', value: 92 },
  { name: 'Canceladas', value: 8 }
];

export const revenueByMonth = [
  { month: 'Ene', ingresos: 12000 },
  { month: 'Feb', ingresos: 15000 },
  { month: 'Mar', ingresos: 18000 },
  { month: 'Abr', ingresos: 22000 },
  { month: 'May', ingresos: 25000 }
];

export const treatmentStats = [
  { name: 'Limpieza', value: 45 },
  { name: 'Ortodoncia', value: 28 },
  { name: 'Implantes', value: 18 },
  { name: 'Resinas', value: 35 },
  { name: 'Blanqueamiento', value: 22 }
];

export const attendanceStats = [
  { name: 'Asistencias', value: 110 },
  { name: 'Cancelaciones', value: 18 }
];

export const activePatients = [
  { name: 'Juan Pérez', visits: 12 },
  { name: 'María López', visits: 10 },
  { name: 'Luis Gómez', visits: 9 },
  { name: 'Ana Martínez', visits: 8 }
];

export const patientsDirectory = [
  {
    id: 'PAT-001',
    name: 'Juan Pérez',
    phone: '55 1234 5678',
    email: 'juan.perez@example.com',
    photo: 'https://i.pravatar.cc/150?img=3',
    birthDate: '1988-07-12',
    address: 'Av. Reforma 123, CDMX',
    notes: 'Paciente con brackets. Control mensual.',
    history: [
      { date: '2024-04-10', treatment: 'Ajuste de brackets', cost: 1200, notes: 'Se ajusta arco superior.' },
      { date: '2024-03-05', treatment: 'Limpieza dental', cost: 800, notes: 'Recomendado hilo dental diario.' }
    ],
    attachments: [
      { name: 'Radiografía lateral.pdf', url: '#', size: '2.3MB' },
      { name: 'Plan de tratamiento.pdf', url: '#', size: '1.1MB' }
    ]
  },
  {
    id: 'PAT-002',
    name: 'María López',
    phone: '55 8765 4321',
    email: 'maria.lopez@example.com',
    photo: 'https://i.pravatar.cc/150?img=5',
    birthDate: '1992-02-24',
    address: 'Calle Morelos 45, Naucalpan',
    notes: 'Sensibilidad dental, usar pasta desensibilizante.',
    history: [
      { date: '2024-04-25', treatment: 'Resina dental', cost: 1500, notes: 'Control en 6 meses.' },
      { date: '2024-02-15', treatment: 'Limpieza dental', cost: 800, notes: 'Sin complicaciones.' }
    ],
    attachments: [
      { name: 'Presupuesto febrero.pdf', url: '#', size: '560KB' }
    ]
  }
];

export const appointmentsCalendar = [
  { id: '1', title: 'Juan Pérez - Limpieza', date: '2024-05-18', status: 'confirmada' },
  { id: '2', title: 'María López - Ortodoncia', date: '2024-05-19', status: 'pendiente' },
  { id: '3', title: 'Luis Gómez - Implante', date: '2024-05-20', status: 'completada' },
  { id: '4', title: 'Ana Martínez - Revisión', date: '2024-05-20', status: 'cancelada' }
];
