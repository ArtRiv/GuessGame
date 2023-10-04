let tries = 0; // Variable that counts the amount of times the user got the guess wrong

function handleClick(event) { // Main function
    event.preventDefault(); // Makes the input not reload the page

    screen2.style.display = "none";
    
    const page = document.querySelector("#page");
    const inputNumber = document.querySelector("#inputNumber");
    const screen2Span = document.querySelector("#screen2Span");
    const errorMessageContainer = document.querySelector("#errorMessageContainer");
    const errorMessage = document.querySelector("#errorMessage");
    const errorImg = document.querySelector("#errorImg");

    const maxNum = 11;
    const randomNumber = getRandomNumber(maxNum);
    function getRandomNumber(maxNum) {
        mathRandom = Math.random();
        return Math.floor(mathRandom * maxNum);
    }
    // function that generates the random number


    function checkAnswer() {
        if (inputNumber.value == randomNumber) {
            screen1.style.display = "none";
            screen2.style.display = "block";
            screen2Span.innerHTML = "Acertou em " + tries + " tentativas"
        }
        else {
            errorMessageContainer.style.display = "flex";
            page.style.paddingBottom = "2.5rem";
            errorImg.style.display = "none";
            errorMessage.innerHTML = "Errado! O número era: " + randomNumber;
            errorMessage.style.color = "#34355B";
            console.log(inputNumber.value);
            tries = tries + 1;
            console.log("tentativa número: " + tries);
        }
    }
    // function that check if the answer is correct
    
    let inputValue = parseFloat(inputNumber.value); 
    // variable that reads the user input and parse it into a integer, so that if the input is blank...
    // it doesnt read it as 0
    
    if (Number.isInteger(inputValue) && !isNaN(inputValue) && inputNumber.value >= 0 && inputNumber.value <= 10) { // runs the checkAnswer function if 
        errorMessageContainer.style.display = "none";                                                              // input number follow all rules
        page.style.paddingBottom = "6.4rem";
        console.log(randomNumber);

        checkAnswer();
    }
    else if (inputNumber.value > 10 || inputNumber.value < 0) { // makes ther error container visible if the input is
        errorMessageContainer.style.display = "flex";           // smaller than 0 or greater than 10
        page.style.paddingBottom = "2.5rem";
        errorMessage.innerHTML = "Insira um número entre 0 e 10"
        errorMessage.style.color = "#ef3e3e";
        errorImg.style.display = "block";
    }
    else if (isNaN(inputValue)) {   // makes the error container visible if the input is blank (NaN)
        errorMessageContainer.style.display = "flex";
        page.style.paddingBottom = "2.5rem";
        errorMessage.innerHTML = "Insira um número";
        errorMessage.style.color = "#ef3e3e";
        errorImg.style.display = "block";
    }
    else if (!Number.isInteger(inputValue)) { // makes the error container visible if the input is not an integer
        errorMessageContainer.style.display = "flex";           
        page.style.paddingBottom = "2.5rem";
        errorMessage.innerHTML = "Insira um número inteiro entre 0 e 10";
        errorMessage.style.color = "#ef3e3e";
        errorImg.style.display = "block";
    }   
    // analyses the user input
}
