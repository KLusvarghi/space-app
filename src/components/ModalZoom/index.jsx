import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';
import BotaoIcone from '../BotaoIcone';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
  position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {/* Aqui ele irá negar duas vezes, se foto existir é "true", então ele irá negar uma vez virando "false" e irá negar de novo virando "true" */}
      {/* E se ele for "false" ele irá negar a primeira vez virando "false" e a segunda ontinuando "false" */}

      {/* tendo que colocar em uma condicional verificando se foto existe, porque inicialmente esse compoennte modalZoom recebe "foto" como null, ai ele quebrará nosso código */}
      {foto && (
        <>
          <Overlay >
            <DialogEstilizado open={!!foto} onClose={aoFechar}>
              <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
              <form method="dialog">
                <BotaoIcone formMethod="dialog" onClick={aoFechar}>
                  <img src="/icones/fechar.png" alt="Icone de fechar" />
                </BotaoIcone>
              </form>
            </DialogEstilizado>
          </Overlay>
        </>
      )}
    </>
  );
};

export default ModalZoom;
