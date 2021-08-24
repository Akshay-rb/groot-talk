const btnTranslater = document.querySelector("#btn-translate")
const txtInput = document.querySelector('#txt-input')
const outputDiv = document.querySelector('#output')
let url = 'https://api.funtranslations.com/translate/groot.json'

// url construction
function getURL(text){
    return url + "?text=" +text
}

//error handling function
function errorHandler(error){
    console.log('an error occured', error)
    alert('somethingwrong')
}

// click handling function
function clickEventHandler() {
    fetch(getURL(txtInput.value))
    .then(response => response.json())
    // .then(json => console.log(json.contents.translated))
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler)
}

//calling the clickhandler on click
btnTranslater.addEventListener('click', clickEventHandler)