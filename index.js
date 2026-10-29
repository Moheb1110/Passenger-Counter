let saveEl = document.getElementById("save-el")
let clearEl = document.getElementById("clear-btn")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count > 0){
    let countStr = count + " - "
    total += count;
    totalEl.textContent = "Total: " + total;
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    }
}

function decrement() {
    if (count > 0){
        count -= 1
    }
    countEl.textContent = count;
}


clearEl.addEventListener("click", function clear() {
    saveEl.innerText = "Previous entries: "
    countEl.textContent = 0
    count = 0
    total = 0;
    totalEl.textContent = "Total: " + total;
})