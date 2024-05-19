async function play() {


    if (count == 0) {
        document.querySelector(".area").innerHTML = `<div style="background-color: green; width: 10px; height: 10px; margin-top: 0; margin-left: 0"></div>`;

        await sleep(0);

        window.addEventListener("keydown", function (direction) {
            switch (direction.key) {
                case "ArrowLeft":
                    console.log("left arrow key pressed.");
                    chose = 3;
                    change += 1;
                    break;
                case "ArrowRight":
                    console.log("right arrow key pressed.");
                    chose = 4;
                    change += 1;
                    break;
                case "ArrowUp":
                    console.log("up arrow key pressed.");
                    chose = 1;
                    change += 1;
                    break;
                case "ArrowDown":
                    console.log("down arrow key pressed.");
                    chose = 2;
                    change += 1;
                    break;
                default:
                    break;
            }
        })
    }
    else {
        await sleep(lev);
    }
    moving();
    if (count == 0) {
        random();
    }
}

const isLargeDevice = window.innerWidth;
var width = 30;
var move = 10;
var random_height = 0;
var random_width = 0;
var count = 0;
var arrt1 = 0;
var arrl1 = 0;
var stop = 0;
var chose = 0;
var score = 0;
var change = 0;
var value = 0;
var lev = 1000;



const how = () => {
    window.location.href = "how.html";
}

const about = () => {
    window.location.href = "about.html";
}

const game = () => {
    window.location.href = "index.html";
}



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const random = () => {

    if (isLargeDevice <= 500) {
        random_height = Math.floor(Math.random() * 51) * 10;
        random_width = Math.floor(Math.random() * 32) * 10;

        document.querySelector(".area").setAttribute("style", `height: 520px;width: 330px;background-image: url(./basket/red_dot.jpg), url(./basket/black_back.jpg);background-size: 10px 10px, auto;background-position: ${random_width}px ${random_height}px, center center;background-repeat: no-repeat, no-repeat;display: flex;`);
        console.log(random_width, random_width);
    }

    else {
        random_height = Math.floor(Math.random() * 51) * 10;
        random_width = Math.floor(Math.random() * 44) * 10;

        document.querySelector(".area").setAttribute("style", `height: 520px;width: 450px;background-image: url(./basket/red_dot.jpg), url(./basket/black_back.jpg);background-size: 10px 10px, auto;background-position: ${random_width}px ${random_height}px, center center;background-repeat: no-repeat, no-repeat;display: flex;`);
        console.log(random_width, random_width);
    }
}

const moving = () => {
    if (chose == 1) {
        arrt1 = arrt1 - 10;
    }
    else if (chose == 2) {
        arrt1 = arrt1 + 10;
    }
    else if (chose == 3) {
        arrl1 = arrl1 - 10;
    }
    else if (chose == 4) {
        arrl1 = arrl1 + 10;
    }
    document.querySelector(".area").innerHTML = `<div style="background-color: green; width: 10px; height: 10px; margin-top: ${arrt1}px; margin-left: ${arrl1}px"></div>`;
    cheaker();
    console.log(arrl1, arrt1, stop);
    if (stop != 1) {
        play();
        count += 1;
    }
}

const cheaker = () => {
    if (isLargeDevice <= 500) {
        if ((arrl1 < 0) || (arrt1 < 0) || (arrl1 > 320) || (arrt1 > 510)) {
            stop = 1;
            alert("GAME OVER!");
        }
        if ((arrl1 == random_width) && (arrt1 == random_height)) {
            score += 1;
            random();
            value = (score * 3) / change;
            if (change == 0) {
                value = 0;
            }
            document.querySelector(".score").innerHTML = `<div style = "display: flex;flex-direction: column;align-items: center;gap: 15px;"><div style = "color: darkred;"><b>Total number of dots collected: ${score}</b></div><div style = "color: darkred;"><b>Number of times direction changed: ${change}</b></div><div style = "color: darkred;"><b>Score: ${value}</b></div></div>`;
        }
    }
    else{
        if ((arrl1 < 0) || (arrt1 < 0) || (arrl1 > 440) || (arrt1 > 510)) {
            stop = 1;
            alert("GAME OVER!");
        }
        if ((arrl1 == random_width) && (arrt1 == random_height)) {
            score += 1;
            random();
            value = (score * 3) / change;
            if (change == 0) {
                value = 0;
            }
            document.querySelector(".score").innerHTML = `<div style = "display: flex;flex-direction: column;align-items: center;gap: 15px;"><div style = "color: darkred;"><b>Total number of dots collected: ${score}</b></div><div style = "color: darkred;"><b>Number of times direction changed: ${change}</b></div><div style = "color: darkred;"><b>Score: ${value}</b></div></div>`;
        }
    }
}

