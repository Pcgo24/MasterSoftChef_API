import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addReceitas } from '../api/receitasAPI';
import '../App.css';

const AdicionarReceita = () => {
    const [titulo, setTitulo] = useState ('');
    const [ingredientes, setIngredientes] = useState('');
    const [modoPreparo, setModoPreparo] = useState ('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novaReceita = {
            id: Date.now(),
            titulo,
            ingredientes: ingredientes.split('\n'),
            modoPreparo: modoPreparo
        };

        await addReceitas (novaReceita);
        navigate('/');
    };
    

return (
    <div className="adicionar-receita">
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label><br/>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredientes">Ingredientes (um por linha):</label><br/>
          <textarea
            id="ingredientes"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="modoPreparo">Modo de Preparo:</label><br/>
          <textarea
            id="modoPreparo"
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AdicionarReceita;
