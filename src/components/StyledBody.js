import styled from 'styled-components';
import BgBenner from './cover3.webp';

/* === BENNER === */
export const BennerStyle = styled.section`
  width: 100%;
  min-height: 80vh;
  background-image: url(${BgBenner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
  padding: 0 100px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: 60vh;
  }
`;

export const BennerText = styled.div`
  font-size: 3.4rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;

  h3 {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const ButtonStyle = styled.button`
  padding: 10px 40px;
  border-radius: 0.3rem;
  background: #725a43;
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 20px auto 0;
  display: block;

  &:hover {
    background: #cd853f;
  }

  @media (max-width: 480px) {
    padding: 8px 25px;
    font-size: 0.9rem;
  }
`;

/* === ABOUT === */
export const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 1.5rem;
  padding: 50px 100px;
  background-color: #f8ece0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const AboutHeading = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
  font-size: 1rem;
  margin: 0.5rem 0 1.1rem;
`;

/* === MENU === */
export const MenuStyle = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: burlywood;
`;

export const MenuHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MenuItem = styled.div`
  width: 220px;
  border: 1px solid #7f5a47;
  border-radius: 8px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;

  &:hover {
    box-shadow: 0px 0px 5px 0px #7f5a47;
  }
`;

export const MenuImageContainer = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #7f5a47;
  flex: 1;
`;

export const MenuImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MenuTitle = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
`;

export const BuyButton = styled(ButtonStyle)`
  background-color: #8b4513;
  margin-top: 5px;
`;

/* === SHOP === */
export const ShopStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgb(243, 200, 145);
  padding: 40px 10px;
`;

export const ShopHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

/* === CONTACT === */
export const ContactHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ContactSection = styled.section`
  background-color: #e6c19c;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 100px;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  padding: 20px;
  border: 3px solid #7f5a47;
`;

/* === TESTIMONI === */
export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 20px;
  background-color: #ffe4ad;
  text-align: center;

  .box {
    padding: 20px;
    border-radius: 0.5rem;
    background: #d2b48c;
  }
`;

export const TestiForm = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type='text'],
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
`;
