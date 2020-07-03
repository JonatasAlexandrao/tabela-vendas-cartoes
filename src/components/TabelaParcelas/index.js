import React from 'react';
import RowParcelas from '../../objects/RowParcelas';

const TabelaParcelas = ({novaLinha}) => {

    //let key = 0;
    let i = 1;
    let linhaParcela = [];
    let parc
    
    while (i <= novaLinha.Parcelas) {
        parc = `${i}/${novaLinha.Parcelas}`;

        linhaParcela.push([
            <RowParcelas novaLinha={novaLinha} parc={parc} key={i}/>
        ])
        i++;        
    }

    return (
        <>
        {linhaParcela}
        </>
    )
    
}

export default TabelaParcelas;

    
    