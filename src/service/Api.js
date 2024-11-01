import { Form } from "react-router-dom";
import http from "../config/http"

export async function getProdutoApi(){
    // Aqui também usa o axios
    const produto = await http.get("/produto")
    console.log(produto)
    return produto.data;
}

export async function deleteProdutosApi(id) {
    try{
        await http.delete(`/produto/${id}`);
    } catch {
        throw new Error("Não foi possível deletar");
    }
}

export async function cadastroProdutoApi(form) {
    try{
        await http.post(`/produto/`, form);
    } catch {
        throw new Error("Não foi possível cadastrar produto");
    }
}

export async function editProdutoApi(form) {
    try{
        await http.patch(`/produto/${form.id}`, form);
    } catch {
        throw new Error("Não foi possível atualizar o produto");
    }
}

