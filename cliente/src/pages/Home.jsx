import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import'jspdf-autotable'
import { Button } from "@mui/material"

export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
  }, [usuarios])

const deletar = async (id) => {
  try{
     await fetch('http://localhost:3000/usuarios/' + id, {
      method: 'DELETE'
});
  }catch{
alert("Algo deu errado!!")
  }
}


const exportPDF = () => {
  const doc = new jsPDF();

  const table = usuarios.map(usuario => [
    usuario.nome,
    usuario.email

  ]);
  doc.text("Lista de usuarios", 10, 10);
  doc.autoTable({
  head:[["Nome", "E-mail"]],
  body: table
  });

  doc.save("Arquivo-tabela-if")
}


  return (

    <table>
      <>
    <Button variant="contained" onClick={()=> exportPDF()}>Gerar PDF</Button>
  </>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      <body>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <td>
            <button onClick={() => deletar(usuario.id)} >Remover</button>
          <Link to={'/alterar/' + usuario.id}>
            <button>Alterar</button>
          </Link>
          </td>
        </tr>
      )}
      </body>
    </table>
  );
}