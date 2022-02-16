
document.querySelector(".refresh").addEventListener("click", randomNum);

function randomNum() {
    var random = (Math.round(Math.random() * 6));
    // console.log(random);
    if (random === 1) {
        document.getElementById("color1").style.background = "#03045E";
        document.getElementById("value1").innerHTML = "#03045E";
        document.getElementById("color2").style.background = "#00B4D8";
        document.getElementById("value2").innerHTML = "#00B4D8";
        document.getElementById("color3").style.background = "#90E0EF";
        document.getElementById("value3").innerHTML = "#90E0EF";
        document.getElementById("color4").style.background = "#CAF0F8";
        document.getElementById("value4").innerHTML = "#CAF0F8";

    } else if (random === 2) {
        document.getElementById("color1").style.background = "#F76E11";
        document.getElementById("value1").innerHTML = "#F76E11";
        document.getElementById("color2").style.background = "#FF9F45";
        document.getElementById("value2").innerHTML = "#FF9F45";
        document.getElementById("color3").style.background = "#FFBC80";
        document.getElementById("value3").innerHTML = "#FFBC80";
        document.getElementById("color4").style.background = "#FC4F4F";
        document.getElementById("value4").innerHTML = "#FC4F4F";
    } else if (random === 3) {
        document.getElementById("color1").style.background = "#D3ECA7";
        document.getElementById("value1").innerHTML = "#D3ECA7";
        document.getElementById("color2").style.background = "#A1B57D";
        document.getElementById("value2").innerHTML = "#A1B57D";
        document.getElementById("color3").style.background = "#B33030";
        document.getElementById("value3").innerHTML = "#B33030";
        document.getElementById("color4").style.background = "#19282F";
        document.getElementById("value4").innerHTML = "#19282F";
    } else if (random === 4) {
        document.getElementById("color1").style.background = "#139487";
        document.getElementById("value1").innerHTML = "#139487";
        document.getElementById("color2").style.background = "#86C6F4";
        document.getElementById("value2").innerHTML = "#86C6F4";
        document.getElementById("color3").style.background = "#FFF1CE";
        document.getElementById("value3").innerHTML = "#FFF1CE";
        document.getElementById("color4").style.background = "#D29D2B";
        document.getElementById("value4").innerHTML = "#D29D2B";
    } else if (random === 5) {
        document.getElementById("color1").style.background = "#573391";
        document.getElementById("value1").innerHTML = "#573391";
        document.getElementById("color2").style.background = "#357C3C";
        document.getElementById("value2").innerHTML = "#357C3C";
        document.getElementById("color3").style.background = "#EF6D6D";
        document.getElementById("value3").innerHTML = "#EF6D6D";
        document.getElementById("color4").style.background = "#FFE6AB";
        document.getElementById("value4").innerHTML = "#FFE6AB";
    } else if (random === 6) {
        document.getElementById("color1").style.background = "#FF008E";
        document.getElementById("value1").innerHTML = "#FF008E";
        document.getElementById("color2").style.background = "#D22779";
        document.getElementById("value2").innerHTML = "#D22779";
        document.getElementById("color3").style.background = "#612897";
        document.getElementById("value3").innerHTML = "#612897";
        document.getElementById("color4").style.background = "#0C1E7F";
        document.getElementById("value4").innerHTML = "#0C1E7F";
    } else {
        document.getElementById("color1").style.background = "#495371";
        document.getElementById("value1").innerHTML = "#495371";
        document.getElementById("color2").style.background = "#74959A";
        document.getElementById("value2").innerHTML = "#74959A";
        document.getElementById("color3").style.background = "#98B4AA";
        document.getElementById("value3").innerHTML = "#98B4AA";
        document.getElementById("color4").style.background = "#F1E0AC";
        document.getElementById("value4").innerHTML = "#F1E0AC";
    }
}

document.querySelector(".container").addEventListener("click", mypopup);

function mypopup() {
    var popit = document.getElementById("popup");
    popit.classList.add("show");
    setTimeout(function () {
        popit.classList.remove("show");
    }, 2000);
}


document.querySelector("#color1").addEventListener("click", info1);
function info1() {
    var copied1 = document.getElementById("value1").innerHTML;
    console.log(copied1);
    navigator.clipboard.writeText(copied1);
}
document.querySelector("#color2").addEventListener("click", info2);
function info2() {
    var copied2 = document.getElementById("value2").innerHTML;
    console.log(copied2);
    navigator.clipboard.writeText(copied2);
}
document.querySelector("#color3").addEventListener("click", info3);
function info3() {
    var copied3 = document.getElementById("value3").innerHTML;
    console.log(copied3);
    navigator.clipboard.writeText(copied3);
}
document.querySelector("#color4").addEventListener("click", info4);
function info4() {
    var copied4 = document.getElementById("value4").innerHTML;
    console.log(copied4);
    navigator.clipboard.writeText(copied4);
}
