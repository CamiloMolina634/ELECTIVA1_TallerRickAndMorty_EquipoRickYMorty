import type { Character, CharacterListResponse } from "../types/api";

const BASE_URL = "https://rickandmortyapi.com/api";

/**
 * Trae una página de personajes (20 por página, ~42 páginas en total).
 * La API también soporta `?name=` para filtrar por nombre en el servidor,
 * útil como alternativa/complemento al filtro de RF-03.
 */
export const getCharacters = async (
  page: number = 1,
  signal?: AbortSignal,
): Promise<CharacterListResponse> => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`, { signal });

  if (!response.ok) {
    throw new Error(`Error al obtener personajes (status ${response.status})`);
  }

  return response.json();
};

export const getCharacterById = async (
  id: number,
  signal?: AbortSignal,
): Promise<Character> => {
  const response = await fetch(`${BASE_URL}/character/${id}`, { signal });

  if (!response.ok) {
    throw new Error(`Error al obtener el personaje ${id} (status ${response.status})`);
  }

  return response.json();
};
