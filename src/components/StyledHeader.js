import styled from 'styled-components';

export const NavStyle = styled.nav`
  background: linear-gradient(to bottom, #D2B48C, #CD853F);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 80px;

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
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AStyle = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #8B4513;
  }
`;
