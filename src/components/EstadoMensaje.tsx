interface EstadoMensajeProps {
  tipo: "cargando" | "error" | "vacio";
  mensaje: string;
  onReintentar?: () => void;
}

/**
 * RF-02 (estados) y RF-06 (reintento) se resuelven principalmente aquí.
 * TODO (equipo): mostrar contenido distinto según `tipo` y, si `tipo === "error"`
 * y viene `onReintentar`, renderizar el botón de reintento.
 */
export const EstadoMensaje = ({ tipo, mensaje, onReintentar }: EstadoMensajeProps) => {
  void onReintentar; // TODO (RF-06): renderizar el boton de reintento cuando tipo === "error"
  return (
    <div className="estado-mensaje" data-tipo={tipo}>
      <p>{mensaje}</p>
      {/* TODO: botón de reintento cuando tipo === "error" */}
    </div>
  );
};
