import styles from '../styles/listaProdutos.module.css';

export default function ListaProdutos({ produtos }) {
  return (
    <ul className={styles.bloco}>
      {produtos && produtos.length > 0 ? (
        produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.nome || produto.title || 'Título não disponível'}</h2>
            <p><strong>Tipo:</strong> {produto.tipo || 'Tipo não disponível'}</p>
            <p><strong>Preço:</strong> R${produto.preco?.toFixed(2) || produto.price || 'Preço não disponível'}</p>
            <p><strong>Data de Criação:</strong> {produto.dataCriacao ? new Date(produto.dataCriacao).toLocaleDateString() : 'Data não disponível'}</p>
            <p><strong>Disponibilidade:</strong> {produto.disponibilidade || 'Disponibilidade não informada'}</p>
            <p><strong>Descrição:</strong> {produto.descricao || produto.description || 'Descrição não disponível'}</p>
            <img
              src={produto.image || 'default-image.jpg'}
              alt={produto.nome || produto.title || 'Imagem indisponível'}
              width={100}
            />
          </li>
        ))
      ) : (
        <li>Sem produtos disponíveis.</li>
      )}
    </ul>
  );
}
