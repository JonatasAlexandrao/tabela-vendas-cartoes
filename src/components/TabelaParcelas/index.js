import React from 'react';
import RowParcelas from '../../objects/RowParcelas';

const TabelaParcelas = ({novaLinha}) => {

    let i = 1;
    let linhaParcela = [];

    
    
    while (i <= novaLinha.Parcelas) {

        linhaParcela.push([
            <RowParcelas 
                dataParc={dataParc(i, novaLinha.DataVenda)}
                numParcelas={parcAtual(i, novaLinha.Parcelas)}          
                key={i}
                bandeira={novaLinha.Bandeira}
                parcBruto={parcBruto(novaLinha.ValorBruto, novaLinha.Parcelas)}
                parcLiquido={parcLiquido(novaLinha.ValorLiquido, novaLinha.Parcelas)}
            />

        ])
        i++;              
    }

    return (
        <>
        {linhaParcela}
        </>
    )
    
}

const dataParc = (i, data) => {
    const dia = data.substring(0,2);
    const mes = parseInt(data.substring(3,5))+i-1;
    const ano = data.substring(6,10);
    const novaData = `${dia}/${mes}/${ano}`

    return novaData;
}

const parcAtual = (Atual, parcelas) => {
    return `${Atual}/${parcelas}`;
}

const parcBruto = (valorBrutoTotal, parc) => {
    const valor = valorBrutoTotal.replace(",", ".");

    const valorParc = valor / parc;
    const valorParcArredondado = valorParc.toFixed(2);

    return valorParcArredondado.replace('.', ',');
}

const parcLiquido = (valorLiquidoTotal, parc) => {
    const valor = valorLiquidoTotal.replace(",", ".");

    const valorParc = valor / parc;
    const valorParcArredondado = valorParc.toFixed(2);

    return valorParcArredondado.replace('.', ',');
}

export default TabelaParcelas;

    
    