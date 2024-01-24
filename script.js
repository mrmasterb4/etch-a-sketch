body = document.querySelector("body");
main = document.createElement("div");
main.id = "main";
sidepanel = document.createElement("div");
sidepanel.id = "sidepanel";
main.appendChild(sidepanel);
container = document.createElement("div");
container.id = "container";
for (let i = 0; i <= 16; i++) {
    var vertical = document.createElement("div");
    vertical.id = i;
    vertical.className = "vertical";
    for (let j = 0; j <= 16; j++) {
        var horizontal = document.createElement("div");
        horizontal.id = i + "-" + j
        horizontal.className = "horizontal";
        var p = document.createElement("p");
        horizontal.appendChild(p);
        vertical.appendChild(horizontal);
    }
    container.appendChild(vertical);
}
main.appendChild(container);
body.appendChild(main);

document.addEventListener("mousemove", function(e) {
    if (e.target.className == "horizontal") {
        console.log("hovered");
        e.target.style.backgroundColor = "white";
    }
})