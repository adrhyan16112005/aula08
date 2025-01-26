import styles from '../styles/listaProdutos.module.css'; 
export default function ListaProdutos({ produtos }) {
  return (
    <ul className={styles.bloco}>
      {produtos.map(produto => (
        <li key={produto.id}>
          <h2>{produto.nome}</h2>
          <p><strong>Tipo:</strong> {produto.tipo}</p>
          <p><strong>Preço:</strong> R${produto.preco.toFixed(2)}</p>
          <p><strong>Data de Criação:</strong> {new Date(produto.dataCriacao).toLocaleDateString()}</p>
          <p><strong>Disponibilidade:</strong> {produto.disponibilidade}</p>
          <p><strong>Descrição:</strong> {produto.descricao}</p>
        </li>
      ))}
    </ul>
  );
}
