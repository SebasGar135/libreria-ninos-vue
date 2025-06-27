// src/services/librosService.js
export async function obtenerLibros() {
    try {
      const response = await fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      if (!response.ok) throw new Error('Error al obtener los libros')
      return await response.json()
    } catch (error) {
      console.error('Error al obtener libros:', error)
      return []
    }
  }
  