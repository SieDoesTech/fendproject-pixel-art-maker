// Select Color Input
var inputColor= document.querySelector("#colorPicker");
    var colorIn;


// Select size input

var inputHeight = document.querySelector("#inputHeight");
var inputWidth = document.querySelector("#inputWidth");
// select canvas

var canvas = document.querySelector("#pixelCanvas");
// When size is submitted by user, call makeGrid()

var inputSubmit = document.querySelector("#sizePicker input[type=submit]")
inputSubmit.addEventListener("click", e => {
    e.preventDefault();
    makeGrid();
})

var pixelCanvas="";

// get height and width values
function makeGrid(){
    var height = inputHeight.value;
    var width = inputWidth.value;

// Draw rows across

var grid = "";
    for (var i=0; i<height; i++){
            var row = canvas.insertRow(i);
        // grid+= '<tr id = "pixelRow">'; 
            
// in each row draw boxes  
        for (var j =0; j<width;j++){
            var cell = row.insertCell(j);
            // grid+= '<td id = "pixelCell"> </td>';
             cell.addEventListener('click', colorIn);
        }
        canvas.appendChild(row);
        // row.appendChild(cell);
        // grid += '</tr>';
    }

// insert all of it in HTML
// canvas.innerHTML=grid;
}

 function colorIn (e){
    e.target.style.backgroundColor=inputColor.value;
 }



 
// input color into cells

// function colorCell() {
//     var gridCells = document.querySelectorAll(cell);
//     gridCells.forEach((gridCells) => {
//         cell.addEventListener( 'click', e=> {
//             e.target.style.backgroundColor= inputColor.value;
//         })
//     })
// }



// Feature 3
// When submit is clicked again, the grid is reconstructed.
