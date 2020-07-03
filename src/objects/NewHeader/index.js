import React from 'react';
import './styles.css';


const NewHeader = () => {
  return (
    <thead>
      <tr className='linha-tabela'>

        <td className='coluna-cabecalho' key='1'>Data Venda</td>

        <td className='coluna-cabecalho' key='2'>Parcelas</td>
        <td className='coluna-cabecalho' key='3'>Bandeira</td>
        <td className='coluna-cabecalho' key='4'>Valor Bruto</td>
        <td className='coluna-cabecalho' key='5'>Valor Líquido</td>                     
        
      </tr>
    </thead>
  );
}

export default NewHeader;