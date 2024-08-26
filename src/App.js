import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Add from './components/add';
import Receitas from './components/receitas';

function App()
{
    return(

        <BrowserRouter>

          <Routes>

              <Route path='/' element = {<Home />} />
              <Route path='/add-receita' element = {<Add />} />
              <Route path='/receita/:id' element = {<Receitas />} />

          </Routes>
        </BrowserRouter>
    );
}

export default App;