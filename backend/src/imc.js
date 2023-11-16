function calcImc( peso, altura ){
    const imc = peso / altura ** 2; 
    return imc;
}

function nivel( imc ){

    if(imc < 18.5){
        return 'Baixo peso';
    }else if( imc >= 18.5 && imc < 24.99 ){
        return 'Peso normal';
    }else if( imc >= 25 && imc < 29.99 ){
        return 'Sobrepeso';
    }else if( imc >= 30 && imc < 34.99 ){
        return 'Obesidade grau I';
    }else if( imc >= 35 && imc < 39.99 ){
        return 'Obesidade grau II';
    }else if( imc >= 40 ){
        return 'Obesidade grau III';
    } 
}

export { calcImc, nivel }