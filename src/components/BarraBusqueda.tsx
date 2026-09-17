import { useEffect, useState } from "react";

interface BarraBusquedaProps {
  onBuscar: (texto: string) => void;
}

/**
 * RF-03: input controlado que avisa al padre 400 ms después de que el usuario
 * deja de escribir. El retardo se hace a mano con setTimeout dentro de un
 * useEffect, y se limpia con clearTimeout. Sin librerías de debounce.
 */
export const BarraBusqueda = ({ onBuscar }: BarraBusquedaProps) => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const temporizador = setTimeout(() => {
      onBuscar(texto);
    }, 400);

    // Si el usuario sigue escribiendo, este cleanup cancela el timer anterior
    // y el efecto vuelve a arrancar uno nuevo. Así solo se busca al parar.
    return () => clearTimeout(temporizador);
  }, [texto]);

  return (
    <input
      className="barra-busqueda"
      type="search"
      placeholder="Buscar personaje..."
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
    />
  );
};