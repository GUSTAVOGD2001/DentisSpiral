export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const apiClient = {
  async get(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Error al cargar datos');
    return response.json();
  },
  async post(path, body) {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!response.ok) throw new Error('Error al guardar datos');
    return response.json();
  }
};
