'use strict';

const TASK_PATTERN= /(?!^\s*?$)^.+$/;

const inputTaskElem = document.querySelector('input[name="task"]');

inputTaskElem.oninput = onInputHandler;

const createTaskButtonElem = document.getElementById('createTaskButton');

createTaskButtonElem.addEventListener('click', onCreateTaskButtonClick);



let isValid = false;

function onCreateTaskButtonClick( event ) {

    const taskInputElem = document.querySelector("input[placeholder=\"Please input your task\"]")
    alert(taskInputElem.value);
    taskInputElem.value = "";
}


function onInputHandler(event) {

    isValid = TASK_PATTERN.test(this.value);
    if(isValid){

        this.classList.remove("invalidStyle");
        this.classList.add("validStyle");

    }else{
        this.classList.add("invalidStyle");
        this.classList.remove("validStyle");
    }


    console.log(isValid);
}

