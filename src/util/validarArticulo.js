export function normalizarArticulo(valores) {
  return {
    nombre: typeof valores.nombre === 'string' ? valores.nombre.trim() : '',
    marca: typeof valores.marca === 'string' ? valores.marca.trim() : '',
    tipo: typeof valores.tipo === 'string' ? valores.tipo.trim() : '',
  }
}

export function validarArticulo(valores) {
  const datos = normalizarArticulo(valores)
  const errores = {}

  if (!datos.nombre) {
    errores.nombre = 'El nombre es obligatorio.'
  } else if (datos.nombre.length < 3 || datos.nombre.length > 80) {
    errores.nombre = 'El nombre debe tener entre 3 y 80 caracteres.'
  }

  if (!datos.marca) {
    errores.marca = 'La marca es obligatoria.'
  } else if (datos.marca.length < 2 || datos.marca.length > 60) {
    errores.marca = 'La marca debe tener entre 2 y 60 caracteres.'
  }

  if (!datos.tipo) {
    errores.tipo = 'El tipo de producto es obligatorio.'
  } else if (datos.tipo.length < 2 || datos.tipo.length > 40) {
    errores.tipo = 'El tipo debe tener entre 2 y 40 caracteres.'
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores,
    datos,
  }
}
