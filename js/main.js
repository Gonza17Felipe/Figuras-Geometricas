function fcirculo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("circulo");
}

function frombo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rombo");
}

function frectahori(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rectahori");
}

function frectaver(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("rectaver");
}

function fimagen(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("fimagen");
}

function farriba(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("farriba");
}

function fabajo(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("fabajo");
}

function fizqui(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("fizqui");
}

function fderecha(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("fderecha");
}

function fdiagonal(){
    var selector = document.getElementById("figura");
    selector.classList.toggle("fdiagonal");
}

function operaciones(){
    var valor1 =Number(document.getElementById("valor1").value);
    var valor2 =Number(document.getElementById("valor2").value);
    var operacion =document.getElementById("operaciones").value;
    switch (operacion) {
        case "+":
            resultado = valor1 + valor2;
            document.getElementById("respuesta").value = resultado;
            break;

        case "-":
            resultado = valor1 - valor2;
            document.getElementById("respuesta").value = resultado;
            break;
            
        case "*":
            resultado = valor1 * valor2;
            document.getElementById("respuesta").value = resultado;
            break;

        case "/":
            resultado = valor1 / valor2;
            document.getElementById("respuesta").value = resultado;
            break;
    }

}

function chatActive(){
    var selector = document.getElementById("chat");
    selector.classList.toggle("active");
    var selector2 = document.getElementById("btnChat");
    selector2.classList.toggle("active");
}