import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: ${p => p.theme.spasing(10)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.spasing(5)};
`;
