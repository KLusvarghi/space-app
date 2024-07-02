import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
`;

const ModalZoom = ({ foto }) => {
  return (
    <>
      {/* Aqui ele irá negar duas vezes, se foto existir é "true", então ele irá negar uma vez virando "false" e irá negar de novo virando "true" */}
      {/* E se ele for "false" ele irá negar a primeira vez virando "false" e a segunda ontinuando "false" */}

      {/* tendo que colocar em uma condicional verificando se foto existe, porque inicialmente esse compoennte modalZoom recebe "foto" como null, ai ele quebrará nosso código */}
      {foto && (
        <>
          <Overlay>
            <DialogEstilizado open={!!foto}>
              <Imagem foto={foto} expandida={true} />
              <p>Olá para todos!</p>
              <form method="dialog">
                <button>OK</button>
              </form>
            </DialogEstilizado>
          </Overlay>
        </>
      )}
    </>
  );
};

export default ModalZoom;
