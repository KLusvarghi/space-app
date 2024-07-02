import styled from 'styled-components';
import EstilosGlobais from './components/EstilogsGlobais';
import Cabecalho from './components/Cabecalho';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';
import backgroundImage from './assets/banner.png';
import Galeria from './components/Galeria';
import fotos from './fotos.json'
import { useState } from 'react';
import ModalZoom from './components/ModalZoom';


// criando um component styled
// definindo como contante - dando o nome - colocando o "styled" da importação - a tag HTMl que queremos interpretar - crase ``
const FundoGradiente = styled.div`
  background: linear-gradient(164.61deg, #041833, #04244f, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%; //para que ele não tenha um tamanho maior que a tela "1440px" e quebre o layout
  margin: 0 auto; // se a tela for maior que 1440px ele irá centralizar o contaienr no centro
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1; //para que cresca donforme o espaço disponivel
`;

const App = () => {
  const [fotosGaleria , setFotosGaleria] = useState(fotos)
  const [fotoSelecionada , setFotosSelecionada] = useState(null)

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              txt="A galeria mais completa de fotos do espaço!"
              backgroundImage={backgroundImage}
            />
            {/*  */}
            <Galeria fotos={fotosGaleria} aoFotoSelecionada={foto => setFotosSelecionada(foto)}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada}/>
    </FundoGradiente>
  );
}

export default App;
