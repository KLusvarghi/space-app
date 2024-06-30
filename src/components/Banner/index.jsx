import styled from 'styled-components';

const BannerEstilziado = styled.figure``;

const TituloEstilizado = styled.h1``;

export const Banner = ({ txt, backgroundImage }) => {
  return (
    <BannerEstilziado >
      <TituloEstilizado>{txt}</TituloEstilizado>
    </BannerEstilziado>
  );
};

export default Banner;
