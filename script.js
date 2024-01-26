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


// Progressive Color
progressivediv = document.createElement("div");
progressivediv.id = "progressivediv";
progressivetext = document.createElement("p");
progressivetext.textContent = "Toggle Color Growth";
progressivediv.appendChild(progressivetext);
progressivevalue = document.createElement("input");
progressivevalue.id = "progressive";
progressivevalue.type = "checkbox";
progressivediv.appendChild(progressivevalue);
sidepanel.appendChild(progressivediv);

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
var progressive = 0;
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
    else if (e.target.id == progressivevalue.id) {
        if (progressive == 0) {
            progressive = 1;
            container.innerHTML = "";
            grid();
        }
        else {
            progressive = 0;
            progR = 0;
            progG = 0;
            progB = 0;
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
                horizontal.style.backgroundColor = "blue";
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

// Function for color growth
var progR = 0;
var progG = 0;
var progB = 0;

// Detect move, and change color.
var storedvalue = "";
var progRGB = "";
var RGBvalue = "";
document.addEventListener("mousemove", function(e) {
    if (e.target.className == "horizontal" && rainbow == 1) {
        console.log(rainbowvalue.value);
        console.log("rainbow");
        e.target.style.backgroundColor = getRGB();
    }
    else if (e.target.className == "horizontal" && progressive == 1) {
        var style = window.getComputedStyle(e.target);
        progRGB = "";
        var progColor = style.getPropertyValue("background-color");
        for (let i = 0; i <= progColor.length - 1; i++) {
            console.log(progColor);
            if (progColor[i] == "," | progColor[i] == ")") {
                console.log("Current i is ", i, "value is", progColor[i]);
                console.log("Parsed", parseInt(storedvalue));
                if (parseInt(storedvalue) < 255) {
                    RGBvalue = 10 + parseInt(storedvalue);
                }
                else {
                    console.log("else", storedvalue);
                    RGBvalue = parseInt(storedvalue);
                }
                console.log("New value is", storedvalue);
                console.log("rgb is", RGBvalue);
                storedvalue = "";
                progRGB = progRGB + RGBvalue + progColor[i];
                console.log("prog is", progRGB);
            }
            else if (Number.isInteger(parseInt(progColor[i]))) {
                storedvalue = storedvalue + progColor[i];
                console.log("Current i is ", i, "value is", progColor[i]);
                console.log("stored")
                console.log(storedvalue);
            }
            else {
                progRGB = progRGB + progColor[i];
            }

        }
        console.log("Target RGB", progRGB);
        e.target.style.backgroundColor = progRGB;
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