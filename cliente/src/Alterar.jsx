import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Alterar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [processando, setProcessando] = useState(false);

  useEffect(() => {
    const buscarArranjo = async () => {
      try {
        setCarregando(true);
        const resposta = await fetch(`http://localhost:3000/arranjos/${id}`);
        if (resposta.ok) {
          const arranjo = await resposta.json();
          setNome(arranjo.nome || '');
          setPreco(arranjo.preco || '');
          setDescricao(arranjo.descricao || '');
        } else {
          alert('Não foi possível carregar os detalhes do arranjo.');
        }
      } catch (err) {
        alert('Erro ao buscar os detalhes: ' + err.message);
      } finally {
        setCarregando(false);
      }
    };
    buscarArranjo();
  }, [id]);

  const alterarArranjo = async (event) => {
    event.preventDefault();

    if (!nome || !preco || !descricao) {
      alert('Preencha todos os campos antes de salvar.');
      return;
    }

    try {
      setProcessando(true);
      const resposta = await fetch(`http://localhost:3000/arranjos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          preco: parseFloat(preco),
          descricao,
        }),
      });

      if (resposta.ok) {
        alert('Arranjo atualizado com sucesso!');
        navigate('/'); // Redireciona para a página principal
      } else {
        alert('Erro ao atualizar o arranjo.');
      }
    } catch (err) {
      alert('Erro ao tentar atualizar o arranjo: ' + err.message);
    } finally {
      setProcessando(false);
    }
  };

  if (carregando) {
    return <p>Carregando dados do arranjo...</p>;
  }

  return (
    <main>
      <h1>Alterar Arranjo de Flores</h1>
      <form onSubmit={alterarArranjo}>
        <section>
          <label>Nome do Arranjo:</label>
          <input
            type="text"
            value={nome}
            placeholder="Digite o nome do arranjo"
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </section>
        <section>
          <label>Preço (R$):</label>
          <input
            type="number"
            value={preco}
            placeholder="Digite o preço"
            onChange={(e) => setPreco(e.target.value)}
            step="0.01"
            required
          />
        </section>
        <section>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            placeholder="Digite a descrição do arranjo"
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>
        </section>
        <button type="submit" disabled={processando}>
          {processando ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </form>
    </main>
  );
}
