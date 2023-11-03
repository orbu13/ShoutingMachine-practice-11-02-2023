// UI logic 
function getAndSetShoutingMachineVAlues(){
    // in this section we get the value for each form input
        const person1Input = document.getElementById("person1Input").value;
        const person2Input = document.getElementById("person2Input").value;
        const person3Input = document.getElementById("person3Input").value;
        const person4Input = document.getElementById("person4Input").value;

        // Convert the inputs to uppercase
        const person1UpperCase = person1Input.toUpperCase()
        const person2UpperCase = person2Input.toUpperCase()
        const person3UpperCase = person3Input.toUpperCase()
        const person4UpperCase = person4Input.toUpperCase()

     // then we set the story variables to the values we got from the form
        document.querySelector("span#person1").innerText = person1UpperCase;
        document.querySelector("span#person2").innerText = person2UpperCase;
        document.querySelector("span#person3").innerText = person3UpperCase;
        document.querySelector("span#person4").innerText = person4UpperCase;
}

    let form = document.querySelector("form");
    form.onsubmit = function(e){
        e.preventDefault();

        getAndSetShoutingMachineVAlues()
        document.querySelector("div#story").removeAttribute("class");

    }