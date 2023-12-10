document.addEventListener("DOMContentLoaded", function () {
    const boardContainer = document.querySelector("#box");

    // Create the 15x15 grid cells
    var r=1,b=1,g=1,y=1;
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            const cell = document.createElement("div");
            cell.className = "grids";
            cell.id = `cell-${i}-${j}`;
            if(((i==2 || i==13) && j==6) || ((i==1 || i==12) && j==8) || (i==6 && (j==1 || j==12)) || (i==8 && (j==2 || j==13)))
            {
                const span = document.createElement("span");
                cell.className = " grids safe";
                span.id="safe";
            span.className = "material-symbols-outlined";
            span.textContent = "star";

            // Append the span to the cell
            cell.appendChild(span);
            }
            
            boardContainer.appendChild(cell);

        }
    }
   
const home = document.createElement("img");
home.src="home.png";
home.alt="HOME";
home.style.width="100px";
   document.getElementById("cell-7-7").append(home); 


});






