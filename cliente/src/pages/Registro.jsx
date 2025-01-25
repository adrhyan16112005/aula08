import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [descricao, setDescricao] = useState('');

  const navigate = useNavigate();

  const registrar = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch('http://localhost:3000/arranjos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          nome,
          tipo,
          preco: parseFloat(preco),
          dataCriacao,
          disponibilidade,
          descricao
        })
      });

      if (resposta.ok) {
        navigate('/');
      } else {
        alert("Erro ao cadastrar arranjo!");
      }
    } catch (err) {
      alert('Ocorreu um erro na aplicação', err);
    }
  };

  return (
    <main>
      <form onSubmit={registrar}>
        <input type="text" 
        value={nome} 
        placeholder="Nome" 
        onChange={(event) => setNome(event.target.value)} />

        <input type="text" 
        value={tipo} 
        placeholder="Tipo" 
        onChange={(event) => setTipo(event.target.value)} />

        <input type="number" 
        value={preco} 
        placeholder="Preço" 
        onChange={(event) => setPreco(event.target.value)} />

        <input type="date" 
        value={dataCriacao} 
        onChange={(event) => setDataCriacao(event.target.value)} />

        <input type="text" 
        value={disponibilidade} 
        placeholder="Disponibilidade"
        onChange={(event) => setDisponibilidade(event.target.value)} />

        <input type="text" 
        value={descricao} 
        placeholder="Descrição" 
        onChange={(event) => setDescricao(event.target.value)} />

        
        <button type="submit">Registrar</button>
      </form>
    </main>
  );
}
