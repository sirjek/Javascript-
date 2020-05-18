// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const designCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');

// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
  event.preventDefault();
  reset();
  makeGrid();
};

//function that appends rows and columns based on the user input
function makeGrid() {
  // Your code goes here!
  for (let x = 0; x < height.value; x++){
    const row = designCanvas.insertRow(x);
    for (let y = 0; y < width.value; y++){
      const column = row.insertCell(y);
      column.addEventListener('click', function(){
        this.setAttribute('style', `background-color:${colorPicker.value}`);
      });
    }
  }
};

//function that deletes the user inputs
function reset(){
  while (designCanvas.firstChild){
    designCanvas.removeChild(designCanvas.firstChild)
  }
};
