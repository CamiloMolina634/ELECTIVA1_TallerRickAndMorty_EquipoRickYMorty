# Declaración de uso de IA — Camilo Molina Alvarez

**Integrante:** Camilo Molina Alvarez (@CamiloMolina634)
**Fechas del proyecto:** 15 al 19 de septiembre de 2026
**Herramienta utilizada:** Claude (Anthropic), a través de la interfaz de Claude Code / Claude Chat

## En qué usé la IA

- **Estructura del proyecto y componentes:** consulté cómo pasar props entre `App.tsx`, `ListaElementos.tsx` y `TarjetaElemento.tsx` para conectar el estado de favoritos (RF-05), y cómo tipar correctamente esas props en TypeScript.

- **localStorage:** consulté cómo leer y guardar el arreglo de favoritos en `localStorage` (uso de `useState` con función inicializadora, `JSON.parse`/`JSON.stringify`, y por qué había que validar con `Array.isArray` para que no fallara si el dato guardado no era un arreglo).

- **CSS:** consulté qué propiedades usar para darle estilo a las tarjetas (`.tarjeta-elemento`), a la vista de detalle (`.detalle-elemento`) y al buscador (`.barra-busqueda`), incluyendo el efecto hover y el ajuste responsive con `@media`.

- **Depuración:** cuando me salían errores de TypeScript (props faltantes, tipos no coincidentes), le pregunté a la IA qué significaba el error para poder corregirlo yo mismo.

- **Flujo de Git/GitHub:** consulté cómo resolver un conflicto de merge entre las ramas de favoritos y búsqueda, cómo crear Pull Requests correctamente apuntando a `develop`, y cómo organizar issues y asignaciones en el repositorio.

- **Documentación:** usé apoyo de la IA para redactar la bitácora y las respuestas de la plantilla de Pull Request a partir de lo que yo le conté que había hecho y con qué me había trabado.


## Brahian (@Brahian666)

### 15/09/2026
- Consulté por qué no veía cambios en pantalla: entendí que ese componente solo
  se muestra en los estados de carga, error o sin resultados.
- Uso de las herramientas de desarrollador del navegador (F12), pestaña Network, para
  simular una conexión lenta y observar el estado de carga.

### 17/09/2026
- Qué pasa si se omite la limpieza del temporizador: acumulación de timers
- Qué es un input controlado en React: relación entre value, onChange y useState.
- El arreglo de dependencias de useEffect y cuándo se ejecuta la función de limpieza.
- Qué es el debounce y en qué se diferencia de otras formas de esperar.

### 18/09/2026
- Por qué un useEffect con dependencias vacías no se puede invocar desde un botón.
- Cómo un estado contador usado como dependencia permite volver a ejecutar un efecto.
- Cómo forzar un error de red modificando temporalmente la URL, para poder probar el
  estado de error.
  - Por qué conviene unificar dos reglas CSS con el mismo selector en vez de dejarlas
  separadas en el archivo


