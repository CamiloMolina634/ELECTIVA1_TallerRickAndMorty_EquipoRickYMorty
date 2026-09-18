import type { Character } from "../types/api";
import { TarjetaElemento } from "./TarjetaElemento";

interface ListaElementosProps {
  personajes: Character[];
  onSeleccionar: (id: number) => void;
  favoritos: number[];
  onToggleFavorito: (id: number) => void;
}

/** RF-01: recorre `personajes` y renderiza una `TarjetaElemento` por cada uno. */
export const ListaElementos = ({ personajes, onSeleccionar, favoritos, onToggleFavorito }: ListaElementosProps) => {
  return (
    <ul className="lista-elementos">
      {personajes.map((personaje) => (
        <TarjetaElemento
          key={personaje.id}
          personaje={personaje}
          onSeleccionar={onSeleccionar}
          esFavorito={favoritos.includes(personaje.id)}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </ul>
  );
};