# Bitácora

Cada integrante escribe aquí, el mismo día en que trabaja: qué hizo, con qué
se trabó, cómo lo resolvió, y qué commits corresponden.

## Camilo Molina (@CamiloMolina634)

### [Fecha]
- Qué hice:
- Con qué me trabé:
- Cómo lo resolví:
- Commits relacionados:

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