


var xo_click = document.getElementsByClassName("click"),
    xo_array = ["X" , "O"],
    xo_array_counter = 0 ,
    drawCounter = 0 ;


for (var i = 0; i < xo_click.length; i = i + 1 ){
    xo_click[i].onclick = function (){
        this.textContent =  xo_array[xo_array_counter];

        if (xo_array_counter == xo_array.length - 1){
        xo_array_counter = 0;

       }else {xo_array_counter = xo_array_counter + 1;
       }

       this.disabled = true ;
       checkResult ();
       }
}
var xo_result = document.getElementById("xo_result");

function checkResult (){
    if (xo_click[0].innerHTML == "X" && xo_click[1].innerHTML == "X" && xo_click[2].innerHTML == "X"
    ||xo_click[3].innerHTML == "X" && xo_click[4].innerHTML == "X" && xo_click[5].innerHTML == "X"
    ||xo_click[6].innerHTML == "X" && xo_click[7].innerHTML == "X" && xo_click[8].innerHTML == "X"

    ||xo_click[0].innerHTML == "X" && xo_click[3].innerHTML == "X" && xo_click[6].innerHTML == "X"
    ||xo_click[1].innerHTML == "X" && xo_click[4].innerHTML == "X" && xo_click[7].innerHTML == "X"
    ||xo_click[2].innerHTML == "X" && xo_click[5].innerHTML == "X" && xo_click[8].innerHTML == "X"

    ||xo_click[0].innerHTML == "X" && xo_click[4].innerHTML == "X" && xo_click[8].innerHTML == "X"
    ||xo_click[2].innerHTML == "X" && xo_click[4].innerHTML == "X" && xo_click[6].innerHTML == "X"
    ){
    xo_result.textContent = "Player X wins" ;
    xo_result.style.display = "block" ;
    tryagain_button.style.display = "block" ;

    }else if (xo_click[0].innerHTML == "O" && xo_click[1].innerHTML == "O" && xo_click[2].innerHTML == "O"
    ||xo_click[3].innerHTML == "O" && xo_click[4].innerHTML == "O" && xo_click[5].innerHTML == "O"
    ||xo_click[6].innerHTML == "O" && xo_click[7].innerHTML == "O" && xo_click[8].innerHTML == "O"

    ||xo_click[0].innerHTML == "O" && xo_click[3].innerHTML == "O" && xo_click[6].innerHTML == "O"
    ||xo_click[1].innerHTML == "O" && xo_click[4].innerHTML == "O" && xo_click[7].innerHTML == "O"
    ||xo_click[2].innerHTML == "O" && xo_click[5].innerHTML == "O" && xo_click[8].innerHTML == "O"

    ||xo_click[0].innerHTML == "O" && xo_click[4].innerHTML == "O" && xo_click[8].innerHTML == "O"
    ||xo_click[2].innerHTML == "O" && xo_click[4].innerHTML == "O" && xo_click[6].innerHTML == "O"
    ){
    xo_result.textContent = "Player O wins" ;
    xo_result.style.display = "block" ;
    tryagain_button.style.display = "block" ;
    }else {
    drawCounter = drawCounter + 1 ;

    if (drawCounter == xo_click.length) {
    xo_result.textContent = "Draw" ;
    xo_result.style.display = "block" ;
    tryagain_button.style.display = "block" ;
    }
    }
}


var tryagain_button = document.getElementById("tryagain_button");
    tryagain_button.onclick = function(){
    xo_result.style.display = "none" ;
    xo_array_counter = 0 ;
    drawCounter = 0 ;

    for (var i = 0 ; i < xo_click.length; i = i + 1 ){
    xo_click[i].innerHTML = "";
    xo_click[i].disabled = false;
    }
    this.style.display = "none";
}

