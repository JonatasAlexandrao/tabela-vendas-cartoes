import React from 'react';
import './App.css';
import NewRow from './objects/NewRow';
import NewHeader from './objects/NewHeader';

function App() {

  // const novaLinha = [
  //   ['Valor Líquido', 'Valor Bruto', 'Cartão', 'Parcelas', 'Parc. Líquida','Parc. Bruta'],
  //   ['100,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['200,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['300,00', '220,00', 'Master', '05', '40,00', '44,00'],
  //   ['400,00', '220,00', 'Master', '05', '40,00', '44,00']
  // ]
  let key=0;
    
  const tabela = [
    {DataVenda:'01/07/2020', Parcelas:'5', Bandeira:'Master', ValorBruto:'110,00', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'},
    {DataVenda:'02/07/2020', Parcelas:'10', Bandeira:'Master', ValorBruto:'220,00', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'},
    {DataVenda:'03/07/2020', Parcelas:'1', Bandeira:'Master', ValorBruto:'330,00', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'},
    {DataVenda:'04/07/2020', Parcelas:'3', Bandeira:'Master', ValorBruto:'440,44', ValorLiquido:'100,00', ParcBruta:'44,00', ParcLiquida:'40,00'}
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
