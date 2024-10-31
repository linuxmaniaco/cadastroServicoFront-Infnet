import React from 'react';
import { useState } from 'react'
import '../assets/formProduto.css'
import { cadastroProdutoApi } from '../service/Api';

function Form() {
  const [form, setForm] = useState({});
  console.log(form)

  const setChange = (field, value) =>
    setForm({
      ...form,
      [field]: value,
      
    });
    

  const submit = async () => {
    console.log(form)
    try {
        await cadastroProdutoApi(form);
        alert('Cadastro do usuário ${form.name} feito com sucesso')
        
    } catch {
        throw new Error("Não foi possível cadastrar")
    }
  }

  return (
    <div className="form-container">
      {JSON.stringify(form)}
      <h2>Registrar / Editar Produtos</h2>
      <form>
        <div className="field">
          <label htmlFor="nome">Nome:</label>
          
          <input type="text" id="nome" name="nome" placeholder="Nome do produto" value={form.nome || ''} required onChange={(e) => setChange("nome", e.target.value)}/>
        </div>

        <div className="field">
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" rows="4" placeholder="Descrição do produto" value={form.descricao || ''} required onChange={(e) => setChange("descricao", e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="preco">Preço:</label>
          <input type="number" id="preco" name="preco" step="0.01" placeholder="Preço do produto" value={form.preco || ''} required onChange={(e) => setChange("preco", e.target.value)}/>
        </div>

        <div className="field">
          <label htmlFor="estoque">Estoque:</label>
          <input type="number" id="estoque" name="estoque" placeholder="Quantidade no estoque" value={form.estoque || ''} required onChange={(e) => setChange("estoque", e.target.value)}/>
        </div>

        <div className="field">
          <button onClick={() => submit()} type="submit" className="btn-submit">Salvar</button>
          <button type="button" className="btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;