# TRABALHO FINAL DE ENGENHARIA DE SOFTWARE:
Repositorio destinado a criação do projeto final de C214

## INTEGRANTES:
    - Nathan Santos Ataliba
    - Gabriel Henrique Guerzony

## APLICAÇÃO DO PROJETO:
    O projeto possui uma interface para adicionar, remover, editar e buscar tasks.

## COMANDOS NECESSARIOS:
```npm install```

```npm run server```

## Testes: 

```npm test```

[![CI class](https://github.com/NathanAtaliba/C214-PROJECT-V2/actions/workflows/ci.yml/badge.svg)](https://github.com/NathanAtaliba/C214-PROJECT-V2/actions/workflows/ci.yml)

## USAMOS O CYPRESS COMO FRAMEWORK PARA AUTOMATIZAR TESTES:

```npm install --save-dev cypress-multi-reporters``` -> instala as dependencias de multi-relatorios

```npm i --save-dev cypress-mochawesome-reporter```-> instala as dependencias da geração de testes

```./node_modules/.bin/cypress open``` -> Abre o cypress para realizar os testes

```./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'```  -> Gera os relatorios de testes


###  Testes utilizando o framework Cypress ;

- IMC MENOR QUE 18.5: RESULTADO: ABAIXO DO PESO MENSAGEM: "Baixo Peso."

- IMC ENTRE 18.5 E 24.9: RESULTADO: NORMAL MENSAGEM: "Peso Normal."

- IMC ENTRE 25 E 29.9: RESULTADO: SOBREPESO MENSAGEM: "Sobrepeso. "

- IMC ENTRE 30 E 34.99: RESULTADO: OBESIDADE GRAU I MENSAGEM : "Obesidade grau I."

- IMC ENTRE 35 E 39.99: RESULTADO: OBESIDADE GRAU II MENSAGEM : "Obesidade grau II."

- IMC ENTRE IGUAL OU MAIOR QUE 40: RESULTADO: OBESIDADE II MENSAGEM: "Obesidade grau III."

# Utilizando a aplicação

A aplicação possui uma interface bem intuitiva, onde colocamos os valores de peso e altura e nos é entregue uma mensagem sobre a condição do indivíduo avaliado.

# Link Apresentação:




