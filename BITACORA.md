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

### 18/09/2026
- Qué hice: Agregué validación con `Array.isArray` a los favoritos guardados en localStorage para que no fallen si el dato guardado no es un arreglo. También corregí el salto de línea final en `ListaElementos.tsx` y `TarjetaElemento.tsx`, y resolví un comentario de revisión de Brahian sobre el detalle del personaje mostrando "Desconocido" en vez de "unknown" cuando la API no trae el origen.
- Con qué me trabé: Al principio los cambios no se guardaban bien en el editor, así que el archivo seguía con el código anterior aunque yo creía haberlo modificado.
- Cómo lo resolví: Usé buscar y reemplazar (Ctrl+H) en vez de editar línea por línea a mano, y confirmé que el punto de "sin guardar" desapareciera de la pestaña antes de seguir.
- Commits relacionados: "fix: valida que favoritos guardado en localStorage sea un arreglo", "style: agrega salto de linea final en componentes", "fix: muestra origen desconocido cuando la API devuelve unknown"

## Brahian (@Brahian666)

### 15/09/2026
- Qué hice: Configuré Git, cloné el repositorio y creé mi rama feature/rf02-estados. Hice RF-02: el componente EstadoMensaje ahora muestra un título distinto según el estado (cargando, error, sin resultados) y cada uno tiene un borde de color diferente en el CSS.
- Con qué me trabé: Guardé los cambios y no veía nada distinto en la app.
- Cómo lo resolví: Entendí que ese cuadro solo aparece mientras carga, si hay error o si no hay personajes. Como la API responde rápido, siempre salía directo la lista. El código sí estaba bien.
- Commits relacionados: "feat: muestra titulo distinto segun el tipo de estado", "feat: agrega estilos por estado de la interfaz"

### 17/09/2026
- Qué hice: Hice RF-03 (búsqueda). Creé el input controlado en BarraBusqueda con un debounce de 400 ms con setTimeout dentro de useEffect y su clearTimeout en la limpieza. En App.tsx agregué el estado de la búsqueda y filtro la lista con filter, y cuando no hay coincidencias se muestra el estado "sin resultados" de RF-02. También revisé y aprobé los PR de Camilo.
- Con qué me trabé: Entender por qué hace falta el clearTimeout y no solo el setTimeout.
- Cómo lo resolví: Vi que el useEffect se vuelve a ejecutar en cada letra, así que sin la limpieza se acumulan timers y la búsqueda se dispara una vez por tecla. Con clearTimeout se cancela el anterior y solo queda el último.
- Commits relacionados: "feat: agrega debounce de 400ms en la barra de busqueda", "feat: filtra el listado por el texto buscado"

### 18/09/2026
- Qué hice: Hice RF-06, el botón de reintentar. El botón lo puse en EstadoMensaje y solo sale cuando hay error. En App.tsx agregué un contador llamado "intento" y lo puse como dependencia del useEffect de la petición, para que al cambiar se vuelva a pedir la información a la API. También revisé y aprobé los PR de Camilo.
- Con qué me trabé: No sabía cómo hacer para que el botón volviera a devolver la petición, porque esa petición está dentro de un useEffect y no se puede llamar directamente desde un botón.
- Cómo lo resolví: Usé un contador. El botón solo le suma uno, y como el useEffect depende de ese número, React vuelve a ejecutarlo solo, y ahí se limpia el error y arranca la petición de nuevo.
- Commits relacionados: "feat: agrega boton de reintento al estado de error", "feat: relanza la peticion al reintentar sin recargar la pagina", "style: agrega estilos del boton de reintento"