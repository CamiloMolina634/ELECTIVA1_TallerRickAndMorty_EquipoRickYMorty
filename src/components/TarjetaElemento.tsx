import type { Character } from "../types/api";

interface TarjetaElementoProps {
  personaje: Character;
  onSeleccionar: (id: number) => void;
  // TODO (RF-05): props de favoritos (esFavorito, onToggleFavorito) se agregan aquí
}

/**
 * RF-01: cada tarjeta debe mostrar al menos 3 datos distintos del personaje
 * (ya hay más de 3 disponibles en `Character`: status, species, gender, location...).
 * TODO (equipo): completar el marcado y los estilos.
 */
export const TarjetaElemento = ({ personaje, onSeleccionar }: TarjetaElementoProps) => {
  return (
    <li className="tarjeta-elemento">
      <img src={personaje.image} alt={personaje.name} width={80} height={80} />
      <h3>{personaje.name}</h3>
      {/* TODO: mostrar status, species, gender u otros campos */}
      <button type="button" onClick={() => onSeleccionar(personaje.id)}>
        Ver detalle
      </button>
    </li>
  );
};
