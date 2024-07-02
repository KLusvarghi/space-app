import styled from 'styled-components';
import tags from './tags.json';

const Container = styled.section`
  display: flex;
  align-items: center;
  padding-top: 56px;
  gap: 64px;

  font-size: 24px;
  font-weight: 28px;
`;

const TagTitulo = styled.p`
  color: #d9d9d9;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
`;

const Tag = styled.button`
  color: #fff;
  background: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  padding: 12px;

  transition: background-color 0.3s ease;
  box-sizing: border-box;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <Container>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </Div>
    </Container>
  );
};
export default Tags;
