let input = document.getElementById("value")
let button = document.getElementById("button")
let lengthText = document.getElementById("length-el")
let volumeText = document.getElementById("volume-el")
let massText = document.getElementById("mass-el")


let feet = ""
let meters = ""
let liters = ""
let gallons = ""
let kilos = ""
let pounds = ""

button.addEventListener("click", function() {
    let value = input.value;
    feet = (feetCalc())
    meters = (metersCalc())
    liters = (litersCalc())
    gallons = (gallonsCalc())
    kilos = (kilosCalc())
    pounds = (poundsCalc())
    lengthText.innerHTML = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`
    volumeText.innerHTML = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
    massText.innerHTML = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
})


//1 liter = 0.26 gallons | 1 gallon = 3.79 liters
function feetCalc () {
    value = input.value;
    feet = value * 3.281
    return feet.toFixed(2)
}

function metersCalc () {
    value = input.value;
    meters = value / 3.281
    return meters.toFixed(2)
}

function litersCalc () {
    value = input.value;
    liters = value / 0.264
    return liters.toFixed(2)
}

function gallonsCalc () {
    value = input.value;
    gallons = value * 0.264
    return gallons.toFixed(2)
}

function kilosCalc () {
    value = input.value;
    kilos = value * 2.204
    return kilos.toFixed(2)
}

function poundsCalc () {
    value = input.value;
    pounds = value / 2.204
    return pounds.toFixed(2)
}