import { useEffect, useState } from "react";
import type { Character } from "./types/api";
import { getCharacters } from "./services/api";
import { ListaElementos } from "./components/ListaElementos";
import { DetalleElemento } from "./components/DetalleElemento";
import { EstadoMensaje } from "./components/EstadoMensaje";
import "./styles/global.css";
import { BarraBusqueda } from "./components/BarraBusqueda";

/**
 * Setup base (paso 0), hecho en conjunto por el equipo:
 * - fetch de la API dentro de useEffect, con data/loading/error tipados
 * - AbortController para cancelar la petición en el cleanup
 * - un "selectedId" simple para alternar entre listado y detalle (RF-04)
 *
 * A partir de aquí cada quien construye su RF asignado (ver los issues
 * del repo). No hace falta que esto quede perfecto: es la base sobre la
 * que se apoyan RF-01 a RF-06, no la implementación final de ninguno.
 */
function App() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setCargando(true);
    setError(null);

    getCharacters(1, controller.signal)
      .then((respuesta) => {
        setPersonajes(respuesta.results);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Error desconocido");
      })
      .finally(() => {
        setCargando(false);
      });

    return () => controller.abort();
  }, []);

  const personajeSeleccionado = personajes.find((p) => p.id === selectedId) ?? null;
  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase()),
  );
  if (cargando) {
    return <EstadoMensaje tipo="cargando" mensaje="Cargando personajes..." />;
  }

  if (error) {
    // TODO (RF-06): pasar onReintentar para volver a disparar la petición
    return <EstadoMensaje tipo="error" mensaje={error} />;
  }

  if (personajeSeleccionado) {
    return (
      <DetalleElemento
        personaje={personajeSeleccionado}
        onVolver={() => setSelectedId(null)}
      />
    );
  }

  return (
    <>
      <h1>Rick and Morty - Explorador de personajes</h1>
      <BarraBusqueda onBuscar={setBusqueda} />
      {personajesFiltrados.length === 0 ? (
        <EstadoMensaje
          tipo="vacio"
          mensaje={
            busqueda !== ""
              ? `No hay personajes que coincidan con "${busqueda}".`
              : "No hay personajes para mostrar."
          }
        />
      ) : (
        <ListaElementos
          personajes={personajesFiltrados}
          onSeleccionar={setSelectedId}
        />
      )}
    </>
  );
}

export default App;
