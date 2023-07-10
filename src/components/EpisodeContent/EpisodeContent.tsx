import React from 'react';

import {
  ImageCharacter,
  Title,
  ContentWrapp,
  ScrollViewEpisodes,
  SubTitle,
  Text,
  Divider,
  CharacterWrapper,
  CharacterName
} from './EpisodeContent.styles';

import type { Episode } from '../../types/Episode';

type EpisodeContentProps = {
  results: Episode
}

function EpisodeContent({ results }: EpisodeContentProps) {
  return (
    <>
      <Title>{`${results.episode} - ${results.name}`}</Title>
      <Text>{`Data de Lançamento: ${results.air_date}`}</Text>

      <Divider />

      <SubTitle>Personagens neste episódio</SubTitle>
      <ContentWrapp>
        <ScrollViewEpisodes>
          {results.characters.map((item, index) => {
            return (
              <>
                <Divider />
                <CharacterWrapper>
                  <ImageCharacter source={{ uri: item.image }} />
                  <CharacterName>{item.name}</CharacterName>
                </CharacterWrapper>

                <SubTitle>Localização</SubTitle>
                <Text>{`Dimensão: ${item.origin.dimension}`}</Text>
                <Text>{`Local: ${item.origin.name}`}</Text>
                <Text>{`Tipo: ${item.origin.type}`}</Text>
              </>
            )
          })}
        </ScrollViewEpisodes>
      </ContentWrapp>
    </>
  );
}

export default EpisodeContent;
