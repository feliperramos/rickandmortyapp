import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 48px;
  margin-right: 8px;
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  color: ${({ theme }) => theme.colors.secondary[200]};
`;

export const ModalWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ModalWrapper = styled.View`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark_surface_mixed[200]};
  border-radius: 8px;
  padding-vertical: 32px;
  padding-horizontal: 16px;
`;
