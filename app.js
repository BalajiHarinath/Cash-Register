const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const table = document.querySelector(".change-table");
const button = document.querySelector(".check-button");
const message = document.querySelector(".msg");
var numNotes = document.querySelectorAll(".num-notes");
const divConditional = document.querySelector(".conditional-div");

const notes = [2000, 500, 100, 50, 20, 10, 1];

divConditional.style.display = "none";

const showMessage = msg => {
    message.style.display = "block";
    message.innerText = msg;
}

const clickHandler = () => {
    
    message.style.display = "none";
    if(billAmount.value > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            divConditional.style.display = "block";
            let changeToBeReturned = cashGiven.value-billAmount.value;
            for(let i=0; i<notes.length; i++){
                const numberOfNotes = Math.trunc(changeToBeReturned/notes[i]);
                changeToBeReturned%=notes[i];
                numNotes[i].innerText = numberOfNotes;
            }
        }
        else{
            showMessage("Cash given should be greater than the bill amount")
        }
    }else{
        showMessage("Bill amount should be greater than 0")
    }
}
button.addEventListener("click", clickHandler);
 
