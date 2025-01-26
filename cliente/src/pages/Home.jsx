import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos"; 

export default function Home() {
  const [arranjos, setArranjos] = useState([]);
  const [filtros, setFiltros] = useState({
    nome: "",
    tipo: "",
    precoMin: "",
    precoMax: "",
  });

  useEffect(() => {
    const buscarArranjos = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/arranjos');
        if (resposta.ok) {
          const dados = await resposta.json();
          setArranjos(dados);
        } else {
          alert('Erro ao buscar os arranjos.');
        }
      } catch (err) {
        alert('Erro de conexão com o servidor.');
      }
    };
    buscarArranjos();
  }, []);


  const filtrarArranjos = () => {
    return arranjos.filter((arranjo) => {
      return (
        (filtros.nome ? arranjo.nome.toLowerCase().includes(filtros.nome.toLowerCase()) : true) &&
        (filtros.tipo ? arranjo.tipo.toLowerCase().includes(filtros.tipo.toLowerCase()) : true) &&
        (filtros.precoMin ? arranjo.preco >= parseFloat(filtros.precoMin) : true) &&
        (filtros.precoMax ? arranjo.preco <= parseFloat(filtros.precoMax) : true)
      );
    });
  };

 
  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main>
      <div>
        <h1>Filtros</h1>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={filtros.nome}
            onChange={handleFiltroChange}
            placeholder="Filtrar por nome"
          />
        </label>
        <label>
          Tipo:
          <input
            type="text"
            name="tipo"
            value={filtros.tipo}
            onChange={handleFiltroChange}
            placeholder="Filtrar por tipo"
          />
        </label>
        <label>
          Preço Mínimo:
          <input
            type="number"
            name="precoMin"
            value={filtros.precoMin}
            onChange={handleFiltroChange}
            placeholder="Filtrar por preço mínimo"
          />
        </label>
        <label>
          Preço Máximo:
          <input
            type="number"
            name="precoMax"
            value={filtros.precoMax}
            onChange={handleFiltroChange}
            placeholder="Filtrar por preço máximo"
          />
        </label>
      </div>

      <ListaProdutos produtos={filtrarArranjos()} />
    </main>
  );
}
