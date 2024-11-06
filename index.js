// Escribir una programa que calcule los siguientes 3 número de la sucesión 1, 1, 2, -1, 1, -2, -1, ?, ?, ?

let numRandom = function(){
    let num1 = (Math.random()* 2)
    let num2 = (Math.random()* 2)
    let coords = []
    coords.push(num1)
    coords.push(num2)
    return coords
}

let calcDistancia = function(coordenadas) {
    let distancia = Math.sqrt( ((coordenadas[0]-1)**2) + ((coordenadas[1]-1)**2))
    return distancia
}
let contadorAdentro =0

let coordenadas
let distancia
let totalDardos = 0

for (let index = 0; index < 1000000; index++) {
    totalDardos ++
    coordenadas = numRandom()
    distancia = calcDistancia(coordenadas)
    if (distancia <= 1) {
        contadorAdentro++
    }
}

document.getElementById("valorPi").innerHTML = 4*contadorAdentro/totalDardos
console.log(4*contadorAdentro/totalDardos);