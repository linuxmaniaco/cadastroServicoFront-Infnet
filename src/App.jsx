import { useEffect, useState } from 'react'
import { getProdutoApi } from './service/Api';
import { deleteProdutosApi } from "./service/Api";
import Container from './componentes/Container'
import Cabecalho from './componentes/Cabecalho'
import Menu from './componentes/Menu'
import Body from './componentes/Body'
import Rodape from './componentes/Rodape'
import Produtos from './componentes/Produtos'
import Form from './componentes/Form';
import MenuProduto from './componentes/Menu/MenuProduto';
import './App.css'
import './assets/styleGlobal.css';

function App() {
  const [listas, setProdutos] = useState([])
  const [showList, setShowList] = useState(true); 
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);

  // Deletar produtos
  const deleteProduto = async (id) => {
    console.log('id', id)
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

  

 console.log("MUDANÇA NO USER_EFFECT",listas)

  return (
    <Container>
      <Cabecalho />
      <Menu />
      <Body>
        <MenuProduto show={showList} act={cadastro} />
        {showList ? (
          <Produtos produtos={listas} deleteProduto={deleteProduto} editForm={editForm} /> 
        ) : ( 
          <Form form={form} setForm={setForm} update={update}/>
        )}
      </Body>
      <Rodape />
    </Container>
  )
}

export default App
