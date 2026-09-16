import { useEffect, useState } from "react";

interface BarraBusquedaProps {
  onBuscar: (texto: string) => void;
}

/**
 * RF-03: input controlado que dispara `onBuscar` 400ms después de que el
 * usuario deja de escribir. Debe implementarse a mano con `setTimeout`
 * dentro de un `useEffect` (con su función de limpieza). Sin librerías de
 * debounce (lodash.debounce, use-debounce, etc. no están permitidas).
 *
 * TODO (equipo): implementar el useEffect con setTimeout + cleanup.
 */
export const BarraBusqueda = ({ onBuscar }: BarraBusquedaProps) => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    // TODO (RF-03): setTimeout(() => onBuscar(texto), 400) + clearTimeout en
    // el cleanup, para no disparar la busqueda en cada tecla.
    void onBuscar;
  }, [texto]);

  return (
    <input
      type="search"
      placeholder="Buscar personaje..."
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
    />
  );
};
