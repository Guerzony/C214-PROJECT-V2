function msgIMC(imc){
    let mensagem = document.getElementById('mensagem');
    console.log(imc)
    if(imc < 18.5){
        mensagem.innerHTML = 'Baixo peso';
        return 'Baixo peso';
    }else if( imc >= 18.5 && imc < 24.99 ){
        mensagem.innerHTML = 'Peso normal';
        return 'Peso normal';
    }else if( imc >= 25 && imc < 29.99 ){
        mensagem.innerHTML = 'Sobrepeso';
        return 'Sobrepeso';
    }else if( imc >= 30 && imc < 34.99 ){
        mensagem.innerHTML = 'Obesidade grau I';
        return 'Obesidade grau I';
    }else if( imc >= 35 && imc < 39.99 ){
        mensagem.innerHTML = 'Obesidade grau II';
        return 'Obesidade grau II';
    }else if( imc >= 40 ){
        mensagem.innerHTML = 'Obesidade grau III';
        return 'Obesidade grau III';
    } 
}

function calcIMC(){
    let resposta = document.getElementById('resposta');
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultado = peso / (altura**2);
    if(peso == "" && altura == ""){
        alert('Preencha os campos');
    }else{
    resposta.innerHTML = resultado.toFixed(2);
    msgIMC(resultado.toFixed(2));
    }    
}