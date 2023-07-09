import React, { useState } from 'react';
import { useQuery } from "@apollo/client";

import { Container, SearchInput } from './SearchScreen.styles'
import type { SearchTerms } from '../types';
import { GET_CHARACTERS } from "../../graphql/characters";

import { useCharacter } from '../../hooks/useCharacter';
import { getScreenName } from '../../utils/getScreenName';

interface SearchScreenProps {
  route: {
    params: {
      screen: string;
    }
  }
}

function SearchScreen({ route }: SearchScreenProps) {
  const { screen } = route.params;
  const [search, setSearch] = useState<SearchTerms['search']>('')
  const { data } = useQuery(GET_CHARACTERS, { variables: { name: search } })

  const handleSearch = (text: string) => {
    if (text.length > 2) {
      setSearch(text)
      console.log(data)
    }
    return null;
  }

  return (
    <Container>
      <SearchInput
        onChangeText={(text: string) => handleSearch(text)}
        placeholderTextColor="#fff"
        placeholder={`Digite o nome de um ${getScreenName(screen)}`}
      />
    </Container>
  )
}

export default SearchScreen;
