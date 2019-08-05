var app = new Vue({
    el:'#root',
    data:{
        product: "Curso de Vue JS.",
        message: "La fecha de hoy es " + new Date().toLocaleDateString(),
        //Condicionales y bucles
        seenTrue: true,
        seenFalse: false,
        todos:[
            {text:"Learn JavScript"},
            {text:"Learn Vue"},
            {text: "Build something awesome"}
        ]
    }
});

