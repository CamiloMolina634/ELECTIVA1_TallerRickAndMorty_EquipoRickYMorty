import type { Character } from "../types/api";

interface TarjetaElementoProps {
  personaje: Character;
  onSeleccionar: (id: number) => void;
  esFavorito: boolean;
  onToggleFavorito: (id: number) => void;
}

/**
 * RF-01: cada tarjeta debe mostrar al menos 3 datos distintos del personaje.
 */
export const TarjetaElemento = ({ personaje, onSeleccionar, esFavorito, onToggleFavorito }: TarjetaElementoProps) => {
  return (
    <li className="tarjeta-elemento">
      <img src={personaje.image} alt={personaje.name} width={80} height={80} />
      <h3>{personaje.name}</h3>
      <p>Ubicación: {personaje.location.name}</p>
      <p>Estatus: {personaje.status}</p>
      <p>Especie: {personaje.species}</p>
      <p>Género: {personaje.gender}</p>
      <button type="button" onClick={() => onToggleFavorito(personaje.id)}>
        {esFavorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
      </button>
      <button type="button" onClick={() => onSeleccionar(personaje.id)}>
        Ver detalle
      </button>
    </li>
  );
};
