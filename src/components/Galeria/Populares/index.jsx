import React from 'react';
import Titulo from '../../Titulo';
import fotosPopulares from './fotos-populares.json';
import styled from 'styled-components';

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  img{
    border-radius: 20px;
    height: 158px;
    width: 212px;
  }
`;

const VerMais = styled.button`
  font-family: 'GandhiSansBold';
  color: #FFF;
  background-color: transparent;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  padding: 14px 29px;


`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="centro">Populares</Titulo>
      <ColunaFotos>
      {fotosPopulares.map((foto) => (
        <img key={foto.id} src={foto.path} alt={foto.alt} />
      ) )}
        <VerMais>Ver mais</VerMais>
      </ColunaFotos>
    </section>
  );
};

export default Populares;
