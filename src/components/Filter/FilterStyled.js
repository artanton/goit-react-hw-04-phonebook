import styled from 'styled-components';
export const FilterStyled = styled.input`
  width: 200px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);

  font-size: 16px;
  padding: ${p => p.theme.padding.small};
  margin-bottom: 20px;
`;
