# ELECTIVA1_TallerRickAndMorty_EquipoRickYMorty

**Materia:** Electiva 1

**Nombre del proyecto:** Taller Rick and Morty - Explorador de Personajes

**Equipo:** EquipoRickYMorty

**Integrantes:**
- Camilo Molina Alvarez — [@CamiloMolina634](https://github.com/CamiloMolina634)
- Brahian Montoya Obando — [@Brahian666](https://github.com/Brahian666)

## Descripción

Aplicación web construida con Vite + React + TypeScript que consume la
[Rick and Morty API](https://rickandmortyapi.com/documentation) (pública, gratuita,
sin API key). Permite listar personajes, buscar, ver el detalle de cada uno,
marcar favoritos y maneja los distintos estados de la petición (carga, error,
vacío y éxito).

## Requerimientos

- Node.js 18 o superior
- npm
- React 19
- TypeScript
- Vite

## Cómo levantar el proyecto

```bash
git clone https://github.com/CamiloMolina634/ELECTIVA1_TallerRickAndMorty_EquipoRickYMorty.git
cd ELECTIVA1_TallerRickAndMorty_EquipoRickYMorty
npm install
npm run dev
```

## Estructura del proyecto

```
src/
  types/api.ts        interfaces de la respuesta de la API (Character, etc.)
  services/api.ts      fetch nativo + validación de response.ok
  components/
    ListaElementos.tsx
    TarjetaElemento.tsx
    BarraBusqueda.tsx
    DetalleElemento.tsx
    EstadoMensaje.tsx
  styles/global.css
```

## Estado del proyecto

Proyecto completo. Los 6 requisitos funcionales (RF-01 a RF-06) están implementados,
fusionados a `develop` y probados en el navegador, incluido el estado de error.
Cada uno se desarrolló en su propia rama `feature/rfXX-...`, con su issue y su
Pull Request correspondiente (ver la pestaña Issues y Pull Requests del repositorio
para el detalle y el responsable de cada uno).

## Decisiones técnicas

(Completar solo si usan algún *nice to have*: una librería de peticiones en vez
de `fetch`, o variables de entorno para una API key. Explicar en 8-12 líneas
qué hace por dentro, qué código propio reemplaza y por qué lo eligieron.)

## Licencia

Este proyecto usa la licencia [MIT](./LICENSE).
