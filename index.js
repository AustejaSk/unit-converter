// /*
// 1 meter = 3.2808 feet
// 1 liter = 0.264172 gallon
// 1 kilogram = 2.20462 pound
// */
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
    const numberInput = num.valueAsNumber || 0
    updateOutput(lengthOutput, numberInput, 3.2808, "meters", "feet")
    updateOutput(volumeOutput, numberInput, 0.264172, "liters", "gallons")
    updateOutput(massOutput, numberInput, 2.20462, "kilos", "pounds")
}

function updateOutput(element, value, factor, unitA, unitB) {
    const convertionAtoB = (value * factor).toFixed(3)
    const convertionBtoA = (value / factor).toFixed(3)
    element.textContent = `${value} ${unitA} = ${convertionAtoB} ${unitB} | ${value} ${unitB} = ${convertionBtoA} ${unitA}`
}

convertBtn.addEventListener("click", function(){
    UnitConversion()
})


