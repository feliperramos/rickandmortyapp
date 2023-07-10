import React, { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';

import { Container, Title, SeeMore, Info, CharacterWrapper } from './SearchItem.styles';
import { ModalContent } from '../ModalContent/ModalContent';

import type { Character } from '../../types/Character'
import type { Episode } from '../../types/Episode';

type SearchItemProps<T extends 'character' | 'episode'> = {
  [key: string]: T extends 'character' ? Character : Episode;
}

function SearchItem<T extends 'character' | 'episode'>({ results }: SearchItemProps<T>) {
  const [modalVisibility, setModalVisibility] = useState(false)

  const getInfoData = (results: any) => {
    if (results.origin) {
      return results.origin.name;
    }

    else if (results.air_date) {
      return results.air_date
    }
  }

  const renderModal = (results: any) => {
    let resultProps: Character | Episode;

    if (results.origin) {
      resultProps = results as Character;
    } else {
      resultProps = results as Episode;
    }
    return (
      <ModalContent
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        results={resultProps}
      />
    );
  }

  return (
    <Container>
      <CharacterWrapper>
        <Title>{results.name}</Title>
        <Info>{getInfoData(results)}</Info>
      </CharacterWrapper>

      <TouchableOpacity onPress={() => setModalVisibility(!modalVisibility)}>
        <SeeMore>Veja mais</SeeMore>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(!modalVisibility)}
      >
        {renderModal(results)}
      </Modal>
    </Container>
  );
}

export default SearchItem;
