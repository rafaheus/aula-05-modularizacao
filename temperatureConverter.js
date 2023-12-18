function celsiusToF(celsius){
    return (celsius * 1.8) + 32;
}

function fToCelsius(f){
    return (f - 32) / 1.8;
}


module.exports = {
    celsiusToF,
    fToCelsius
}