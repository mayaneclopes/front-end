import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';

function App() {

  const handleCliqueAqui = () => {
    console.log("Botão 'clique aqui' clicado")
  }

  const handleOutroBotao = () => {
    console.log("Botão 'outro botao' clicado")
  }

  return (
    <div>
      <h1 className="title">Primeiro projeto em ReactJs</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto="Clique aqui" onClickButton={handleCliqueAqui} />
      <Button texto="Outro botão" onClickButton={handleOutroBotao} />
      <Contador></Contador>
    </div>
  );
}

export default App;
