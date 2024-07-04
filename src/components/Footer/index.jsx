import React from 'react';
import styled from 'styled-components';
import BotaoIcone from '../BotaoIcone';

const FooterEstilizado = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  background-color: #04244F;
  margin-top: 74px;

  p{
    color: #fff;
  }
`;

const IconesSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <IconesSocialMedia>
        <BotaoIcone>
          <img src="/svgIcone/facebook.svg" alt="" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/svgIcone/instagram.svg" alt="" />
        </BotaoIcone>
        <BotaoIcone>
          <img src="/svgIcone/twitter.svg" alt="" />
        </BotaoIcone>
      </IconesSocialMedia>
      <p>Desenvolvido by Lusvarghi</p>
    </FooterEstilizado>
  );
};

export default Footer;
