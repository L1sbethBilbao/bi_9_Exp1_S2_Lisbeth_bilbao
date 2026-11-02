import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

function Contactanos() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <PageHeader
            etiqueta="Contáctanos"
            titulo="Estamos para ayudarte"
            descripcion="Si tienes consultas sobre productos, horarios o atención en tienda, escríbenos. Responderemos a la brevedad."
          />

          <ul className="space-y-2 text-gray-500">
            <li>
              <strong className="text-gray-800">Dirección:</strong> Av. Los
              Frescos 1250, Santiago
            </li>
            <li>
              <strong className="text-gray-800">Teléfono:</strong> +56 2 2345
              6789
            </li>
            <li>
              <strong className="text-gray-800">Correo:</strong>{' '}
              contacto@casagourmet.cl
            </li>
            <li>
              <strong className="text-gray-800">Horario:</strong> Lun a Dom ·
              08:00 a 21:00
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-bold text-gray-900">
              Formulario de contacto
            </h2>

            {enviado ? (
              <div
                className="rounded-md border border-green-300 bg-green-50 p-4 text-green-800"
                role="status"
              >
                Gracias, {form.nombre || 'vecino/a'}. Recibimos tu mensaje
                (simulación en frontend; sin envío a servidor en esta semana).
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-1 block font-semibold text-gray-800"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-(--color-primario) focus:outline-none"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="mb-1 block font-semibold text-gray-800"
                  >
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-(--color-primario) focus:outline-none"
                    value={form.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1 block font-semibold text-gray-800"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-(--color-primario) focus:outline-none"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-white transition-colors hover:bg-(--color-primario-hover)"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos
