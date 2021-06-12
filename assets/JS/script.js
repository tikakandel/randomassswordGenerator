// DOM elements 
const lengthDOM = document.getElementById('length');
const upperCaseDOM = document.getElementById('upperCase');
const lowerCaseDOM = document.getElementById('lowerCase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordDOM = document.getElementById('password');


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
    
}
//generate random UpperCase letter 
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
    
}
//generate random number  
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
    
}
//generate random symbol

function getRandomSymbol(){
    var symbols = '!@$&(){}[]=<>/';
    return symbols[Math.floor(Math.random() * symbols.length)];
    
}

// declare object to pass the value from function of character, symbol and numbers 
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol

};
//Event listener for button 
generateBtn.addEventListener('click', () => {

            const length = +lengthDOM.value; //this will convert to number from string 
            const hasLower = lowerCaseDOM.checked;
            const hasUpper = upperCaseDOM.checked;
            const hasNumber = numbersDOM.checked;
            const hasSymbol = symbolsDOM.checked;
            //writes final password to the text box 
            passwordDOM.inerText = writePassword(hasLower, hasUpper, hasNumber, hasSymbol, 
            length);
           
        });
        
//Generate Password Function 
function writePassword(lower, upper, number, symbol, length) 
{
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    //Filter out checked/unchecked type 
    const typesArr = [{lower}, {upper}, {number},{symbol}].filter(item => Object.values(item)[0]); 
   
        //checks if there is no  value is selected 
     if(typesCount === 0){
            return '';
          
            }
            //loop over the length and call generator function for each type
            for(let i = 0; i < length; i += typesCount) 
                {
                typesArr.forEach(type => {
                    const funcName = Object.keys(type)[0];
                    generatedPassword += randomFunc[funcName]();
                    generatedPassword = generatedPassword.slice(0, length);
                });
            }

        //Writing final pasword 
        var passwordText = document.querySelector("#password");
        passwordText.value = generatedPassword;
}
     