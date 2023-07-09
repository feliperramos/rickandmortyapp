import React from 'react';

import { Container, SearchInput } from './CharacterScreen.styles'

function CharacterScreen() {
  return (
    <Container>
      <SearchInput placeholder="Digite o nome de um personagem" />
    </Container>
  )
}

export default CharacterScreen;
