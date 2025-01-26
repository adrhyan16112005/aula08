import React, { useState } from 'react';

const Cadastrar = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    preco: '',
    dataCriacao: '',
    disponibilidade: '',
    descricao: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://sua-api-endpoint.com/arranjos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar os dados. Verifique o servidor.');
      }

      const resultado = await response.json();
      alert('Arranjo cadastrado com sucesso!');
      console.log('Resposta da API:', resultado);

      // Resetando o formulário
      setFormData({
        nome: '',
        tipo: '',
        preco: '',
        dataCriacao: '',
        disponibilidade: '',
        descricao: ''
      });
    } catch (erro) {
      console.error('Erro:', erro);
      alert('Ocorreu um erro ao tentar salvar o arranjo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="formCadastro">
      <label>
        Nome:
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </label>
      <label>
        Tipo:
        <input type="text" name="tipo" value={formData.tipo} onChange={handleChange} />
      </label>
      <label>
        Preço:
        <input type="number" name="preco" value={formData.preco} onChange={handleChange} />
      </label>
      <label>
        Data de Criação:
        <input type="date" name="dataCriacao" value={formData.dataCriacao} onChange={handleChange} />
      </label>
      <label>
        Disponibilidade:
        <input type="text" name="disponibilidade" value={formData.disponibilidade} onChange={handleChange} />
      </label>
      <label>
        Descrição:
        <textarea name="descricao" value={formData.descricao} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastrar;
