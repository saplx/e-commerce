const API_BASE = 'http://localhost:8000'; // URL JSON Server или Mirage JS

export const fetchCatalog = async () => {
  const response = await fetch(`${API_BASE}/catalog`);
  if (!response.ok) {
    throw new Error('Ошибка загрузки каталога');
  }
  return await response.json();
};