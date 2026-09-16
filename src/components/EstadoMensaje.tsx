interface EstadoMensajeProps {
  tipo: "cargando" | "error" | "vacio";
  mensaje: string;
  onReintentar?: () => void;
}

export const EstadoMensaje = ({ tipo, mensaje, onReintentar }: EstadoMensajeProps) => {
  void onReintentar; // TODO (RF-06): botón de reintento

  let titulo = "";
  if (tipo === "cargando") titulo = "⏳ Cargando";
  if (tipo === "error") titulo = "⚠️ Error";
  if (tipo === "vacio") titulo = "🔍 Sin resultados";

  return (
    <div className="estado-mensaje" data-tipo={tipo}>
      <h2>{titulo}</h2>
      <p>{mensaje}</p>
    </div>
  );
};
