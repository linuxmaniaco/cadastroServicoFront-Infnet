import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detalhesProdutoApi, editProdutoApi } from "../service/Api";
import Form from "../componentes/Form";
import { useNavigate } from "react-router-dom";
import PageError from "../componentes/error";


function Detalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    // if(!id) {
    //     return <div> Produto não encontrado. </div>
    // }
    

    const [produto, setProdutos] = useState(null);

    const setChange = (field, value) =>
        setProdutos({
          ...produto,
          [field]: value,
    });

    const updateProduto = async () => {
        const confirmUpdate = window.confirm("Tem certeza de que deseja cadastrar este produto?");
        if (!confirmUpdate) return;

        try {
            await editProdutoApi(produto);
            setProdutos({});
            navigate("/");            
        } catch {
            alert("Não foi possível atualizar");
        }
    };

   
    useEffect(() => {
        (async () => {
            const response = await detalhesProdutoApi(id);
            console.log('DEBUG paremetro detalhesProdutoApi', response)
            setProdutos(response.data);
        })();
        
    }, [id]); 

    if(!produto){
        return <PageError />
    } else {
        return (
            <>
                <span>OBJ: {JSON.stringify(produto)}</span>
                <div> Aqui vai ter os detalhes de usuário com id: {id}</div>
                {console.log("Testando " + produto)}
                <Form produto={produto || {}} change={setChange} submit={updateProduto} />
            </>
        )
    }

    
}

export default Detalhes;