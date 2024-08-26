import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getReceitas } from '../api/receitasAPI';
import '../App.css';

function Home (){
    const [receitas, setReceitas] = useState([]);
    const navigate = useNavigate();

    useEffect (() => {
        async function fetchData (){
            const data = await getReceitas();
            setReceitas(data);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
      <div className="card-container">
        <div className="card add-receita-card" onClick={() => navigate('/add-receita')}>
          <div className="title">Adicionar Receita</div>
          <div className="plus-icon">+</div>
        </div>
        {receitas.map((receita) => (
          <div key={receita.id} className="card">
            <div className="title">{receita.titulo}</div>
            <Link to={`/receita/${receita.id}`}>
              <div className="plus-icon">+</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    )

}

export default Home;