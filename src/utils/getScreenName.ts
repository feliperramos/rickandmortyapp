export const getScreenName = (screenName: string) => {
  if (screenName === 'characters')
    return 'personagem';
  return 'episódio'
}

export const getScreen = (title: string) => title === 'characters' ? 'CharacterScreen' : 'EpisodeScreen';
