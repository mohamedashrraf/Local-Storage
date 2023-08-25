let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("edit-item")) {
            editItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-items")) {
            showItems();
        }
        if (e.target.classList.contains("delete-All")) {
            deleteAll();
        }
    });
})


checkItem = ()=> {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) { //لو القيمة اللي في الانبوت موجودة في ال local 
            results.innerHTML = `found local item called <span>${theInput.value}</span>`
        }
        else {
            results.innerHTML = `Can not found local item called <span>${theInput.value}</span> !`
        }
    }
    else {
        results.innerHTML = "input can not be impty";
    }
}

addItem = () => {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            results.innerHTML = `this local storage item <span>${theInput.value}</span> is added previously`;
        }
        else {
            localStorage.setItem(theInput.value, "test");
            results.innerHTML = `local storage item <span>${theInput.value}</span> added`;
            theInput.value = '';
        }
    }
    else {
        results.innerHTML = "input can not be impty";
    }
}



deleteItem = () => {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `item ${theInput.value} is deleted succesfully`;
            theInput.value = '';
        }
        else {
            results.innerHTML = `Can not found local item called <span>${theInput.value}</span> !`
        }
    }
    else {
        results.innerHTML = "input can not be impty";
    }
}

showItems = () => {
    results.innerHTML = 'Items<br>';
    if (localStorage.length) { //لو في عناصر موجودة
        for (let [key, value] of Object.entries(localStorage)) { //يلف علي عناصر ال local
            results.innerHTML += `<span>${key}</span><br>`;
        }
    }
    else {
        results.innerHTML = "Local storage is impty";
    }
}


deleteAll = () => {
    localStorage.clear();
    results.innerHTML = "Local storage become impty now";
}