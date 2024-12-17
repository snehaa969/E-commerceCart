const resultInput = document.getElementById('result');

function appendValue(value){
    resultInput.value += value();
}

function clearResult(){
    resultInput.value = '';
}

function calculateResult(){
    try{
        resultInput.value = eval(resultInput);
    }catch(error){
        alert("InValid Expression");
        clearResult();
    }
}