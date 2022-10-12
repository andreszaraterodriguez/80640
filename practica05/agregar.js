
function leer() {
    return document.getElementById("todo").value
}

function agregar() {
    nodo = document.createElement("li")
    // texto = document.createTextNode("hola")
    // texto= document.createTextNode (document.getElementById("todo").value)
    texto= document.createTextNode(leer () )
    // console.log(texto)
    nodo.appendChild(texto)
    nodo.setAttribute("id", leer())
    document.getElementById("lista").appendChild(nodo)

}



   
function buscarId() {

    if (document.getElementById(leer()) == null) {
        console.log("No encontrado")
    }else{
        alert("ya existe")
    }

    
}

function buscarFor() {
    listaTodo = document.getElementsByTagName("li")
    for (i =0 ; i < listaTodo.length; ++0); 
        const tarea = listaTodo{i};
        if (leer() == tarea.textContent) {
            console.log("ya existe")
        }
    }

    function buscarOF() {
        listaTodo = document.getElementsByTagName("li")
        for (const tarea of listaTodo ){
            console.log(iterator)
            if (leer() == tarea.textContent) {
                console.log("ya existe")
            }
        }
        
    }
    function buscar() {
        listaTodo = document.getElementsByTagName("li")
        for (const tarea in listaTodo ){
            if (Object.hasOwnProperty.call(listaTodo, tarea)) {
                console.log(listaTodo[tarea].childNodes[0])
                if (leer() ==listaTodo [tarea].childNodes[0]) 
                    console.log("ya esicste")
                else{
                    console.log("no existe")
                }
            }
        }
    }
