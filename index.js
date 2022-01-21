

//Declare global variables
let count = 0
let countEl =  document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let notification = document.getElementById("alert")


//Increase counter
 function increment(){
     count += 1

     countEl.textContent = count

 }

//Decrease the count

function decrement(){
    if (count < 1){

       count === 0

    }else{
        count = --count
        countEl.textContent = count
    }
}

//Save the count
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count

}

//Reset the counter
function reset(){

        saveEl.innerText = "Previews entries: "
        count = 0
        countEl.textContent = count
        notification.style.display = "block"


}
//Close the alert message

document.getElementById("closebtn").onclick = function() {closebtn()};

function closebtn(){
    notification.style.display = "none";
}




