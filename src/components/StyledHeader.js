import styled from 'styled-components';

export const NavStyle = styled.nav`
  background: linear-gradient(to bottom, #d2b48c, #cd853f);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 50px;
  position: relative;

  .menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    height: auto;

    .menu-toggle {
      display: block;
      position: absolute;
      top: 15px;
      right: 20px;
    }
  }
`;

export const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    &.open {
      max-height: 500px;
      opacity: 1;
      padding-top: 50px;
    }
  }
`;
