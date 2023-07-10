import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.secondary[200]};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`

export const ImageCharacter = styled.Image`
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.secondary[100]};
  border-radius: 100px;
`;

export const ContentWrapp = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ContentWrapper = styled.View`
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary[300]};
`;

export const ScrollViewEpisodes = styled.ScrollView`
  height: 400px;
`

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dark_surface[300]};
  margin-vertical: 4px;
`

export const CharacterWrapper = styled.View`
  flex-direction: row;
`

export const CharacterName = styled.Text`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.secondary[200]};
  margin: 12px;
`;
