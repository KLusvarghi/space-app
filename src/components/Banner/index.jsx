import styled from 'styled-components';

const BannerEstilziado = styled.figure`
  background-image: ${prop => `url(${prop.$backgroundImage})`};
  background-repeat: no-repeat;
  flex-grow: 1;
  min-height: 328px;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  border-radius: 20px;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFF;
  max-width: 300px;
  padding-left: 0 64px;
`;

export const Banner = ({ txt, backgroundImage }) => {
  return (
    <BannerEstilziado $backgroundImage={backgroundImage}>
      <TituloEstilizado>{txt}</TituloEstilizado>
    </BannerEstilziado>
  );
};

export default Banner;
