import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { ActivityIndicator, FlatList, Image, ListRenderItem } from 'react-native';

import type { SearchTerms } from '../types';
import type { Character } from '../../types/Character';
import type { Episode } from '../../types/Episode';

import { Container, SearchInput, Text, LoadingWrapp, TextWait, ImageWait, ImageLoading } from './SearchScreen.styles';
import { SearchItem } from '../../components';

import { getScreenName } from '../../utils/getScreenName';
import { GET_CHARACTERS } from "../../graphql/characters";
import { GET_EPISODES } from '../../graphql/episodes';

import LoadingRick from '../../../public/assets/images/loading_rick.gif';
import WaitRick from '../../../public/assets/images/wait_rick_and_Morty.png';

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

  const resultText = () =>
    `Encontramos ${data && data[screen].info.count || 0} ${screen === 'characters' ? 'personagem' : 'episódio'} para o termo: ${search}`;

  return (
    <Container>
      <SearchInput
        onChangeText={(text: string) => handleSearch(text)}
        placeholderTextColor="#fff"
        placeholder={`Digite o nome de um ${getScreenName(screen)}`}
      />

      <LoadingWrapp>
        {loading ?
          (<ImageLoading source={LoadingRick} />) : search.length < 3 ? (
            <>
              <TextWait>Pesquise por algo no botão acima!</TextWait>
              <ImageWait source={WaitRick} />
            </>
          ) : (<></>)
        }
      </LoadingWrapp>

      {search.length > 2 && data && data[screen] &&
        (<>
          <Text>{resultText()}</Text>
          <FlatList data={data[screen].results} keyExtractor={keyExtractor} renderItem={renderItem} />
        </>)
      }
    </Container>
  )
}

export default SearchScreen;
