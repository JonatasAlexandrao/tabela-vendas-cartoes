import React from 'react';
import moment from 'moment';
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
    // muda a data BR para o formato americano e converte para Date
    const split = data.split('/');
    const dataAmericana = split[1] + "/" +split[0]+ "/" +split[2];
    const formatoDate = new Date(dataAmericana);

    // soma +1 em cada mes e formata a data para BR
    const dataFutura = moment(formatoDate).add(i, "months").format("DD/MM/YYYY");

    return dataFutura;
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

    
    