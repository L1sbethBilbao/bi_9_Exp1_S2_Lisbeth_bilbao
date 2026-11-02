import { Link } from 'react-router'
import PageHeader from '../components/PageHeader.jsx'
import TablaInventario from '../components/TablaInventario.jsx'
import useInventario from '../hooks/useInventario.js'

function Inventario() {
  const { articulos } = useInventario()

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Inventario"
        titulo="Consulta de inventario"
        descripcion="Listado completo de artículos disponibles en el estado global. Cada registro agregado desde el formulario se refleja aquí sin recargar la aplicación."
      />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          Total de artículos: <strong className="text-gray-800">{articulos.length}</strong>
        </p>
        <Link
          to="/agregar-articulo"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-sm text-white transition-colors hover:bg-(--color-primario-hover)"
        >
          Agregar artículo
        </Link>
      </div>

      <TablaInventario articulos={articulos} />
    </section>
  )
}

export default Inventario
