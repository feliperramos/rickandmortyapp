import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary[400]};
  background-color: ${({ theme }) => theme.colors.dark_surface[300]};
  margin: 8px;
  border-radius: 4px;
  min-width: 300px;
  max-width: 324px;
  padding: 8px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary[200]};
`;

export const Info = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CharacterWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const SeeMore = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary[100]};
`;

export const ModalWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ModalWrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark_surface_mixed[200]};
  border-radius: 8px;
  padding-vertical: 32px;
  padding-horizontal: 16px;
`;
