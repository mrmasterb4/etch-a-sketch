body = document.querySelector("body");
main = document.createElement("div");
main.id = "main";
sidepanel = document.createElement("div");
sidepanel.id = "sidepanel";
main.appendChild(sidepanel);

sizer = document.createElement("div");
sizer.id = "sizer";
sizerinput = document.createElement("input");
sizerinput.type = "number";
sizerinput.max = "100";
sizerinput.value = "16";
sizerinput.id = "sizerinput";
sizer.appendChild(sizerinput);
sidepanel.appendChild(sizer);

document.addEventListener("change", function(e) {
    if (e.target.id == sizerinput.id) {
        container.innerHTML = "";
        grid();
    }
})

container = document.createElement("div");
container.id = "container";
function grid() {
    console.log(sizerinput.value);
    if (sizerinput.value <= 100) {
        for (let i = 0; i <= sizerinput.value; i++) {
            var vertical = document.createElement("div");
            vertical.id = i;
            vertical.className = "vertical";
            for (let j = 0; j <= sizerinput.value; j++) {
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
    }
    else {
        alert("Invalid Value");
    }
}
grid();
document.addEventListener("mousemove", function(e) {
    if (e.target.className == "horizontal") {
        console.log("hovered");
        e.target.style.backgroundColor = "white";
    }
})