import { useEffect, useState } from 'react'
import { getProdutoApi } from '../service/Api';
import { deleteProdutosApi } from "../service/Api";
// import Container from '../componentes/Container'
// import Cabecalho from '../componentes/Cabecalho'
// import Menu from '../componentes/Menu'
import Body from '../componentes/Body'
import Rodape from '../componentes/Rodape'
import Produtos from '../componentes/Produtos'
import Form from '../componentes/Form';
import MenuProduto from '../componentes/Menu/MenuProduto';
import '../App.css'
import '../assets/styleGlobal.css';
import Layout from '../componentes/Layout';

function Initial() {
  const [listas, setProdutos] = useState([])
  const [showList, setShowList] = useState(true); 
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);


  // Deletar produtos
  const deleteProduto = async (id) => {
    console.log('id', id)
    const confirmDelete = window.confirm("Tem certeza de que deseja deletar este produto?");
  
    if (!confirmDelete) {
      return; // Cancela a exclusão se o usuário não confirmar
    }
    try {
        await deleteProdutosApi(id);
        await getProduto();
    } catch {
        alert("Aconteceu um erro");
    }
  };

   // Buscar produtos
  const getProduto = async () => {
    const lista2 = await getProdutoApi();
    setProdutos(lista2);
  }

   // Ciclo de vida do componente
  useEffect(() => {
    console.log('Atualizando')
    getProduto();
  }, []);

  const cadastro = (value) => {
    setShowList(value)
    setUpdate(false)
  }

  const editForm = (value) => {
    console.log('Dados do VALUE', value)
    setForm(value)
    console.log('####', value.id)
    setShowList(false)
    setUpdate(true);
  }

  return (
    
      <>
        {/* <MenuProduto show={showList} act={cadastro} /> */}
        {showList ? (
          <Produtos produtos={listas} deleteProduto={deleteProduto} editForm={editForm} /> 
        ) : ( 
          "Talvez Colocar essa lista de volta"// <Form form={form} setForm={setForm} update={update}/>
        )}
      </>
    
  )
}

export default Initial
