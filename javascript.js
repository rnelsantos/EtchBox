//ETCHING Function

//get elements for event triggers
//const box = document.querySelector(".cells");

//event listener for Cells
 let clicked=false;//default



container.addEventListener('mouseover', HoverIn);
container.addEventListener("mouseout", HoverOut);    


function HoverIn(){

    if (event.target.classList.contains("cell")){
        console.log("hovered cell")
        const hoveredItem = event.target;
        //hoveredItem.classList.add("hovered"); // Add class on hover (optional)
        darknessLevel=.5;
        const newColor = `RGBA(0,0,0, ${darknessLevel})`; // Create darker color
        hoveredItem.style.backgroundColor = "black";
    }
 
}

function HoverOut(){

    if (event.target.classList.contains("cell")){
        darknessLevel = 0;

        
    }

}

//cellDarkness=Array(dim*dim);

