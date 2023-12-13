const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'pelar papas', completed: false },
  { text: 'lavar arroz', completed: false },
  { text: 'fritar carne', completed: false },
  { text: 'usar estados derivados', completed: false },
  { text: 'cántár úna kañción cañón', completed: false },
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
