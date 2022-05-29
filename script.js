let productDisplay = document.getElementById("product");
productDisplay.style.display = "grid";
productDisplay.style.marginLeft = "100px";
productDisplay.style.gridTemplateColumns = "repeat(3,500px)";
productDisplay.style.gridTemplateRows = "repeat(3,500px)";
let sol;
let rem;

let fetch = (i) => {
let theItem = JSON.parse(localStorage.getItem("Product - " + i));
displayData(theItem,i);
}

let displayData = (theItem,i) => {
let div = document.createElement("div");
let img = document.createElement("img");
rem = document.createElement("button");
rem.textContent = "Remove";
sol = document.createElement("button");
sol.textContent = "Sold"; 
img.src = theItem[2];
let p = document.createElement("p");
p.textContent = "Product Name:" + theItem[0];
let p1 = document.createElement("p");
p1.textContent = "Category:" + theItem[1];
let p2 = document.createElement("p");
p2.textContent = "For:" + theItem[4];
let p3 = document.createElement("p");
p3.textContent = "Price:" + theItem[3];
div.append(img);
div.append(p);
div.append(p1);
div.append(p2);
div.append(p3);
div.append(rem);
div.append(sol);
productDisplay.appendChild(div);
rem.onclick = () => {
    div.style.display = "none";
    localStorage.removeItem("Product - " + i);
}

sol.onclick = () => {
    if(theItem[5] === true){
        sol.textContent = "Sold : FALSE"
    }else{
        sol.textContent = "Sold : TRUE"
    }
}
}
fetch(1)
fetch(2)
fetch(3)
fetch(4)
fetch(5)
fetch(6)
fetch(7)
fetch(8)
fetch(9)