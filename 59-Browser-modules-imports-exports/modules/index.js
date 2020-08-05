// Your code goes here!

import * as myPercentage from './percentage.js'
import * as myRatio from './aspect-ratio.js'


const modulo1 = document.getElementById('modulo_1')
const modulo2 = document.getElementById('modulo_2')
let moduloResult = document.getElementById('modulo_result')


modulo2.addEventListener('keyup', () => {
    let result = myPercentage.modulo(modulo1.value, modulo2.value)
    moduloResult.value = result
})

const percentage1 = document.getElementById('percentage_1')
const percentage2 = document.getElementById('percentage_2')
let percentageResult = document.getElementById('percentage_result')

percentage2.addEventListener('keyup', () => {
    percentageResult.value = myPercentage.percentage(percentage1.value, percentage2.value)
})

const percentageOf1 = document.getElementById('percentageOf_1')
const percentageOf2 = document.getElementById('percentageOf_2')
let percentageOfResult = document.getElementById('percentageOf_result')

percentageOf2.addEventListener('keyup', () => {
    percentageOfResult.value = myPercentage.percentageOf(percentageOf1.value, percentageOf2.value)
})

const difference1 = document.getElementById('difference_1')
const difference2 = document.getElementById('difference_2')
let differenceResult = document.getElementById('difference_result')

difference2.addEventListener('keyup', () => {
    differenceResult.value = myPercentage.difference(difference1.value, difference2.value)
})


let ratio1 = document.getElementById('ratio_1')
let ratio2 = document.getElementById('ratio_2')
let ratioResultWidth = document.getElementById('ratio_result-width')
let ratioResultHeight = document.getElementById('ratio_result-height')

ratioResultWidth.addEventListener('keyup', () => {
    ratioResultHeight.value = myRatio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, '')
})

ratioResultHeight.addEventListener('keyup', () => {
    ratioResultWidth.value = myRatio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h')
})