import receitas from './receita.json';

let guardareceitas = [...receitas];

export const pegarReceitas = () => {
    return new Promise((resolve) => {
          resolve(guardareceitas);
      });
    };


export const addReceitas = (novaReceita) => {
    return new Promise ((resolve) => {
        guardareceitas.push(novaReceita);
        console.log('Receita adicionada com sucesso: ', novaReceita);
        resolve();
    });
};

export const getReceitas = async () => {
    return await pegarReceitas();
};