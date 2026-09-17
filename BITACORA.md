# Bitácora

Cada integrante escribe aquí, el mismo día en que trabaja: qué hizo, con qué
se trabó, cómo lo resolvió, y qué commits corresponden.

## Camilo Molina (@CamiloMolina634)

### 15/09/2026
- Qué hice: Hice RF-01 (listado de personajes en tarjetas, mostrando imagen, ubicación, estatus, especie y género de cada uno). Abrí el Pull Request.
- Con qué me trabé: Tuve un bug donde usaba `location` pensando que era la ubicación del personaje, pero en realidad estaba llamando al objeto `location` global del navegador, no `personaje.location`.
- Cómo lo resolví: Entendí la diferencia entre una variable global de JavaScript y una propiedad del objeto `personaje` que recibo como prop; corregí la línea para usar `personaje.location.name`.
- Commits relacionados: "feat: agrega datos del personaje a la tarjeta (status, species, gender, location)"

### 16/09/2026
- Qué hice: Hice RF-04 (vista de detalle al seleccionar un personaje, con botón para volver al listado) y RF-05 (favoritos: estado en `App.tsx` que lee y guarda en `localStorage`, contador visible, y un botón por tarjeta para marcar/desmarcar). Abrí los Pull Requests de ambos.
- Con qué me trabé: En RF-05 me costó entender que cada componente (`ListaElementos`, `TarjetaElemento`) solo puede usar los datos que le llegan explícitamente por props — intenté usar variables de `App.tsx` directamente en los otros archivos y no funcionó. También perdí tiempo porque VS Code me dejó una versión vieja del archivo sin guardar y seguía compilando con el código antiguo.
- Cómo lo resolví: Declaré `esFavorito` y `onToggleFavorito` en la interfaz de props de cada componente, las agregué a la desestructuración de cada función, y en `ListaElementos` calculé el booleano individual de cada tarjeta con `.includes(personaje.id)` en vez de pasar el array completo.
- Commits relacionados: "feat: agrega origen y cantidad de episodios al detalle del personaje", "feat: agrega favoritos con persistencia en localStorage"

## Brahian (@Brahian666)

### 15/09/2026
- Qué hice: Configuré Git, cloné el repositorio y creé mi rama feature/rf02-estados. Hice RF-02: el componente EstadoMensaje ahora muestra un título distinto según el estado (cargando, error, sin resultados) y cada uno tiene un borde de color diferente en el CSS.
- Con qué me trabé: Guardé los cambios y no veía nada distinto en la app.
- Cómo lo resolví: Entendí que ese cuadro solo aparece mientras carga, si hay error o si no hay personajes. Como la API responde rápido, siempre salía directo la lista. El código sí estaba bien.
- Commits relacionados: "feat: muestra titulo distinto segun el tipo de estado", "feat: agrega estilos por estado de la interfaz"