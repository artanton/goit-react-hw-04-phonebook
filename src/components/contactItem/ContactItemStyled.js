import styled from 'styled-components';
export const PhoneNoItem = styled.div`
  display: flex;

  gap: ${p => p.theme.gap.big};
`;

export const DeleteButton = styled.button`
  width: 50px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
