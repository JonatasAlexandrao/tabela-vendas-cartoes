
import React from 'react';
import './styles.css';



const RowParcelas = ({dataParc, numParcelas, bandeira, parcBruto, parcLiquido}) => {

  //console.log(parcelaBruto({novaLinha, parc}))
  //console.log(dataParc)
  

  return (
    <tr className='linha-tabela rowParcela -disabled'>

      <td className='coluna-tabela rowParcela'>{dataParc}</td>
      <td className='coluna-tabela rowParcela'>{numParcelas}</td>
      <td className='coluna-tabela rowParcela'>{bandeira}</td>
      <td className='coluna-tabela rowParcela'>{parcBruto}</td>
      <td className='coluna-tabela rowParcela'>{parcLiquido}</td>

    </tr>
  );
}

// const numParcelas = ({novaLinha, parc}) => {
//   return `${parc}/${novaLinha.Parcelas}`;
// }

const parcelaBruto = ({novaLinha, parc}) => {

  const valorBruto = novaLinha.ValorBruto.replace(",",".");

  const valorParc = valorBruto / parc;

  return valorParc.toFixed(2)

  //console.log(valorParc.toFixed(2))
  //console.log(parseFloat(novaLinha.ValorBruto))
  //console.log(novaLinha.ValorBruto.replace(",","."))
  //console.log(parc)


}

export default RowParcelas;


