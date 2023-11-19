import { calcImc , nivel } from "../imc.js";
import { expect } from "chai";

describe('Testes do IMC : ', () => {
    
    it('Teste de calculo do IMC',() => {
        const peso = 80;
        const altura = 1.80;
        
        const resultado = peso/(altura**2);

        expect(calcImc(peso, altura)).to.eql(resultado);
    });

    it('Teste de calculo do IMC',() => {
        const peso = 200;
        const altura = 1.80;    
        const resultado = peso/(altura**2);

        expect(calcImc(peso, altura)).to.eql(resultado);
    });

    it('Teste de calculo do IMC para Baixo peso',() => {
        const imc = 18.4;
        const resposta = 'Baixo peso'
        expect(nivel(imc)).to.eql(resposta);
    });

    it('Teste de calculo do IMC para Peso normal',() => {
        const imc = 18.6;
        const resposta = 'Peso normal'
        expect(nivel(imc)).to.eql(resposta);

    });

    it('Teste de calculo do IMC para Sobrepeso',() => {
        const imc = 25;
        const resposta = 'Sobrepeso'
        expect(nivel(imc)).to.eql(resposta);

    });

    it('Teste de calculo do IMC para Obesidade grau I',() => {
        const imc = 30;
        const resposta = 'Obesidade grau I'
        expect(nivel(imc)).to.eql(resposta);

    });

    it('Teste de calculo do IMC para Obesidade grau II',() => {
        const imc = 35;
        const resposta = 'Obesidade grau II'
        expect(nivel(imc)).to.eql(resposta);

    });

    it('Teste de calculo do IMC para Obesidade grau III',() => {
        const imc = 40;
        const resposta = 'Obesidade grau III'
        expect(nivel(imc)).to.eql(resposta);

    });
})