function allowDrop(e){
    e.preventDefault();
}
function drag(e){
    e.dataTransfer.setData("text", e.target.id)
}
function drop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    testing();
}

function testing(){
    var correcto=1;
    var pokes = document.getElementsByClassName("pokemon");
    for(var i=0;i<pokes.length;i++){
        if(pokes[i].getAttribute("name")
        != 
        pokes[i].parentNode.getAttribute("id"))
        {
            correcto=correcto*0;
            break;
        }
    }
    if(correcto == 1){
        document.getElementById("resultado").innerHTML="CORRECTO";
    } else{
        document.getElementById("resultado").innerHTML="INCORRECTO";
    }
}