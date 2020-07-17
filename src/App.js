import React from 'react';
import './App.css';
import NewRow from './objects/NewRow';
import NewHeader from './objects/NewHeader';

function App() {

  let key=0;
    
  const tabela = [
    {DataVenda:'1/9/2020', Parcelas:'Crédito 5x', Bandeira:'Master', ValorBruto:'123,33', ValorLiquido:'100,00'},
    {DataVenda:'12/10/2020', Parcelas:'Crédito 10x', Bandeira:'Master', ValorBruto:'220,00', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'},
    {DataVenda:'3/7/2020', Parcelas:'Crédito 1x', Bandeira:'Master', ValorBruto:'330,00', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'},
    {DataVenda:'4/7/2020', Parcelas:'Crédito 3x', Bandeira:'Master', ValorBruto:'440,44', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'}
  ]

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <table className='tabela-vendas'>
        <NewHeader />          
        <tbody>
          {tabela.map((novaLinha) => {    
            key++
            return <NewRow novaLinha={novaLinha} key={key}/>
            }
          )}
        </tbody>     
      </table>


    </div>
  );
}

export default App;
