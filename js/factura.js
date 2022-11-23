//crear una función
function calcular(){
    //declar variables para iva, precio y cantidad
    const iva = 0.19;
    let precio = document.simuladorFactura.precio.value;
    let cantidad = document.simuladorFactura.cantidad.value;
    
    // capturar la selección del producto
    producto = document.getElementById('producto').value;
    

    // estructura condicion if o si - entonces
    if(cantidad == 0 || cantidad == null || precio == 0 || cantidad == null){
        alert("precio o cantidad no son validos, por favor intentar de nuevo");
    }else{
        //declarar variables para las operaciones
        let vt = precio * cantidad;
        let vi = iva * vt;
        let tp = vt + vi;

        // imprimir los resultado en los span con sus identificadores correpondientes
        
        // producto
        document.getElementById("valorProducto").innerHTML=producto;
        //precio
        document.getElementById("valorPrecio").innerHTML=precio;
        //cantidad
        document.getElementById("valorCantidad").innerHTML=cantidad;
        //valor total
        document.getElementById("valorTotal").innerHTML=vt;
        //valor iva
        document.getElementById("valorIva").innerHTML=vi;
        //total a pagar
        document.getElementById("totalPagar").innerHTML=tp;
    }

}