
import React from 'react';
import './styles.css';



const RowParcelas = ({dataParc, numParcelas, bandeira, parcBruto, parcLiquido, addClass}) => {

  //console.log(parcelaBruto({novaLinha, parc}))
  //console.log(dataParc)
  
  

  return (
    <tr className={`linha-tabela rowParcela ${addClass}`}>

      <td className='coluna-tabela columnParcela'>{dataParc}</td>
      <td className='coluna-tabela columnParcela'>{numParcelas}</td>
      <td className='coluna-tabela columnParcela'>{bandeira}</td>
      <td className='coluna-tabela columnParcela'>{parcBruto}</td>
      <td className='coluna-tabela columnParcela'>{parcLiquido}</td>

    </tr>
  );
}



export default RowParcelas;


