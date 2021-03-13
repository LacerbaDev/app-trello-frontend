import styled from '@emotion/styled';

const StyledNav = styled.nav`
  background-color: black;
  color: white;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  .spacer {
    flex-grow: 1;
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <p>Lacerba d&d</p>
    </StyledNav>
  );
};
