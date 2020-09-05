
let resultMessage = document.getElementById("number-to-guess")
let inputedGuess = document.getElementById("input")
let goodMessage = document.getElementById("lucky-message")
let badMessage = document.getElementById("unlucky-message")
let guessButton = document.getElementById("guess-button")


guessButton.addEventListener('click', function testMatch(){
    resultMessage.style.display ='none';
    goodMessage.style.display = 'none';
    badMessage.style.display = 'none';



    let numberGuessed = parseInt(inputedGuess.value);
    let numbertoGuess = Math.floor(Math.random()*10+1);
    if(numberGuessed===numbertoGuess){
       goodMessage.style.display="block"
    }
    else{
        badMessage.style.display = "block"
    }
    resultMessage.style.display ='block'
    resultMessage.innerText=`The number to guess was ${numbertoGuess}`
    
})
