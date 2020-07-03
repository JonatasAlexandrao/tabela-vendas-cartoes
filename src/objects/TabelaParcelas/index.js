import React from 'react';
import './styles.css';

const TabelaParcelas = ({novaLinha}) => {

    let i = 1;
    let linhaParcela = [];
    let parc
    while (i <= novaLinha.Parcelas) {
        console.log(`${i}/${novaLinha.Parcelas}`);
        parc = `${i}/${novaLinha.Parcelas}`;
        linhaParcela.push([
            <tr className='linha-tabela -interna -disabled'>
                <td className='coluna-tabela -null' key='1'></td>
                <td className='coluna-tabela -null' key='2'></td>
                <td className='coluna-tabela -null' key='3'></td>

                <td className='coluna-tabela -interna' key='4'>{parc}</td>
                <td className='coluna-tabela -interna' key='5'>{novaLinha.ParcLiquida}</td>
                <td className='coluna-tabela -interna' key='6'>{novaLinha.ParcBruta}</td>

                <td className='coluna-tabela -interna -min' key='6'></td>
            </tr>
        ])
        i++;        
    }
    console.log(linhaParcela)

    //const numParc = novaLinha.Parcelas;
    //console.log(numParc)
    //const teste = <> <Linha/> <Linha/> <Linha/> </>
    //const teste = linhaParcela;

    return (
        <>
        {linhaParcela}
        </>
    )
    

    
}

export default TabelaParcelas;

    
    