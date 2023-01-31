function sayHello() {
    document.querySelector("h3").textContent = "Hello " + document.querySelector("#name").value;
    document.querySelector("h4").textContent = document.querySelector("#age").value;
    document.querySelector("h5").textContent = document.querySelector("#email").value;
}

document.querySelector("button").addEventListener("click", sayHello);