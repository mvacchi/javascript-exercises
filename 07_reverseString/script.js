const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

container.appendChild(heading);

const div = document.createElement("div");
div.classList.add("div");
div.style.border = "1px solid black";
div.style.background = "pink";


const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.classList.add("p2");
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

