let fecha = new Date();


let bienvenida = prompt("Ingrese su Nombre");
if (bienvenida != "") {
    alert(`Bienvenide ${bienvenida.toLocaleUpperCase()} a Flowers´ Naturals 🌸`);
}
else {
    alert("Porfavor ingrese su Nombre");
    bienvenida = prompt("Ingrese su Nombre");
    alert(`Bienvenide ${bienvenida} a Flowers´s Naturals 🌸`);
}




class Productos {
    constructor(flor, color, cantidad) {
        this.flor = flor;
        this.color = color;
        this.cantidad = cantidad;

    }

    verProducto() {
        return `Flor: ${this.flor}
              Color: ${this.color}
              Precio: ${this.obtenerPrecio()}
              Cantidad: ${this.cantidad}`;
    }

    obtenerPrecio() {
        switch (this.flor) {
            case "ROSAS":
                return 300;
            case "ALSTROEMERIAS":
                return 100;
            case "GERBERAS":
                return 250;
            default:
                return 0;
        }
    }

    precioFinal() {
        let precioTotal = parseInt(this.obtenerPrecio()) * this.cantidad;
        return precioTotal;
    }

}




class CarritoCompra {
    constructor() {
        this.producto = [];
    }


    agregarProducto(producto) {
        this.producto.push(producto);
    }

    verCarritoCompra() {
        let datos = "";
        if (this.producto.length === 0) {
            datos = "El carrito de compra está vacío.";
        } else {
            datos += "Productos en el carrito de compra:\n";
            this.producto.forEach((producto) => {
                datos += `${producto.verProducto()} -- Precio Total: $ ${producto.precioFinal()}\n`;
            });
        }
        return datos;
    }

    modificarCarrito(flor, color) {
        let producto = this.producto.find((producto) => producto.flor === flor);
        if (producto) {
            producto.color = color;
        }
    }

    eliminarCarrito(flor) {
        let index = this.producto.find((producto) => producto.flor === flor);
        if (index !== -1) {
            this.producto.splice(index, 1);
        }
    }
}




const Empresa = {
    nombre: "Flowers´ Naturals",
    direccion: "Barrio Alberdi 3041",
    telefono: "351-564-998",
    horarios: "Lun a Vie de 08hs a 18hs || Sab y Dom de 09hs a 13hs",
};




function carritoDeCompra() {
    let opciones = "";
    const carrito = new CarritoCompra();
    const verProducto1 = new Productos(
        " \n ROSAS \n ALSTROEMERIAS \n GERBERAS",
        " \n Rojo \n Amarillo \n Blanco \n",
        " "
    );
    let flores = "";
    let colores = "";
    let cantidad = 0;
    let producto = "";

    do {
        opciones = prompt(`Seleccione una Opcion: 
              1)- Ver Productos en Stock
              2)- Agregar Producto
              3)- Ver Carrito de Compra
              4)- Modificar Carrito
              5)- Eliminar Producto
              6)- Informacion de Flower
              7)- Finalizar Compra
              "ESC")- Salir`);


        if (opciones === "1") {
            alert(verProducto1.verProducto());

        } else if (opciones === "2") {
            flores = prompt(
                "Ingrese el Nombre de Flor a Agregar en MAYUSCULA y S al final"
            );
            switch (flores) {
                case "ROSAS":
                    alert("Cada Rosa vale $300");
                    break;
                case "ALSTROEMERIAS":
                    alert("Cada Alstroemeria vale $100");
                    break;
                case "GERBERAS":
                    alert("Cada Gerbera vale $250");
                    break;
            }
            colores = prompt("Ingrese el Color de la Flor");
            cantidad = parseInt(prompt("Ingrese la Cantidad"));
            producto = new Productos(flores, colores, cantidad);
            carrito.agregarProducto(producto);

        } else if (opciones === "3") {
            alert(carrito.verCarritoCompra());

        } else if (opciones === "4") {
            flores = prompt("Ingrese el Nombre de Flor a Modificar");
            colores = prompt("Ingrese el Nuevo Color de la Flor");
            carrito.modificarCarrito(flores, colores);

        } else if (opciones === "5") {
            flores = prompt("Ingrese el Nombre de Flor a Eliminar");
            carrito.eliminarCarrito(flores);

        } else if (opciones === "6") {
            alert(
                `\n Empresa: ${Empresa.nombre} \n Dirección: ${Empresa.direccion} \n Teléfono: ${Empresa.telefono} \n Horarios: ${Empresa.horarios}`
            );

        } else if (opciones === "7") {
            let total = 0;
            carrito.producto.forEach((producto) => {
                total += producto.precioFinal();
            });
            alert(
                `${carrito.verCarritoCompra()} Precio Total de la Compra:$ ${total}`
            );
            alert(`¡MUCHAS GRACIAS POR SU COMPRA! ❤️ En la fecha: \n ${fecha}`);
            break;

        } else if (opciones === "ESC") {
            break;

        }
        else {
            alert("Opción Invalida, Selecciones un numero del 1-7");
        }

    } while (opciones !== "ESC");
}

carritoDeCompra();

