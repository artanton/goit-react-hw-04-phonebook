import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const FormStyled = styled(Form)`
  width: 400px;
  margin-bottom: 40px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.norm};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  padding: ${p => p.theme.padding.big};
  display: flex;
  flex-direction: column;
`;

export const FieldGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.gap.small};
  height: 70px;
  margin-bottom: 20px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  padding: 0;
  color: red;
  font-size: 12px;
`;
export const FieldStyled = styled(Field)`
  width: 300px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 150px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
