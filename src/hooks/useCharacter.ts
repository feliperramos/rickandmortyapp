import { useQuery, TypedDocumentNode } from "@apollo/client";

import { GET_CHARACTERS } from "../graphql/characters";

import type { Filter } from '../types/Character';

function fetchCharacters(name: string) {
  const { loading, error, data } = useQuery(GET_CHARACTERS, { variables: { name }});

  console.log(data);

  return { loading, error, data };
}

export const useCharacter = (name: string) => {
  const { loading, error, data } = fetchCharacters(name);

  if (loading) {
    return loading;
  }

  if (error) {
    return error;
  }

  const { info, results } = data?.characters ?? {};

  return { info, results }
} 
