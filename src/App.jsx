import { Routes, Route } from 'react-router'
import InventarioProvider from './context/InventarioProvider.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contactanos from './pages/Contactanos.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import ComoComprar from './pages/ComoComprar.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import Inventario from './pages/Inventario.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

function App() {
  return (
    <InventarioProvider>
      <div className="flex min-h-screen flex-col">
        <Navigation />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/como-comprar" element={<ComoComprar />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/agregar-articulo" element={<AgregarArticulo />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </InventarioProvider>
  )
}

export default App
