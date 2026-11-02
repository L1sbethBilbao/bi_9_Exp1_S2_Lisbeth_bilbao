import { useState } from 'react'
import InventarioContext from './InventarioContext.js'
import articulosIniciales from '../data/articulosInventario.json'
import { validarArticulo } from '../util/validarArticulo.js'

function construirEstadoInicial() {
  return articulosIniciales.map((articulo) => ({ ...articulo }))
}

function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState(construirEstadoInicial)

  const agregarArticulo = (valores) => {
    const { esValido, errores, datos } = validarArticulo(valores)

    if (!esValido) {
      return { exito: false, errores }
    }

    const nuevoArticulo = {
      id: crypto.randomUUID(),
      ...datos,
    }

    setArticulos((previos) => [...previos, nuevoArticulo])

    return { exito: true }
  }

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
