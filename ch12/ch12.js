var trainSpeed = 250;
var trainPosition = 0;
var animation;
var train = document.getElementById("train");
stopButton.addEventListener("click", stopTrain);
function speedUp() {
if (trainSpeed > 10) {
trainSpeed -= 10;
clearInterval (animation);
animation = setInterval (frame, trainSpeed);
}
    function frame() {
       trainPosition += 2;
       train.style.left = trainPosition + 'px';
       checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
if (currentPosition === 260) {
alert("CRASH!");
consle.log("CRASH!");
clearInterval(animation);
}
}

function stopTrain() {
if (trainPosition < 260) {
clearInterval (animation);
}
}
