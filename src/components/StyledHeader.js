import styled from 'styled-components';

export const NavStyle = styled.nav`
  background: linear-gradient(to bottom, #d2b48c, #cd853f);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
`;

export const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
`;

export const AStyle = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #8b4513;
  }
`;
