import throttle from "lodash.throttle";
const KEY_STORAGE = "feedback-form-state";
const refs = {
form:document.querySelector(".feedback-form"),
textarea:document.querySelector(".feedback-form textarea"),
input:document.querySelector(".feedback-form input"),    
}
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTexareaInput, 500));

populateTextarea();
let objectDataForm = {};
function dataFormLocalStorage() {
return JSON.parse(localStorage.getItem(KEY_STORAGE)) ?? {};
}

function onTexareaInput(evt){
    evt.preventDefault();
    objectDataForm = dataFormLocalStorage();
    objectDataForm[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_STORAGE,JSON.stringify(objectDataForm));
}
function populateTextarea() {
    const savedFormMessage = dataFormLocalStorage;
    if (savedFormMessage.email) {
       refs.input.value = savedFormMessage.email;   
    }
    if (savedFormMessage.message) {
        refs.textarea.value = savedFormMessage.message; 
    }
}
function onFormSubmit(evt) {
    evt.preventDefault;
    if (!refs.input.value || !refs.textarea.value) {
       return   alert("Please fill in all the fields");
      
    }
    console.log(objectDataForm);
    localStorage.removeItem(KEY_STORAGE);
    evt.currentTarger.reset();
}