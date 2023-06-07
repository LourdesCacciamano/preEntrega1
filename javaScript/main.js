let rosas = 300;
let alstroemerias = 100;
let gerberas = 250;
let cantidad = 0;
let cuotas = 0;


let bienvenida = prompt("Ingrese su Nombre");
if(bienvenida != "") {
    alert(`Bienvenide ${bienvenida} a Flowers´s Naturals 🌸`);
}
else{
    alert("Porfavor ingrese su Nombre");
    bienvenida = prompt("Ingrese su Nombre");
    alert(`Bienvenide ${bienvenida} a Flowers´s Naturals 🌸`);
}


let opcionFlores = Number(prompt("Ingrese el numero de flor que desee comprar: \n 1- ROSAS \n 2- ALSTROEMERIAS \n 3- GERBERAS "));
while(opcionFlores != "") {
    if(opcionFlores == 1) {
        alert("Su flor seleccionada fue ROSAS ¡Buena Eleccion! ");
        cantidad = Number(prompt("Exprese la cantidad de Rosas que quiere comprar sabiendo que cada una vale $300"))
       cuotas = Number(prompt("Seleccione el numero de cuotas que desee: \n A-1 \n B-3 \n C-6")); 
       const precioTotal = precio(rosas, cantidad, cuotas);
       alert(`El precio de ${cantidad} Rosas en ${cuotas} Cuotas son $ ${precioTotal}`);
       alert("¡Muchas Gracias por su compra! ❤️")
       break;
    } else if(opcionFlores == 2) {
        alert("Su flor seleccionada fue ALSTROEMERIAS ¡Buena Eleccion! ");
        cantidad = Number(prompt("Exprese la cantidad de Alstroemerias que quiere comprar sabiendo que cada una vale $100"))
       cuotas = Number(prompt("Seleccione el numero de cuotas que desee: \n A-1 \n B-3 \n C-6")); 
       const precioTotal = precio(alstroemerias, cantidad, cuotas);
       alert(`El precio de ${cantidad} Alstroemerias en ${cuotas} Cuotas son $ ${precioTotal}`);
       alert("¡Muchas Gracias por su compra! ❤️")
        break;
    } else if(opcionFlores == 3) {
        alert("Su flor seleccionada fue GERBERAS ¡Buena Eleccion! ");
        cantidad = Number(prompt("Exprese la cantidad de Gerberas que quiere comprar sabiendo que cada una vale $250"))
        cuotas = Number(prompt("Seleccione el numero de cuotas que desee: \n A-1 \n B-3 \n C-6")); 
        const precioTotal = precio(gerberas, cantidad, cuotas);
        alert(`El precio de ${cantidad} Gerberas en ${cuotas} Cuotas son $ ${precioTotal}`);
        alert("¡Muchas Gracias por su compra! ❤️")
        break;
    } else{
        alert("Por favor ingrese algo valido");
        break;
        
    }
}

function precio(rosas, cantidad, cuotas) {
    return (rosas * cantidad) / cuotas; 
}
function precio(alstroemerias, cantidad, cuotas) {
    return (alstroemerias * cantidad) / cuotas; 
}
function precio(gerberas, cantidad, cuotas) {
    return (gerberas * cantidad) / cuotas; 
}
