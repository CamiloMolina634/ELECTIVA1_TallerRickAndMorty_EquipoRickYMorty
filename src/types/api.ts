// Tipos escritos a mano a partir de la respuesta real de
// https://rickandmortyapi.com/api/character y /character/:id
// (verificado el 2026-09-15). Si la API agrega/cambia campos, este archivo
// se actualiza a mano, sin usar `any`.

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterListResponse {
  info: ApiInfo;
  results: Character[];
}
