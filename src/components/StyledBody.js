import styled from 'styled-components';
import BgBenner from './cover3.webp';

/* =======================
   BENNER
======================= */
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

  @media (max-width: 768px) {
    padding: 0 40px;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    text-align: center;
  }
`;

export const BennerText = styled.div`
  font-size: 3.4rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
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
  margin-top: 20px;

  &:hover {
    background: #CD853F;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* =======================
   ABOUT
======================= */
export const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 50px 100px;
  background-color: #f8ece0;

  @media (max-width: 768px) {
    padding: 40px 40px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;

export const AboutHeading = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

/* =======================
   MENU
======================= */
export const MenuStyle = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: burlywood;
`;

export const MenuHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #000;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MenuItem = styled.div`
  width: 200px;
  border: 1px solid #7f5a47;
  border-radius: 8px;
  padding: 10px;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px #7f5a47;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const MenuTitle = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
`;

/* =======================
   SHOP
======================= */
export const ShopStyle = styled.section`
  background-color: rgb(243, 200, 145);
  padding: 40px 20px;
`;

export const ShopHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #000;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CoffeeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CoffeeDetailStyle = styled.div`
  width: 200px;
  border: 1px solid #7f5a47;
  border-radius: 8px;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 5px #7f5a47;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CoffeeImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CoffeeTitle = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
`;

/* =======================
   CONTACT
======================= */
export const ContactSection = styled.section`
  background-color: #e6c19c;
  border-radius: 10px;
  padding: 30px 100px;
  margin: 40px auto;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    margin: 20px;
  }
`;

export const ContactHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 5px solid #7f5a47;
  padding: 20px;
  border-radius: 10px;
`;

/* =======================
   TESTIMONI
======================= */
export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 20px;
  background-color: #ffe4ad;

  .box {
    background: #d2b48c;
    border-radius: 0.5rem;
    padding: 20px;
    text-align: center;
  }
`;

export const TestiForm = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input, textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  input[type='submit'] {
    background-color: #f9d3af;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
`;
