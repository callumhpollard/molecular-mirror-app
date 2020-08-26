var high = 100;
var medium = 50;
var low = 10;

var prevTemp = 0;

var scaleUp = document.getElementById("scale-up");
var scaleDown = document.getElementById("scale-down");
var tempControls = document.querySelectorAll("temp-control");
var tempLabel = document.getElementById("temperature");
var stopTemp = document.querySelector("stop-temp");
var playTemp = document.querySelector("play-temp");

// var flipGraphics = document.querySelector("flip-graphics");

// function handleFlip(e) {
//   sceneGroup.scale.x = -sceneGroup.scale.x;
//   // sceneGroup.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
// }

function handleScale(e) {
  if(e.detail === "up") {
    sceneGroup.scale.multiplyScalar(1.5);
  } else {
    sceneGroup.scale.multiplyScalar(0.6667);
  }
}

function handleTempControls(e) {
  var type = e.detail.type;
  var size = e.detail.size;

  var tempOffset;

  if (size === "big") {
    tempOffset = high;
  } else if (size === "medium") {
    tempOffset = medium;
  } else {
    tempOffset = low;
  }

  if (type === "increase") {
    temperature = temperature + tempOffset
  } else {
    temperature - tempOffset;
  }

  tempLabel.innerText = temperature;
}

function handleStopTemp(e) {
  prevTemp = temperature;
  temperature = 0;
  tempLabel.innerText = temperature;
}

function handlePlayTemp(e) {
  temperature = prevTemp;
  tempLabel.innerText = temperature;
}

scaleUp.addEventListener("scaleGraphics", handleScale);
scaleDown.addEventListener("scaleGraphics", handleScale);
stopTemp.addEventListener("stopTemp", handleStopTemp);
playTemp.addEventListener("playTemp", handlePlayTemp);
// flipGraphics.addEventListener("flipGraphics", handleFlip);

tempControls.forEach(function(item) {
  item.addEventListener("updateTemp", handleTempControls)
})
