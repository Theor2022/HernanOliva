function Producto(nombre, precio, stock, cat, imagenprod ){ //constructor
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.cat = cat
    this.imagenprod = imagenprod
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}
let p1= new Producto("Fallout 4", 25, 31, "Historia")
let p2 = new Producto("God Of War 4", 10, 10, "Aventura")
let p3 = new Producto("The Elder Scrolls V: Skyrim", 20, 15, "Fantasia")
let p4 = new Producto("Assassin's Creed: Odyssey", 5, 0, "Aventura")
let p5 = new Producto("Minecraft", 8, 11, "Emocionante")
let p6 = new Producto("Silent Hill ", 10, 3, "Terror")
let p7 = new Producto("FarCry", 18, 9, "Emocionante")
let p8 = new Producto("Projecto Zomboid", 12, 2, "Terror")


let listaProductos = [p1, p2, p3, p4, p5, p6, p7, p8]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock >= 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById('row')

function render(lista) {
    catalogo.innerHTML = ""

    for(const prod of lista){
        let card = document.createElement("div")

        card.className = "card h-100 card-body card-title card-text"
        
        card.innerHTML = `<h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><button>Comprame!</button>`
        catalogo.append(card)
    }
}

render(listaProductosConStock)

let categoriaElegida = ''

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
    botonFiltrado.addEventListener("click", filtrado)


function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    if(filtroActual.length == 0){
        console.log("Esa categoria no existe")
    }
    render(filtroActual)
}

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})
