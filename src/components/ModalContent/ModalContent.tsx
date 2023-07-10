import React from "react";
import { TouchableOpacity } from 'react-native'

import {
  ModalWrap,
  ModalWrapper,
  Title
} from "./ModalContent.styles";

import CharacterContent from '../CharacterContent/CharacterContent'
import EpisodeContent from '../EpisodeContent/EpisodeContent'

import type { Character } from '../../types/Character'
import type { Episode } from '../../types/Episode'

interface ModalContentProps<T extends 'character' | 'episode'> {
  modalVisibility: boolean;
  setModalVisibility: (value: boolean) => void;
  results: T extends 'character' ? Character : Episode;
}

type ModalContentExtends<T extends 'character' | 'episode'> = ModalContentProps<T>;

function isCharacter(obj: any): obj is Character {
  return obj.hasOwnProperty('image', 'origin');
}

function isEpisode(obj: any): obj is Episode {
  return obj.hasOwnProperty('air_date', 'episode', 'characters');
}

export function ModalContent<T extends 'character' | 'episode'>({ modalVisibility, setModalVisibility, results }: ModalContentExtends<T>) {
  return (
    <ModalWrap>
      <TouchableOpacity
        onPress={() => setModalVisibility(!modalVisibility)}>
        <Title>X</Title>
      </TouchableOpacity>
      <ModalWrapper>
        {isCharacter(results) &&
          (<CharacterContent results={results} />)
        }
        {isEpisode(results) &&
          (<EpisodeContent results={results} />)
        }
      </ModalWrapper>
    </ModalWrap>
  )
}
