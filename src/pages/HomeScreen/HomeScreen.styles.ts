import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  margin: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 8px;
`

export const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  color: ${({ theme }) => theme.colors.dark_surface[100]};
  width: 180px;
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary[100]};
  border-radius: 8px;
  margin: 8px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: 18px;
  text-transform: uppercase;
`;

export const Image = styled.Image`
  width: 360px;
  height: 203px;
`;
