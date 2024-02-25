/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
const convertBtn = document.getElementById("convert-btn")
const num = document.getElementById("number-input")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

document.addEventListener('DOMContentLoaded', function () {
    function adjustWidth() {
        if (num.value.length === 0) {
            num.style.width = "117px"
        } else {
            num.style.width = ((num.value.length + 1) * 58.5) + 'px'
        }
    }

    num.addEventListener('input', adjustWidth)
    adjustWidth()
})

function UnitConversion() {
    const numberInput = num.valueAsNumber
    // Length (Meter/Feet)
    const feet = 3.2808
    const metersToFeet = (numberInput * feet).toFixed(3).toString()
    const feetToMeters = (numberInput / feet).toFixed(3).toString()
    lengthOutput.textContent += `${numberInput} meters = ${metersToFeet} feet | ${numberInput} feet = ${feetToMeters} meters`
    // Volume (Liters/Gallons)
    const gallon = 0.264172
    const litersToGallons = (numberInput * gallon).toFixed(3).toString()
    const gallonsToLiters = (numberInput / gallon).toFixed(3).toString()
    volumeOutput.textContent += `${numberInput} liters = ${litersToGallons} gallons | ${numberInput} gallons = ${gallonsToLiters} liters`
    // Mass (Kilograms/Pounds)
    const pound = 2.20462
    const kilogramsToPounds = (numberInput * pound).toFixed(3).toString()
    const poundsToKilograms = (numberInput / pound).toFixed(3).toString()
    massOutput.textContent += `${numberInput} kilos = ${kilogramsToPounds} pounds | ${numberInput} pounds = ${poundsToKilograms} kilos`
    
}

convertBtn.addEventListener("click", function convertUnit(){
    lengthOutput.textContent = ""
    volumeOutput.textContent = ""
    massOutput.textContent = ""
    UnitConversion()
})
