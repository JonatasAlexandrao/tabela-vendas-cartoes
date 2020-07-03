import React from 'react';
import './styles.css';
import TabelaParcelas from '../../components/TabelaParcelas';

let key = 0
const NewRow = ({novaLinha}) => {
    key++
    console.log(key)
    return (
        <>
            <tr className='linha-tabela'>
                <td className='coluna-tabela'>{novaLinha.DataVenda}</td>
                <td className='coluna-tabela'>{novaLinha.Parcelas}</td>
                <td className='coluna-tabela'>{novaLinha.Bandeira}</td>

                <td className='coluna-tabela'>{novaLinha.ValorBruto}</td>
                <td className='coluna-tabela'>{novaLinha.ValorLiquido}</td>
                
                <td className='coluna-tabela -min'>▼</td>
            </tr>
            <TabelaParcelas novaLinha={novaLinha} key={key}/>
            {/* <TabelaParc /> */}
        </>
    );

}


export default NewRow;
