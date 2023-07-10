import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: Roboto;
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

export const LoadingWrapp = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLoading = styled.Image`
  width: 80px;
  height: 200px;
`

export const ImageWait = styled.Image`
  width: 320px;
  height: 280px;
`;

export const TextWait = styled.Text`
  font-size: 16px;
  font-weight: ${({theme}) => theme.fonts.weight.bolder};
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;
