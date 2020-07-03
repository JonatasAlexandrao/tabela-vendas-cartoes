import React from 'react';
import './App.css';
import NewRow from './objects/NewRow';

function App() {

  // const novaLinha = [
  //   ['Valor Líquido', 'Valor Bruto', 'Cartão', 'Parcelas', 'Parc. Líquida','Parc. Bruta'],
  //   ['100,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['200,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['300,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['400,00', '220,00', 'Master', '05', '40,00', '44,00']
  // ]

  
  const tabela = [
    {ValorLiquido:'100,00', ValorBruto:'220,00', Cartao:'Master', Parcelas:'05', ParcLiquida:'40,00',ParcBruta:'44,00'},
    {ValorLiquido:'200,00', ValorBruto:'220,00', Cartao:'Master', Parcelas:'10', ParcLiquida:'40,00',ParcBruta:'44,00'},
    {ValorLiquido:'300,00', ValorBruto:'220,00', Cartao:'Master', Parcelas:'03', ParcLiquida:'40,00',ParcBruta:'44,00'},
    {ValorLiquido:'400,00', ValorBruto:'220,00', Cartao:'Master', Parcelas:'02', ParcLiquida:'40,00',ParcBruta:'44,00'}
  ]

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <table className='tabela-vendas'>
        
        <thead>
          <tr className='linha-tabela'>
            <td className='coluna-cabecalho'>Valor Líquido</td>
            <td className='coluna-cabecalho'>Valor Bruto</td>
            <td className='coluna-cabecalho'>Cartão</td>
            <td className='coluna-cabecalho'>Parcelas</td>
            <td className='coluna-cabecalho'>Parc. Líquida</td>
            <td className='coluna-cabecalho'>Parc. Bruto</td>
            
          </tr>
        </thead>
        
        <tbody>

          {tabela.map((novaLinha) => {return <NewRow novaLinha={novaLinha}/>})}

        </tbody>
        
        
      </table>


    </div>
  );
}

export default App;