const leve = (level) => {

    document.querySelector(".level_selected").className = "button";

    if (level == 1) {
        lev = 1000;
        document.querySelector("#level1").className = "level_selected";
    }
    else if (level == 2) {
        lev = 900;
        document.querySelector("#level2").className = "level_selected";
    }
    else if (level == 3) {
        lev = 800;
        document.querySelector("#level3").className = "level_selected";
    }
    else if (level == 4) {
        lev = 700;
        document.querySelector("#level4").className = "level_selected";
    }
    else if (level == 5) {
        lev = 600;
        document.querySelector("#level5").className = "level_selected";
    }
    else if (level == 6) {
        lev = 500;
        document.querySelector("#level6").className = "level_selected";
    }
    else if (level == 7) {
        lev = 400;
        document.querySelector("#level7").className = "level_selected";
    }
    else if (level == 8) {
        lev = 300;
        document.querySelector("#level8").className = "level_selected";
    }
    else if (level == 9) {
        lev = 200;
        document.querySelector("#level9").className = "level_selected";
    }
    else if (level == 10) {
        lev = 100;
        document.querySelector("#level10").className = "level_selected";
    }
    return lev;
}

const restart = () => {
    width = 30;
    move = 10;
    random_height = 0;
    random_width = 0;
    count = 0;
    arrt1 = 0;
    arrl1 = 0;
    stop = 0;
    chose = 0;
    score = 0;
    change = 0;
    value = 0;

    document.querySelector(".area").innerHTML = `<div></div>`;

}


if (isLargeDevice <= 500) {
    let Div1 = document.createElement("Div1");
    Div1.innerHTML = `<div class="arrowu"><button onclick ="direct(3)" class="control"><span class="material-symbols-outlined">arrow_upward</span></button></div><div class="arrowd"><button onclick ="direct(4)" class="control"><span class="material-symbols-outlined">arrow_downward</span></button></div>`;
    Div1.setAttribute("class", "created");
    Div1.setAttribute("style", `display: flex;flex-direction:column;align-items: center;justify-content: center;`);

    document.querySelector(".controler").append(Div1);

    let Div2 = document.createElement("Div2");
    Div2.innerHTML = `<div class="arrowl"><button onclick ="direct(1)" class="control"><span class="material-symbols-outlined">arrow_back</span></button></div><div class="arrowr"><button onclick ="direct(2)" class="control"><span class="material-symbols-outlined">arrow_forward</span></button></div>`;
    Div2.setAttribute("class", "created");
    Div2.setAttribute("style", `display: flex;align-items: center;justify-content: center;gap:40px;transform: translateY(-50px);`);

    document.querySelector(".controler").append(Div2);

    document.querySelector(".control").addEventListener("click", direct = (e) => {
        switch (e) {
            case 1:
                console.log("left arrow key pressed.");
                chose = 3;
                change += 1;
                break;
            case 2:
                console.log("right arrow key pressed.");
                chose = 4;
                change += 1;
                break;
            case 3:
                console.log("up arrow key pressed.");
                chose = 1;
                change += 1;
                break;
            case 4:
                console.log("down arrow key pressed.");
                chose = 2;
                change += 1;
                break;
            default:
                break;
        }
    })



}