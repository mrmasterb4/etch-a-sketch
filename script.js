// Main elements
body = document.querySelector("body");
main = document.createElement("div");
main.id = "main";

// Sidepanel
sidepanel = document.createElement("div");
sidepanel.id = "sidepanel";
sideheader = document.createElement("p");
sideheader.textContent = "MENU";
sidepanel.appendChild(sideheader);
main.appendChild(sidepanel);

// Rainbow Handling
rainbowdiv = document.createElement("div");
rainbowdiv.id = "rainbowdiv";
rainbowtext = document.createElement("p");
rainbowtext.textContent = "Toggle Rainbow";
rainbowdiv.appendChild(rainbowtext);
rainbowvalue = document.createElement("input");
rainbowvalue.id = "rainbow";
rainbowvalue.type = "checkbox";
rainbowdiv.appendChild(rainbowvalue);
sidepanel.appendChild(rainbowdiv);

// Grid Sizing Handler
sizer = document.createElement("div");
sizer.id = "sizer";
sizerinput = document.createElement("input");
sizerinput.type = "number";
sizerinput.max = "100";
sizerinput.value = "16";
sizerinput.id = "sizerinput";
sizertext = document.createElement("p");
sizertext.textContent = "Grid Size";
sizer.appendChild(sizertext);
sizer.appendChild(sizerinput);
sidepanel.appendChild(sizer);

// Add reset button
reset = document.createElement("p");
reset.textContent = "RESET";
reset.id = "reset";
sidepanel.appendChild(reset);

// Detect change in sizer value
var rainbow = 0;
document.addEventListener("change", function(e) {
    if (e.target.id == sizerinput.id) {
        container.innerHTML = "";
        grid();
    }
    else if (e.target.id == rainbowvalue.id) {
        if (rainbow == 0) {
            rainbow = 1;
            container.innerHTML = "";
            grid();
        }
        else {
            rainbow = 0;
            container.innerHTML = "";
            grid();
        }
    }
})


// Grid function.
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

function getRGB() {
    var R = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    var G = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    var B = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    return "rgb(" + R + "," + G + "," + B + ")";
}
console.log("value is", rainbowvalue.value);

// Detect move, and change color.
document.addEventListener("mousemove", function(e) {
    if (e.target.className == "horizontal" && rainbow == 1) {
        console.log(rainbowvalue.value);
        console.log("rainbow");
        e.target.style.backgroundColor = getRGB();
    }
    else if (e.target.className == "horizontal") {
        console.log("hovered");
        e.target.style.backgroundColor = "white";
    }
})

// Detect reset click
document.addEventListener("click", function(r) {
    if (r.target.id == "reset") {
        container.innerHTML = "";
        grid(); 
    }
})