import React, { useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { useQuery } from "@apollo/client";
import type { SearchTerms } from '../types';
import type { Character } from '../../types/Character';
import type { Episode } from '../../types/Episode';

import { Container, SearchInput, Text } from './SearchScreen.styles'
import { SearchItem } from '../../components';

import { GET_CHARACTERS } from "../../graphql/characters";
import { getScreenName } from '../../utils/getScreenName';
import { GET_EPISODES } from '../../graphql/episodes';

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

  const whichQuery = (screen: string) => {
    if (screen === 'characters')
      return GET_CHARACTERS
    else
      return GET_EPISODES
  }

  const { loading, data } = useQuery(whichQuery(screen), { variables: { name: search } })

  const handleSearch = (text: string) => {
    if (text.length > 2) {
      setSearch(text)
    }
    return null;
  }

  const keyExtractor = (item: Character, index: number) => item.name + index.toString();

  const renderItem: ListRenderItem<Character | Episode> = ({ item }) => {
    let resultsProp: Character | Episode;

    if (screen === 'characters') {
      resultsProp = item as Character;
    } else {
      resultsProp = item as Episode;
    }

    return <SearchItem<'character' | 'episode'> results={resultsProp} />
  }
  // <SearchItem<{ [key in typeof screen]: key extends 'characters' ? 'character' : 'episode' }[typeof screen]> results={item} />

  const resultText = () => `Encontramos ${data && data[screen].info.count} personagens para o termo: ${search}`;


  return (
    <Container>
      <SearchInput
        onChangeText={(text: string) => handleSearch(text)}
        placeholderTextColor="#fff"
        placeholder={`Digite o nome de um ${getScreenName(screen)}`}
      />


      {loading &&
        <ActivityIndicator size="large" color="#00b5cc" />
      }
      {data && data[screen] &&
        (<>
          <Text>{resultText()}</Text>
          <FlatList data={data[screen].results} keyExtractor={keyExtractor} renderItem={renderItem} />
        </>)
      }
    </Container>
  )
}

export default SearchScreen;
