import React from 'react';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackList } from '../types';
import { Button, Container, Text, Title, ButtonWrapper, Image } from './HomeScreen.styles';
import Logo from '../../../public/assets/images/rickandmorty_logo.png';

type HomeScreenProps = StackNavigationProp<RootStackList, "Home">;

function Home() {
  const { navigate } = useNavigation<HomeScreenProps>();

  const goToCharacterScreen = () => navigate("SearchScreen", { screen: 'characters' });
  const goToEpisodeScreen = () => navigate("SearchScreen", { screen: 'episodes' });

  return (
    <Container>
      <Image source={Logo} />
      <Title>O que deseja buscar?</Title>
      <ButtonWrapper>
        <Button onPress={goToCharacterScreen}>
          <Text>Personagens</Text>
        </Button>
        <Button onPress={goToEpisodeScreen}>
          <Text>Episódios</Text>
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Home;
