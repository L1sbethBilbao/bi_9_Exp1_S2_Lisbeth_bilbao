import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useInventario from '../hooks/useInventario.js'
import { validarArticulo } from '../util/validarArticulo.js'

const valoresIniciales = {
  nombre: '',
  marca: '',
  tipo: '',
}

const ordenCampos = ['nombre', 'marca', 'tipo']

function FormularioArticulo() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const { agregarArticulo } = useInventario()
  const navigate = useNavigate()

  const nombreRef = useRef(null)
  const marcaRef = useRef(null)
  const tipoRef = useRef(null)

  const referencias = {
    nombre: nombreRef,
    marca: marcaRef,
    tipo: tipoRef,
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((previos) => ({ ...previos, [name]: value }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const { esValido, errores: nuevosErrores, datos } = validarArticulo(valores)

    if (!esValido) {
      setErrores(nuevosErrores)
      const primerInvalido = ordenCampos.find((campo) => nuevosErrores[campo])
      if (primerInvalido) {
        referencias[primerInvalido].current?.focus()
      }
      return
    }

    const resultado = agregarArticulo(datos)

    if (resultado.exito) {
      navigate('/inventario')
    } else {
      setErrores(resultado.errores)
    }
  }

  const clasesCampo = (nombre) =>
    errores[nombre]
      ? 'w-full rounded-md border border-red-500 px-3 py-2 text-base focus:border-red-500 focus:outline-none'
      : 'w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none'

  return (
    <form
      noValidate
      onSubmit={manejarEnvio}
      className="max-w-3xl rounded-md bg-white p-4 shadow-sm"
    >
      {Object.keys(errores).length > 0 && (
        <div
          role="alert"
          className="mb-4 rounded-md border border-red-300 bg-red-50 p-4 text-red-700"
        >
          <p className="mb-1 font-semibold">Revisa los siguientes errores:</p>
          <ul className="list-disc pl-5 text-sm">
            {Object.values(errores).map((mensaje) => (
              <li key={mensaje}>{mensaje}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="nombre" className="mb-1 block font-semibold text-gray-800">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          ref={nombreRef}
          required
          aria-invalid={errores.nombre ? true : undefined}
          aria-describedby={errores.nombre ? 'nombre-error' : undefined}
          className={clasesCampo('nombre')}
        />
        {errores.nombre && (
          <p id="nombre-error" className="mt-1 text-sm text-red-600">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="marca" className="mb-1 block font-semibold text-gray-800">
          Marca
        </label>
        <input
          id="marca"
          name="marca"
          type="text"
          value={valores.marca}
          onChange={manejarCambio}
          ref={marcaRef}
          required
          aria-invalid={errores.marca ? true : undefined}
          aria-describedby={errores.marca ? 'marca-error' : undefined}
          className={clasesCampo('marca')}
        />
        {errores.marca && (
          <p id="marca-error" className="mt-1 text-sm text-red-600">
            {errores.marca}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="tipo" className="mb-1 block font-semibold text-gray-800">
          Tipo de producto
        </label>
        <input
          id="tipo"
          name="tipo"
          type="text"
          value={valores.tipo}
          onChange={manejarCambio}
          ref={tipoRef}
          required
          placeholder="Ej.: Frescos, Despensa, Lácteos"
          aria-invalid={errores.tipo ? true : undefined}
          aria-describedby={errores.tipo ? 'tipo-error' : undefined}
          className={clasesCampo('tipo')}
        />
        {errores.tipo && (
          <p id="tipo-error" className="mt-1 text-sm text-red-600">
            {errores.tipo}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
        >
          Agregar al inventario
        </button>
        <Link
          to="/inventario"
          className="inline-block rounded-md border border-(--color-primario) px-3 py-1.5 text-base text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
        >
          Ver inventario
        </Link>
      </div>
    </form>
  )
}

export default FormularioArticulo
