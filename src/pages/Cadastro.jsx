import { useNavigate } from "react-router-dom";
import Form from "../componentes/Form";
import { cadastroProdutoApi } from "../service/Api";
import { useState } from 'react'

function Cadastro() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const setChange = (field, value) =>
    setForm({
      ...form,
      [field]: value,
    });

    const produto = {};
    const cadastroProduto = async () => {
        console.log('ANTES DE TUDO', form)
        const confirmCadastro = window.confirm("Tem certeza de que deseja cadastrar este produto?");
  
        if (!confirmCadastro) {
        return; // Cancela a cadastro se o usuário não confirmar o cencelamento
        }
        try {
            console.log('Debugando cadastroProduto', form)
            await cadastroProdutoApi(form);
            alert(`Cadastro de produto ${form.name} feito com sucesso`);
            navigate("/");
            setForm({});
            } catch {
                throw new Error("Não foi possível cadastrar");
            }
        };
    return (
        <>
            {/* {JSON.stringify(form)} */}
            {console.log('Estou aqui CADASTRANDO')}
            <Form produto={form} change={setChange} submit={cadastroProduto} />
        </>
    )
}

export default Cadastro;