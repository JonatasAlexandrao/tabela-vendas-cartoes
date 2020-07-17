import React from 'react';
import moment from 'moment';
import RowParcelas from '../../objects/RowParcelas';

const TabelaParcelas = ({novaLinha, parcelas, addClass}) => {

    let i = 1;
    let linhaParcela = [];
    //console.log(parcelas)

    while (i <= parcelas) {

        //console.log(novaLinha.Parcelas)
        linhaParcela.push([
            <RowParcelas 
                dataParc={dataParc(i, novaLinha.DataVenda)}
                numParcelas={parcAtual(i, parcelas)}          
                key={i}
                bandeira={novaLinha.Bandeira}
                parcBruto={parcBrutoLiquido(novaLinha.ValorBruto, parcelas, i)}
                parcLiquido={parcBrutoLiquido(novaLinha.ValorLiquido, parcelas, i)}
                addClass={addClass}
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

const parcBrutoLiquido = (valorBrutoTotal, parc, i) => {
    const valor = valorBrutoTotal.replace(",", ".");

    let valorParc = valor / parc;
    valorParc = converteParaReal(valorParc)

    if(i === parseInt(parc)){
        return ultimaParc(valorParc[1], parc, valorParc[0])[0];         
    }
    else{
        return valorParc[0];        
    }
}

const ultimaParc = (resto, parc, valorParc) => {
    const restoFormatado = parseFloat('0.00' + resto);
    const parcFormatada =  parseFloat(valorParc.replace(",", "."));
    const parcFinal = ((restoFormatado*parc) + parcFormatada).toString();

    return converteParaReal(parcFinal)
}

const converteParaReal = (valor) => {
    const splitParc = valor.toString().split('.');
    let resto
    let fracao
    if(splitParc[1]){
        fracao = splitParc[1].substr(0,2)  
        resto = splitParc[1].substr(2)
    }
    else {
        fracao = '00'     
    }

    valor = splitParc[0] + ',' + fracao

    return [valor, resto]
}

export default TabelaParcelas;

    
    