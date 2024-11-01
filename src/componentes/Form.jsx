import React, { act } from 'react';
import { useState } from 'react'
import '../assets/formProduto.css'
import { cadastroProdutoApi, editProdutoApi } from '../service/Api';

function Form({form, setForm, update}) {
  
  console.log('FORM DE EDIÇÃO', form)

  const setChange = (field, value) =>
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
      
    }));
    

  const submit = async () => {
    console.log(form)
    try {
      const action = update ? editProdutoApi : cadastroProdutoApi;
      
      await action(form);
      alert('${update ? "Atualização" : "Cadastro"} do produto ${form.name} feito com sucesso')
        
    } catch {
        throw new Error("Não foi possível cadastrar")
    }
  }

  const updateProduto = (id, value) => {
    editProdutoApi(value.id, value).then(() => {
      alert('Produto ' + {valuename} + ' atualizado com sucesso.' )
      setShowList(!setShowList);
    });
  }

  return (
    <div className="form-container">
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