useEffect(() => {
  const buscarArranjos = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/arranjos");
      if (resposta.ok) {
        const dados = await resposta.json();
        setArranjos(dados);
      } else {
        alert('Erro ao buscar os arranjos.');
      }
    } catch {
      alert('Erro de conexão com o servidor.');
    }
  };

  buscarArranjos();
}, []);
