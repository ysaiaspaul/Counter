

//Declare global variables
let count = 0
let countEl =  document.getElementById("count-el")

//Increase counter
 function increment(){
     count = count + 1

     countEl.innerText = count
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
    console.log(count)
}

//Reset the counter
function reset(){

    if (count === 0){
        //alert("Is already at 0!")
        document.getElementById("alert").style.display = "block";
    }else{
        count = 0
        countEl.innerText = count
    }
}
//Close the alert message

document.getElementById("closebtn").onclick = function() {closebtn()};

function closebtn(){
    document.getElementById("alert").style.display = "none";
}




