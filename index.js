var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber ===0){
        outputBox.innerText = "your birthday is lucky";
    }
    else{
        outputBox.innerText=" not lucky";
    }
}

function checkBirthdayIsLucky(){
    
    var sum = calculateSum(dateOfBirth.value);
    //if(sum){
    compareValues(sum , luckyNumber.Value)
    //}else{
       // outputBox.innerText="please enter values";
    //}
}

checkNumberButton.addEventListener("click", checkBirthdayIsLucky )