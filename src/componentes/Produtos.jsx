import React from "react";
import { colunas } from "../config/colunas-produto";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Produtos({produtos, deleteProduto, editForm}){
    const navegate = useNavigate();

    function formatarMoeda(valor) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    }

    return (
        <>
            <div className='Description'>Lista de produtos</div>
            <div className="servicos" role="region" tabIndex="0">
                <table>
                    <thead>
                        <tr>
                            {colunas.produtos.map((colunas, i) =>
                                <th key={i}>{colunas.toUpperCase()}</th>
                            )}
                           
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(produtos) && produtos.map((item, i) => 

                            <tr key={i} 
                                className={i % 2 === 0 ? 'linha-par' : 'linha-impar'}
                            >
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>{formatarMoeda(item.preco)}</td>
                                <td>{item.estoque}</td>
                                <td><button onClick={() => navegate('/detalhes/'+item.id)} className='btn btn-editar'><FaEdit /></button></td>
                                {/* <td><button href='#' className='btn btn-excluir'>Excluir</button></td> */}
                                <td><button onClick={() => deleteProduto(item.id)} className='btn btn-excluir'><FaTrash /></button></td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>     
        </>
    );
}

export default Produtos;