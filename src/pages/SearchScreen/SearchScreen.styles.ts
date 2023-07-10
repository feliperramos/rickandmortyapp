import styled from 'styled-components/native';

export const ScrollView =styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
`;

export const SearchInput = styled.TextInput`
  color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.secondary[100]};
  width: 90%;
  height: 60px;
  border-radius: 8px;
`
export const Text = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  margin: 8px;
`;
