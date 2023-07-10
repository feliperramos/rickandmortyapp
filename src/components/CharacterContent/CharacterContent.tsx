import React from 'react';

import {
  ImageCharacter,
  Title,
  ContentWrapp,
  ScrollViewEpisodes,
  SubTitle,
  Text,
  Divider
} from './CharacterContent.styles';

import type { Character } from '../../types/Character';

type CharacterProps = {
  results: Character
}

function CharacterContent({ results }: CharacterProps) {
  return (
    <>
      <ImageCharacter source={{ uri: results.image }} />
      <Title>{results.name}</Title>
      <ContentWrapp>
        <ScrollViewEpisodes>
          <SubTitle>Localização</SubTitle>
          <Text>{`Dimensão: ${results.origin.dimension}`}</Text>
          <Text>{`Local: ${results.origin.name}`}</Text>
          <Text>{`Tipo: ${results.origin.type}`}</Text>
          <SubTitle>Episódios</SubTitle>
          {results.episode.map((item, index) => {
            return (
              <>
                <Text>{`Ep: ${item.episode}`}</Text>
                <Text>{`Data: ${item.air_date}`}</Text>
                <Text>{`Nome: ${item.name}`}</Text>
                <Divider />
              </>
            )
          })}
        </ScrollViewEpisodes>
      </ContentWrapp>
    </>
  )
}

export default CharacterContent;
