
import React from 'react';
import './styles.css';



const RowParcelas = ({novaLinha, parc}) => {
  return (
    <tr className='linha-tabela rowParcela -disabled'>

      <td className='coluna-tabela rowParcela'>'20/20/2020'</td>
      <td className='coluna-tabela rowParcela'>{parc}</td>
      <td className='coluna-tabela rowParcela'>{novaLinha.Bandeira}</td>
      <td className='coluna-tabela rowParcela'>{novaLinha.ParcBruta}</td>
      <td className='coluna-tabela rowParcela'>{novaLinha.ParcLiquida}</td>

    </tr>
  );
}

export default RowParcelas;


