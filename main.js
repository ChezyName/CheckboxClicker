//While the page is loaded, keep clicking on check boxes
var inputs = document.querySelectorAll("input[type='checkbox']:not(:checked)");

function doSome(currentIndex){
    //get random number between 50 and 200
    //clamp from currentIndex - max input
    let amount = currentIndex + Math.floor(Math.random() * 3) + 1;
    amount = currentIndex + 1;
    amount = Math.min(Math.max(amount, currentIndex), inputs.length);

    for(let i = currentIndex; i < amount; i++){
        if(!inputs[i].checked){
            inputs[i].click();
            console.log("Auto Clicking: " + inputs[i].id);
        }
    }

    return amount;
}

let index = 0;
function main() {
    inputs = document.querySelectorAll("input[type='checkbox']:not(:checked)");
    if(inputs.length == 0 || inputs.length == undefined || inputs.length == NaN || inputs.length == null){
        //Stil loading checkboxes
        console.log("inputs array length == 0")
        let randomWaitMS = Math.floor(Math.random() * 1500) + 300;
        setTimeout(main, randomWaitMS);
    }
    else {
        /*
        console.log("Running Click Starting From: " + index);
        index = doSome(index);
        console.log("Finished Click Ending At: " + index);
    
        if(index > inputs.length) index = 0;
        */

        if(inputs.length > 0) inputs[0].click();
    
        //wait some time
        let randomWaitMS = 125;
        index++;
        if(index > 5){
            index = 0;
            setTimeout(main, randomWaitMS*5);
        }
        else setTimeout(main, randomWaitMS);
    }
}

//Wait for page to load
console.log("Loaded Auto Checkbox Clicker - By ChezyName")
main();