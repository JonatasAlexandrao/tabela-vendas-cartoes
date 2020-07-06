import React from 'react';
import './styles.css';
import moment from 'moment';
import TabelaParcelas from '../../components/TabelaParcelas';

let key = 0
const NewRow = ({novaLinha}) => {
    key++
    return (
        <>
            <tr className='linha-tabela'>
                <td className='coluna-tabela'>{formataData(novaLinha.DataVenda)}</td>
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

const formataData = (dataString) => {
    const split = dataString.split('/');
    const dataAmericana = split[1] + "/" +split[0]+ "/" +split[2];
    const formatoDate = new Date(dataAmericana);

    const dataFormatada = moment(formatoDate).format("DD/MM/YYYY");
  
    return dataFormatada;
}


export default NewRow;
