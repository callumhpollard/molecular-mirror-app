// Get select elements
var molecule1Select = document.getElementById("select-molecule-1");
var molecule2Select = document.getElementById("select-molecule-2");
var moleculeSelects = [molecule1Select, molecule2Select];

var orbital1Select = document.getElementById("select-orbital-1");
var orbital2Select = document.getElementById("select-orbital-2");
var orbitalSelects = [orbital1Select, orbital2Select];

// Get 3D elements from each marker
var marker1AMolecule = document.querySelector("#mrk1Amol");
var marker1BMolecule = document.querySelector("#mrk1Bmol");
var marker1AOrbRed = document.querySelector("#mrk1Aomr");
var marker1AOrbBlue = document.querySelector("#mrk1Aoma");
var marker1BOrbRed = document.querySelector("#mrk1Bomr");
var marker1BOrbBlue = document.querySelector("#mrk1Boma");

var marker2AMolecule = document.querySelector("#mrk2Amol");
var marker2BMolecule = document.querySelector("#mrk2Bmol");
var marker2AOrbRed = document.querySelector("#mrk2Aomr");
var marker2AOrbBlue = document.querySelector("#mrk2Aoma");
var marker2BOrbRed = document.querySelector("#mrk2Bomr");
var marker2BOrbBlue = document.querySelector("#mrk2Boma");

var resetActivityButton = document.querySelector("reset-activity");

// Store models in arrays for easier handling
var moleculesMarker1 = [marker1AMolecule, marker1BMolecule];
var redOrbitalsMarker1 = [marker1AOrbRed, marker1BOrbRed];
var blueOrbitalsMarker1 = [marker1AOrbBlue, marker1BOrbBlue];

var moleculesMarker2 = [marker2AMolecule, marker2BMolecule];
var redOrbitalsMarker2 = [marker2AOrbRed, marker2BOrbRed];
var blueOrbitalsMarker2 = [marker2AOrbBlue, marker2BOrbBlue];

// Select first option by default
molecule1Select.selectedIndex = 0;
molecule2Select.selectedIndex = 0;
orbital1Select.selectedIndex = 0;
orbital2Select.selectedIndex = 0;

// Reset both markers to default state
function handleReset(e) {
  molecule1Select.selectedIndex = 0;
  molecule2Select.selectedIndex = 0;
  orbital1Select.selectedIndex = 0;
  orbital2Select.selectedIndex = 0;

  // There's a bug on A-frame. We need to remove the
  // attribute and add it again in order see the model change
  // marker1AModel.removeAttribute("gltf-model");
  // marker1BModel.removeAttribute("gltf-model");

  // marker2AModel.removeAttribute("gltf-model");
  // marker2BModel.removeAttribute("gltf-model");

  // marker1AModel.setAttribute("gltf-model", "#orb1");
  // marker1BModel.setAttribute("gltf-model", "#orb1");
  // marker2AModel.setAttribute("gltf-model", "#orb1");
  // marker2BModel.setAttribute("gltf-model", "#orb1");

  // marker1AModel.setAttribute("model-opacity", 0.5);
  // marker1BModel.setAttribute("model-opacity", 0.5);
  // marker2AModel.setAttribute("model-opacity", 0.5);
  // marker2BModel.setAttribute("model-opacity", 0.5);
}

function handleMoleculeSelection(e) {
  e.preventDefault();
  console.log(e);

  var moleculeSelected;
  var redOrbitalSelected;
  var blueOrbitalSelected;
  var selectedIndex = e.target.selectedIndex;
  var molIndex = selectedIndex  + 1;

  // Which marker was selected? Get its molecules & orbitals
  if (e.target.id === "select-molecule-1") {
    moleculeSelected = moleculesMarker1;
    redOrbitalSelected = redOrbitalsMarker1;
    blueOrbitalSelected = blueOrbitalsMarker1;
  } else {
    moleculeSelected = moleculesMarker2;
    redOrbitalSelected = redOrbitalsMarker2;
    blueOrbitalSelected = blueOrbitalsMarker2;
  }

  // There's a bug on A-frame. We need to remove the
  // attribute and add it again in order see the model change
  moleculeSelected.forEach(function(item){
    item.removeAttribute("gltf-model");
  });
  redOrbitalSelected.forEach(function(item){
    item.removeAttribute("gltf-model");
  });
  blueOrbitalSelected.forEach(function(item){
    item.removeAttribute("gltf-model");
  });

  // Set molecule selected and default orbitals
  moleculeSelected.forEach(function(item){
    item.setAttribute("gltf-model", "#mol" + molIndex);
  });
  redOrbitalSelected.forEach(function(item){
    item.setAttribute("gltf-model", "#mo" + molIndex + "_1r");
  });
  blueOrbitalSelected.forEach(function(item){
    item.setAttribute("gltf-model", "#mo" + molIndex + "_1a");
  });


  

  // var modelsSelected =
  //   e.target.id === "select-marker-1" ? modelsMarker1 : modelsMarker2;
  // var index = markerSelected.selectedIndex;

  // // Select index starts with 0 and IDs starts with 1
  // // Be careful if using multiple option groups
  // var assetIndex = index + 1;


  // // Select the asset that corresponds to the option selected
  // modelsSelected[0].setAttribute("gltf-model", "#orb" + assetIndex);
  // modelsSelected[0].setAttribute("model-opacity", 0.5);
  // modelsSelected[1].setAttribute("gltf-model", "#orb" + assetIndex);
  // modelsSelected[1].setAttribute("model-opacity", 0.5);
}

function handleOrbitalSelection(e) {
  console.log(e);
}

molecule1Select.addEventListener("change", handleMoleculeSelection);
molecule2Select.addEventListener("change", handleMoleculeSelection);
orbital1Select.addEventListener("change", handleOrbitalSelection);
orbital2Select.addEventListener("change", handleOrbitalSelection);
resetActivityButton.addEventListener("resetActivity", handleReset);
