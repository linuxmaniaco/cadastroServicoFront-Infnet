// import React, { act } from 'react';
import { useState, useEffect } from 'react';
import '../assets/formProduto.css'
import { cadastroProdutoApi, editProdutoApi } from '../service/Api';

function Form({produto, change, submit }) {
  
  return (
    <div className="form-container">
      <h2>Registrar / Editar Produtos</h2>
      <form>
        <div className="field">
          <label htmlFor="nome">Nome:</label>
          
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            placeholder="Nome do produto" 
            value={produto.nome || ''} required 
            onChange={(e) => change("nome", e.target.value)}/>
        </div>

        <div className="field">
          <label htmlFor="descricao">Descrição:</label>
          <textarea 
            id="descricao" 
            name="descricao" 
            rows="4" 
            placeholder="Descrição do produto" 
            value={produto.descricao || ''} required 
            onChange={(e) => change("descricao", e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="preco">Preço:</label>
          <input 
            type="number" 
            id="preco" 
            name="preco" 
            step="0.01" 
            placeholder="Preço do produto" 
            value={produto.preco || ''} required 
            onChange={(e) => change("preco", e.target.value)}/>
        </div>

        <div className="field">
          <label htmlFor="estoque">Estoque:</label>
          <input 
            type="number" 
            id="estoque" 
            name="estoque" 
            placeholder="Quantidade no estoque" 
            value={produto.estoque || ''} required 
            onChange={(e) => change("estoque", e.target.value)}/>
        </div>

        <div className="field">
          <button onClick={() => submit()} type="submit" className="btn-submit">Salvar</button>
          <button 
            type="button" 
            className="btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;