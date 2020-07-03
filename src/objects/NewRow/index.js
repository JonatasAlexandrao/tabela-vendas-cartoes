import React from 'react';
import './styles.css';
import TabelaParcelas from '../TabelaParcelas';

const NewRow = ({novaLinha}) => {

    return (
        <>
            <tr className='linha-tabela'>
                <td className='coluna-tabela' key='1'>{novaLinha.ValorLiquido}</td>
                <td className='coluna-tabela' key='2'>{novaLinha.ValorBruto}</td>
                <td className='coluna-tabela' key='3'>{novaLinha.Cartao}</td>
                <td className='coluna-tabela' key='4'>{novaLinha.Parcelas}</td>
                <td className='coluna-tabela' key='5'>{novaLinha.ParcLiquida}</td>
                <td className='coluna-tabela' key='6'>{novaLinha.ParcBruta}</td>
                <td className='coluna-tabela -min' key='7'>▼</td>
            </tr>
            <TabelaParcelas novaLinha={novaLinha}/>
            {/* <TabelaParc /> */}
        </>
    );

}


export default NewRow;
