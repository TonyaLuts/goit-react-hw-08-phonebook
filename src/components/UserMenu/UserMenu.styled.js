import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const Btn = styled.button`
  width: 120px;
  padding: ${p => p.theme.spasing(1.5)};
  border-radius: ${p => p.theme.spasing(1)};
  border: none;
  background-color: ${p => p.theme.color.bg};
  &:hover {
    background-color: ${p => p.theme.color.accent};
  }
`;
