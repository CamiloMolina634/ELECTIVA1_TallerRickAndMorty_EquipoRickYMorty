import { useEffect, useState } from "react";
import type { Character } from "./types/api";
import { getCharacters } from "./services/api";
import { ListaElementos } from "./components/ListaElementos";
import { DetalleElemento } from "./components/DetalleElemento";
import { EstadoMensaje } from "./components/EstadoMensaje";
import { BarraBusqueda } from "./components/BarraBusqueda";
import "./styles/global.css";


function App() {
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [intento, setIntento] = useState(0);
  const [favoritos, setFavoritos] = useState<number[]>(() => {
  const guardado = localStorage.getItem("favoritos");
  if (guardado) {
    try {
      return JSON.parse(guardado);
    } catch {
      return [];
    }
  }
  return [];
});

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

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
  }, [intento]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.includes(id)) {
        return prevFavoritos.filter((favId) => favId !== id);
      } else {
        return [...prevFavoritos, id];
      }
    });
  };

  const personajeSeleccionado = personajes.find((p) => p.id === selectedId) ?? null;
  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  if (cargando) {
    return <EstadoMensaje tipo="cargando" mensaje="Cargando personajes..." />;
  }

  if (error) {
    return (
      <EstadoMensaje
        tipo="error"
        mensaje={error}
        onReintentar={() => setIntento((anterior) => anterior + 1)}
      />
    );
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
      <p>Favoritos: {favoritos.length}</p>
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
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />
      )}
    </>
  );
}

export default App;