let milfo_contador = 0;
let sumador=1;
let multiplicador=1;
let items = [
    {id: "bt-1", coste: 10, type: "sum", cant: 1, state: false}
]

document.getElementById('milfo-hit-box').addEventListener("click", () => {
    milfo_contador=milfo_contador+(sumador*multiplicador);
    document.getElementById('milfo-points').innerHTML = milfo_contador;
});

/* Milfo Powers */
document.querySelectorAll('.shop-item').forEach(boton => {
    boton.addEventListener("click", (e) => {
        const idBoton = e.target.id;
        for (let i = 0; i<items.length; i++){
            if(items[i].id === idBoton && items[i].state == false && milfo_contador >= items[i].coste){
                milfo_contador=milfo_contador-items[i].coste
                if(items[i].type === "sum"){
                    sumador=sumador+items[i].cant
                }else if(items[i].type === "mult"){
                    multiplicador=multiplicador*items[i].cant
                }
                document.getElementById(idBoton).style.filter = "grayscale(100%)";
                document.getElementById('milfo-points').innerHTML = milfo_contador;
                items[i].state=true
            }
            else if (items[i].id === idBoton && items[i].state == false && milfo_contador < items[i].coste){
                alert("Necesitas "+items[i].coste+" puntos")
            }
            else if (items[i].state == true){
                alert("Este item ya lo has comprado")
            }
            else{
                continue
            }
        }
    })
})