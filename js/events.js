function callRed() {
    document.body.style.backgroundColor = 'red';
}
//handel blue button click
//just set function name dont use() cuase jokon click hobe tokon e blue clor korbo
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = clickBlue;

function clickBlue() {
    document.body.style.backgroundColor = 'blue';
}
const greenButton = document.getElementById('make-green-button')
//annonymous funtion
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green"
}
//handel by addevent lisentners
const goldenButton = document.getElementById('make-goldenRod-button');
goldenButton.addEventListener('click', mekeGoldenRod)

function mekeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}
//add EventListeners
const hotPink = document.getElementById('make-hotpink-button')
hotPink.addEventListener('click', function hotPink() {
    document.body.style.backgroundColor = 'hotpink'
})
//direct shortcut
document.getElementById('make-lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})