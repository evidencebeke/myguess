
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
    let numbertoGuess = Math.floor(Math.random()*100+1);
    if(typeof(numberGuessed)=== 'number' && numberGuessed >=10 && numberGuessed<=100){
        if(numberGuessed===numbertoGuess){
            goodMessage.style.display="block"
         }
         else{
             badMessage.style.display = "block"
         }
    resultMessage.style.display ='block'
    resultMessage.innerText=`The number to guess was ${numbertoGuess}`
    }

    else{
        resultMessage.style.display ='none';
        goodMessage.style.display = 'none';
        badMessage.style.display = 'none';
        alert('See, na number between 10 and 100 I tell you to guess. No dey try find wetin no dey')}
    
    
    
})
