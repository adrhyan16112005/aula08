/* eslint-disable react/prop-types */
import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos({ produtos }) {
  return (
    <div>
      <ul className={styles.bloco}>
        {produtos && produtos.length > 0 ? (
          produtos.map(produto => (
            <li key={produto.id}>
              <h2>{produto?.title || 'Título não disponível'}</h2>
              <p>{produto?.description || 'Descrição não disponível'}</p>
              <p>Preço: {produto?.price || 'Preço não disponível'}</p>
              <img
                src={produto?.image || 'default-image.jpg'}
                alt={produto?.title || 'Imagem indisponível'}
                width={100}
              />
            </li>
          ))
        ) : (
          <li>Sem produtos disponíveis.</li>
        )}
      </ul>
    </div>
  );
}
