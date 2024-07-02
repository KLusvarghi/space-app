import Titulo from '../Titulo';
import Tags from './Tags';
import styled from 'styled-components';
import Populares from './Populares';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
  display: flex;
`;

const SessaoFLuida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  //dando um valor padrão caso "fotos" venha vazio
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFLuida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem key={foto.id} foto={foto} />
            ))}
          </ImagensContainer>
        </SessaoFLuida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
