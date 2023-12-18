const prompt = require('prompt-sync')();
const conversor = require('./temperatureConverter');

var escolha = prompt('O que você quer converter? (C/F) ')


if (escolha === 'C') {
    var valorTempC = prompt('Qual a temperatura em Celsius? ')
    var tempF = conversor.celsiusToF(valorTempC);
    console.log(tempF) 
} else {
    var valorTempF = prompt('Qual a temperatura em Fahrenheit? ')
    var tempC = conversor.fToCelsius(valorTempF);
    console.log(tempC) 
}