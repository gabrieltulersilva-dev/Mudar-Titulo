const add = document.getElementById("add")
const pega = document.getElementById("pega")

add.onclick = faz

function faz(){

    let valor = pega.value; 

    document.getElementById("mud").innerText = valor


}