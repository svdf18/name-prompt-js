function sayHello() {
    document.querySelector("#namet").textContent = "Hello " + document.querySelector("#name").value + "!";
    document.querySelector("#aget").textContent += "Age: " + document.querySelector("#age").value;
    document.querySelector("#emailt").textContent += "Email: " + document.querySelector("#email").value;
}

document.querySelector("button").addEventListener("click", sayHello);