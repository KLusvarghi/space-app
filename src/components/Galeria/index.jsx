import Titulo from '../Titulo';
import Tags from './Tags';
import styled from 'styled-components';
import Populares from './Populares';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
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

// recebendo "aoFotoSelecionada" do APP.jsx que será o componente que conterá a foto selecionada para abrir o modal
const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  //dando um valor padrão caso "fotos" venha vazio
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFLuida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              // passando para o compoennte "imagem" a "aoFotoSelecionada" pela props "aoZoomSolicitado" que lá no componente "imagem" ele irá retornar a foto que foi clicada
              <Imagem
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SessaoFLuida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
