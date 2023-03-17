var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

var rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveLeftRight);

var head = document.getElementById("head");
head.addEventListener("click", rotate);

document.getElementById("lefteye").style.backgroundColor="purple";
document.getElementById("head").style.transform="rotate(720deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20){
            clearInterval(id);
        }
    }
}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10)
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70){
            clearInterval(id);
        }
    }
}

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 70;
    var id = setInterval(frame, 10)
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 20) {
            clearInterval(id);
        }
    }
}

function rotate(e) {
    var robotPart = e.target;
    var perc = 0;
    var id = setInterval(frame, 10)
    function frame() {
        robotPart.style.transform = "rotate(" + perc + "deg)";
        perc += 15;
        if (perc === 375) {
            clearInterval(id);
        }
    }
}