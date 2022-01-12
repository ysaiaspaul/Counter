

//Declare global variables
let count = 0
let countEl =  document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let notification = document.getElementById("alert")


//Increase counter
 function increment(){
     count += 1

     countEl.innerText = count
     //saveEl.style.display = "block"
 }

//Decrease the count

function decrement(){
    if (count < 1){

       count === 0

    }else{
        count = --count
        countEl.innerText = count
    }
}

//Save the count
function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr

   // console.log(count)
}

//Reset the counter
function reset(){

    if (count === 0){

        notification.style.display = "block"
         saveEl.innerText = "Previews entries: "

    }else{
        count = 0
        countEl.innerText = count
        saveEl.innerText = "Previews entries: "

    }
}
//Close the alert message

document.getElementById("closebtn").onclick = function() {closebtn()};

function closebtn(){
    notification.style.display = "none";
}




