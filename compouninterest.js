function compoundInterestCalc(inicial, interes, periodos){
   //const potencia = Math.pow(1+interes,periodos)
   //const operacion = inicial * potencia
   var interest = interes/100;
   const operacion = inicial*(1+interest)**periodos;
   return operacion
}

function onClickButtonCompoundInterest() {
    const inputMoney = document.getElementById("InputMoney");
    const moneyValue = inputMoney.value;
    
    const inputInterest = document.getElementById("InputInterest");
    const interestValue = inputInterest.value;

    const inputTerm = document.getElementById("InputTerm");
    const termValue = inputTerm.value;

    
  
  
    const compoundInterest = compoundInterestCalc(moneyValue, interestValue, termValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "su interes compuesto es: " + compoundInterest;
  }