console.log("Que haces aquí? Juega legal.")
console.log("What are you doing here? Play legal.")

let milfoContador = 0;
let sumador=1;
let multiplicador=1;
let items = [
    {id: "bt-1", coste: 10, type: "sum", cant: 1, state: false},
    {id: "bt-2", coste: 25, type: "sum", cant: 2, state: false},
    {id: "bt-3", coste: 75, type: "sum", cant: 4, state: false},
    {id: "bt-4", coste: 200, type: "sum", cant: 10, state: false},
    {id: "bt-5", coste: 500, type: "sum", cant: 20, state: false}
]

let drops = [
    {id: "drp-001", nId: 1, idBlq: "blq-001",idName: "idDropName-001", name: "001 - Hot Milfs", coste: 100, idCoste: "cost-001", idNewCoste: "newCost-001", cant: 0.5, state: false, level: 0, levelName: "lvlDrop-001"},
    {id: "drp-002", nId: 2, idBlq: "blq-002",idName: "idDropName-002", name: "002 - Cherry Shoes", coste: 1000, idCoste: "cost-002", idNewCoste: "newCost-002", cant: 6, state: false, level: 0, levelName: "lvlDrop-002"},
    {id: "drp-003", nId: 3, idBlq: "blq-003",idName: "idDropName-003", name: "003 - Air Wish", coste: 8000, idCoste: "cost-003", idNewCoste: "newCost-003", cant: 32, state: false, level: 0, levelName: "lvlDrop-003"},
    {id: "drp-004", nId: 4, idBlq: "blq-004",idName: "idDropName-004", name: "004 - Milfo", coste: 22000, idCoste: "cost-004", idNewCoste: "newCost-004", cant: 102, state: false, level: 0, levelName: "lvlDrop-004"},
    {id: "drp-005", nId: 5, idBlq: "blq-005",idName: "idDropName-005", name: "005 - Skate", coste: 114000, idCoste: "cost-005", idNewCoste: "newCost-005", cant: 564, state: false, level: 0, levelName: "lvlDrop-005"},
    {id: "drp-006", nId: 6, idBlq: "blq-006",idName: "idDropName-006", name: "006 - ESSNTLS", coste: 1800000, idCoste: "cost-006", idNewCoste: "newCost-006", cant: 1660, state: false, level: 0, levelName: "lvlDrop-006"},
    {id: "drp-007", nId: 7, idBlq: "blq-007",idName: "idDropName-007", name: "007 - Casco Malamanera", coste: 21000000, idCoste: "cost-007", idNewCoste: "newCost-007", cant: 12210, state: false, level: 0, levelName: "lvlDrop-007"},
    {id: "drp-008", idBlq: "blq-008", coste: 430000000, cant: 63200, state: false, level: 0, levelName: "lvlDrop-008"},
    {id: "drp-009", idBlq: "blq-009", coste: 6900000000, cant: 319000, state: false, level: 0, levelName: "lvlDrop-009"},
    {id: "drp-010", idBlq: "blq-010", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-010"},
    {id: "drp-011", idBlq: "blq-011", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-011"},
    {id: "drp-012", idBlq: "blq-012", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-012"},
    {id: "drp-013", idBlq: "blq-013", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-013"},
    {id: "drp-014", idBlq: "blq-014", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-014"},
    {id: "drp-015", idBlq: "blq-015", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-015"},
    {id: "drp-016", idBlq: "blq-016", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-016"},
    {id: "drp-017", idBlq: "blq-017", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-017"},
    {id: "drp-018", idBlq: "blq-018", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-018"},
    {id: "drp-019", idBlq: "blq-019", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-019"},
    {id: "drp-020", idBlq: "blq-020", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-020"},
    {id: "drp-021", idBlq: "blq-021", coste: 1000, cant: 5, state: false, level: 0, levelName: "lvlDrop-021"},
]

// Función para redondear los numeros del contador
function mostrarMilfoContador(){
    let contadorMil = 0
    let milfoContadorMostrar = milfoContador
    const unidades = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
    while (milfoContadorMostrar > 999){
        milfoContadorMostrar = milfoContadorMostrar / 1000
        contadorMil++
    }
    document.getElementById('milfo-points').innerHTML = Math.round(milfoContadorMostrar).toString()+unidades[contadorMil];
}

// Funcion para redondear los numeros de los precios
function mostrarCosteDrop(numUsado, idUsado){
    let contadorMil = 0
    let milfoNumMostrar = numUsado
    const unidades = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
    while (milfoNumMostrar > 999){
        milfoNumMostrar = milfoNumMostrar / 1000
        contadorMil++
    }
    if(numUsado >=1000){
        milfoNumMostrar = milfoNumMostrar *100
        milfoNumMostrar = Math.round(milfoNumMostrar)
        milfoNumMostrar = milfoNumMostrar /100
    }else{
        milfoNumMostrar = Math.round(milfoNumMostrar)
    }
    
    document.getElementById(idUsado).innerHTML = milfoNumMostrar.toString()+unidades[contadorMil];
}

// Funcion para sumar cuando hagas click en el milfo
document.getElementById('milfo-hit-box').addEventListener("click", () => {
    milfoContador=milfoContador+(sumador*multiplicador);
    mostrarMilfoContador()
});

// Función que se activa al pulsar alguno de los botones de la derecha
document.querySelectorAll('.shop-item').forEach(boton => {
    boton.addEventListener("click", (e) => {
        const idBoton = e.target.id;
        for (let i = 0; i<items.length; i++){
            if(items[i].id === idBoton && items[i].state == false && milfoContador >= items[i].coste){
                milfoContador=milfoContador-items[i].coste
                if(items[i].type === "sum"){
                    sumador=sumador+items[i].cant
                }else if(items[i].type === "mult"){
                    multiplicador=multiplicador*items[i].cant
                }
                document.getElementById(idBoton).style.filter = "grayscale(100%)";
                mostrarMilfoContador()
                items[i].state=true
            }
            else if (items[i].id === idBoton && items[i].state == false && milfoContador < items[i].coste){
                document.getElementById("pError").innerHTML="Necisitas "+items[i].coste+" puntos"
                document.getElementById("divError").style.display = "flex";
                setTimeout(() => {
                    document.getElementById("divError").style.display = "none";
                }, 2000)
            }
            else{
                continue
            }
        }
    })
})


contador_pasivo = 0
milisegundos_contador = 1000

setInterval(() => {
    milfoContador=milfoContador+contador_pasivo
}, milisegundos_contador)

setInterval(() => {
    mostrarMilfoContador()
}, 250)


mostrarCosteDrop(drops[0].coste, "cost-001")
mostrarCosteDrop(drops[1].coste, "cost-002")
mostrarCosteDrop(drops[2].coste, "cost-003")
mostrarCosteDrop(drops[3].coste, "cost-004")
mostrarCosteDrop(drops[4].coste, "cost-005")
mostrarCosteDrop(drops[5].coste, "cost-006")
mostrarCosteDrop(drops[6].coste, "cost-007")
/*document.getElementById("cost-008").innerHTML = drops[7].coste
document.getElementById("cost-009").innerHTML = drops[8].coste
document.getElementById("cost-010").innerHTML = drops[9].coste
document.getElementById("cost-011").innerHTML = drops[10].coste
document.getElementById("cost-012").innerHTML = drops[11].coste
document.getElementById("cost-013").innerHTML = drops[12].coste
document.getElementById("cost-014").innerHTML = drops[13].coste
document.getElementById("cost-015").innerHTML = drops[14].coste
document.getElementById("cost-016").innerHTML = drops[15].coste
document.getElementById("cost-017").innerHTML = drops[16].coste
document.getElementById("cost-018").innerHTML = drops[17].coste
document.getElementById("cost-019").innerHTML = drops[18].coste
document.getElementById("cost-020").innerHTML = drops[19].coste
document.getElementById("cost-021").innerHTML = drops[20].coste*/

mostrarDrops = 2

document.querySelectorAll('.div-levels').forEach(botonDrop => {
    botonDrop.addEventListener("click", (e) => {
        let idBotonDrop = e.currentTarget.id;
        for (let i = 0; i<drops.length; i++) {
            if(drops[i].id == idBotonDrop && drops[i].coste <= milfoContador && drops[i].state == false){
                document.getElementById(drops[i].idBlq).classList.add("dropBought")
                drops[i].state = true
                milfoContador = milfoContador - drops[i].coste
                drops[i].level = drops[i].level + 1
                document.getElementById(drops[i].levelName).innerHTML = drops[i].level.toString()
                contador_pasivo =contador_pasivo + (drops[i].level * drops[i].cant)
                drops[i].coste = drops[i].coste * 1.15
                document.getElementById(drops[i].idName).innerHTML = drops[i].name;
                mostrarCosteDrop(drops[i].coste, drops[i].idNewCoste);

            }else if(drops[i].id == idBotonDrop && drops[i].coste <= milfoContador && drops[i].state == true){
                drops[i].level = drops[i].level + 1
                drops[i].coste = drops[i].coste * 1.15
                document.getElementById(drops[i].levelName).innerHTML = drops[i].level.toString()
                contador_pasivo =contador_pasivo + (drops[i].level * drops[i].cant)
                milfoContador = milfoContador - drops[i].coste
                document.getElementById(drops[i].idName).innerHTML = drops[i].name;
                mostrarCosteDrop(drops[i].coste, drops[i].idNewCoste);
            }
            
        }
    })
})


const clickableMilfo = document.getElementById("milfo-hit-box");
const growMilfo = document.getElementById("milfoImg2")
const milfoClickSound = document.getElementById("milfoClickSound")

clickableMilfo.addEventListener("click", () => {
    milfoClickSound.currentTime = 0;
    milfoClickSound.play()
    document.getElementById("milfoImg2").style.transform = "scale(0.93)"
    setTimeout(()=> {
        document.getElementById("milfoImg2").style.transform = "scale(1.0)"
    }, 130)
})