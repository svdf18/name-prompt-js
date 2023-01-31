function sayHello() {
    document.querySelector("h3").textContent = "Hello " + document.querySelector("input").value;
}

document.querySelector("button").addEventListener("click", sayHello);