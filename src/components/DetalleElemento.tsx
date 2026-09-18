import type { Character } from "../types/api";

interface DetalleElementoProps {
  personaje: Character;
  onVolver: () => void;
}

/**
 * RF-04: información adicional del personaje (episodios, ubicación, origen...)
 * y una forma de volver al listado sin recargar la página.
 * TODO (equipo): completar el contenido del detalle.
 */
export const DetalleElemento = ({ personaje, onVolver }: DetalleElementoProps) => {
  return (
    <section className="detalle-elemento">
      <button type="button" onClick={onVolver}>
        ← Volver al listado
      </button>
      <h2>{personaje.name}</h2>
      <p>Origen: {personaje.origin.name}</p>
      <p>Episodios: {personaje.episode.length}</p>
    </section>
  );
};
