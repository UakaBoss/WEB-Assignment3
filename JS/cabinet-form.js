//creating p tag to create an alert
const alertText = document.createElement("p");

//function that happens when clicking submit button
function submit() {
    const formEmail = document.getElementById("form-input");
    const formValue = formEmail.value;
    //checking if there are @ and . in our email input field
    if (!formValue.includes("@") || !formValue.includes(".")) alertFail();
    else {
        //removing text from input and running alertSuccess function
        alertText.remove();
        alertSuccess();
    }
        
}

//if we failed the requrements
function alertFail() {
    //alert text
    alertText.textContent = "email you wrote doesn't satisfy";
    alertText.classList.add("alertFail");
    const emailContainer = document.getElementById("form-email-container");
    //adding alert text to html
    emailContainer.append(alertText);
}

//if we successed the requrements
function alertSuccess() {
    //alert text
    alertText.textContent = "thanks for sharing with contact";
    alertText.classList.add("alertSuccess");
    const emailContainer = document.getElementById("form-email-container");
    //adding alert text to html
    emailContainer.append(alertText);
}