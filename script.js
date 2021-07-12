var start=document.querySelector("#btn")
var squares=document.querySelectorAll("td")

function clear(){
    for(var i=0; i<squares.length; i++){
        squares[i].textContent="";
    }
}

start.addEventListener("click",clear);

function marker(){
    if(this.textContent===""){
        this.textContent="X";
    }else if(this.textContent==="X"){
        this.textContent="O";
    }else{
        this.textContent="";
    }
}

for(var j=0; j<squares.length;j++){
    squares[j].addEventListener("click",marker)
}