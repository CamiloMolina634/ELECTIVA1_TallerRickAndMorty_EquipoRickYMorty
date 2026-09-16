# Taller Rick and Morty

Aplicación construida con Vite + React + TypeScript que consume la
[Rick and Morty API](https://rickandmortyapi.com/documentation) (pública, gratuita,
sin API key).

## Integrantes

- Camilo Molina — [@CamiloMolina634](https://github.com/CamiloMolina634)
- Brahian — [@Brahian666](https://github.com/Brahian666) <!-- TODO: confirmar usuario exacto -->

## Cómo levantar el proyecto

```bash
git clone https://github.com/CamiloMolina634/taller-rick-and-morty.git
cd taller-rick-and-morty
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

Este README arranca con el setup base (tipos + servicio + wiring mínimo en
`App.tsx`). Cada requisito funcional (RF-01 a RF-06) se implementa en su propia
rama `feature/rfXX-...`, con su propio issue y Pull Request. Ver los issues del
repositorio para el detalle y el responsable de cada uno.

## Decisiones técnicas

(Completar solo si usan algún *nice to have*: una librería de peticiones en vez
de `fetch`, o variables de entorno para una API key. Explicar en 8-12 líneas
qué hace por dentro, qué código propio reemplaza y por qué lo eligieron.)
