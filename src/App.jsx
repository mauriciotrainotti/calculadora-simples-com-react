import React, { useState } from 'react';
import './App.css'; // Importa o arquivo CSS para adicionar estilo ao componente

// Função principal que define o componente App (Calculadora)
function App() {
  // useState é utilizado para armazenar o estado dos números e do resultado
  const [num1, setNum1] = useState(0); // Estado para armazenar o primeiro número
  const [num2, setNum2] = useState(0); // Estado para armazenar o segundo número
  const [result, setResult] = useState(0); // Estado para armazenar o resultado da operação

  // Função para atualizar o valor de num1 quando o usuário digita no campo
  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value)); // Converte o valor da entrada em número e atualiza o estado
  };

  // Função para atualizar o valor de num2 quando o usuário digita no campo
  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value)); // Converte o valor da entrada em número e atualiza o estado
  };

  // Função que realiza a adição
  const handleAddition = () => {
    setResult(num1 + num2); // Calcula a soma e atualiza o estado de resultado
  };

  // Função que realiza a subtração
  const handleSubtraction = () => {
    setResult(num1 - num2); // Calcula a subtração e atualiza o estado de resultado
  };

  // Função que realiza a multiplicação
  const handleMultiplication = () => {
    setResult(num1 * num2); // Calcula a multiplicação e atualiza o estado de resultado
  };

  // Função que realiza a divisão
  const handleDivision = () => {
    if (num2 !== 0) { // Verifica se o segundo número não é zero para evitar divisão por zero
      setResult(num1 / num2); // Calcula a divisão e atualiza o estado de resultado
    } else {
      setResult("Erro: Divisão por zero"); // Retorna uma mensagem de erro se num2 for zero
    }
  };

  // JSX que define a interface da calculadora
  return (
    <div className="App"> {/* Classe CSS 'App' usada para estilizar o layout */}
      <h1>Calculadora Simples</h1> {/* Título da calculadora */}
      
      {/* Entradas para os dois números */}
      <input type="number" value={num1} onChange={handleNum1Change} /> {/* Campo de entrada para o primeiro número */}
      <input type="number" value={num2} onChange={handleNum2Change} /> {/* Campo de entrada para o segundo número */}
      
      <div className="buttons"> {/* Div para agrupar os botões de operação */}
        {/* Botões para cada operação, chamando suas respectivas funções ao serem clicados */}
        <button onClick={handleAddition}>+</button> {/* Botão de adição */}
        <button onClick={handleSubtraction}>-</button> {/* Botão de subtração */}
        <button onClick={handleMultiplication}>*</button> {/* Botão de multiplicação */}
        <button onClick={handleDivision}>/</button> {/* Botão de divisão */}
      </div>

      {/* Exibição do resultado */}
      <h2>Resultado: {result}</h2> {/* O valor do resultado é exibido aqui */}
    </div>
  );
}

export default App; // Exporta o componente para ser utilizado em outras partes do projeto
