import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getReceitas } from '../api/receitasAPI';
import { Link } from 'react-router-dom';
import '../App.css';

const Receitas = () => {
    const { id } = useParams ();
    const [receitas, setReceitas] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        async function fetchData () {
            const data = await getReceitas();
            setReceitas (data);
        }
        fetchData();
    }, []);


    const receita = receitas.find ((rec) => rec.id === parseInt (id));

    if (!receita) return <div>Receitas não encontrada</div>

    return (
        <div class="receita-detalhes">
        <div class="card">
            <h2>{receita.titulo}</h2>
        </div>
        <div class="card">
            <h3>Ingredientes:</h3>
            <ul>
            {receita.ingredientes.map((ing, index) => (
                <li key={index}>{ing}</li>
            ))}
            </ul>
        </div>
        <div class="card">
            <h3>Modo de Preparo:</h3>
            <p>{receita.modoPreparo}</p>
        </div>
        <div className='botao-voltar' >
            <button onClick={() => navigate(-1)} className='card' >Voltar</button>
        </div>
        

        </div>
    )

}

export default Receitas;