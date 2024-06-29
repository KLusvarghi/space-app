import styled from "styled-components";
import EstilosGlobais from "./components/EstilogsGlobais";

// criando um component styled
  // definindo como contante - dando o nome - colocando o "styled" da importação - a tag HTMl que queremos interpretar - crase ``
const FundoGradiente = styled.div`
  background: linear-gradient(164.61deg, #041833, #04244F, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return <FundoGradiente>
    <EstilosGlobais/>
  </FundoGradiente>
}

export default App;
