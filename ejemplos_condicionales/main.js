// Carrito de compras
/* // Productos
let p1 = "Pantalon";
let p2 = "Camisa";
let p3 = "Zapatos";
let p4 = "Gorra";

// Precios
let pp1 = 100;
let pp2 = 50;
let pp3 = 200;
let pp4 = 20;


// Preguntar al usuario
let producto = prompt(
    "Digite el numero que desea comprar" 
    + "\n1. " + p1 + " - $" + pp1 
    + "\n2. " + p2 + " - $" + pp2
    + "\n3. " + p3 + " - $" + pp3
    + "\n4. " + p4 + " - $" + pp4
);

// Validar que solo sean numero de 1 a 4
if (producto >= 1 && producto <= 4) {

    // Validar que el producto exista
    if (producto == 1) {
        console.log("El producto " + p1 + " tiene un valor de $" + pp1);

        let cantidad = Number(prompt("Ingrese la cantidad de " + p1 + " que desea comprar"));

        alert("El total a pagar es de $" + (pp1 * cantidad));

    }else if (producto == 2) {
        console.log("El producto " + p2 + " tiene un valor de $" + pp2);

        let cantidad = Number(prompt("Ingrese la cantidad de " + p2 + " que desea comprar"));

        alert("El total a pagar es de $" + (pp2 * cantidad));

    }else if (producto == 3) {
        console.log("El producto " + p3 + " tiene un valor de $" + pp3);

        let cantidad = Number(prompt("Ingrese la cantidad de " + p3 + " que desea comprar"));

        alert("El total a pagar es de $" + (pp3 * cantidad));

    }else if (producto == 4) {
        console.log("El producto " + p4 + " tiene un valor de $" + pp4);

        let cantidad = Number(prompt("Ingrese la cantidad de " + p4 + " que desea comprar"));

        alert("El total a pagar es de $" + (pp4 * cantidad));
    }

    let nombre = prompt("Ingrese su nombre").toUpperCase();

}else {
    alert("Producto no encontrado");
} */

// Turnero 
let nombre = prompt("Ingrese su nombre").toUpperCase();
const maniana = "M";
const tarde = "T";
const noche = "N";

// Medicos 
const m1 = "Juan";
const m2 = "Pedro";
const m3 = "Maria";

// Horarios turno mañana
const h1 = "8:00 am";
const h2 = "10:00 am";
const h3 = "12:00 pm";

// Horarios turno tarde
const h4 = "2:00 pm";
const h5 = "4:00 pm";
const h6 = "6:00 pm";

// Horarios turno noche
const h7 = "8:00 pm";
const h8 = "10:00 pm";


// Validar que no sea numero
if (isNaN(nombre)) {
    alert("Bienvenido " + nombre);

    let turno = prompt(
        "Digite la letra del turno correspondiente: "
        + "\nM. Mañana"
        + "\nT. Tarde"
        + "\nN. Noche").toUpperCase();

    if (turno == maniana) {
        alert("Turno mañana");

        let medico = prompt("Digite el numero del medico con el que desea atenderse: "
            + "\n1. " + m1
            + "\n2. " + m2
            + "\n3. " + m3).toUpperCase();

        if (medico == 1) {
            alert("El medico " + m1 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h1
                + "\n2. " + h2
                + "\n3. " + h3).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h1);
            } else if (hora == 2) {
                alert("Su turno es a las " + h2);
            } else if (hora == 3) {
                alert("Su turno es a las " + h3);
            }

        } else if (medico == 2) {
            alert("El medico " + m2 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h1
                + "\n2. " + h2
                + "\n3. " + h3).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h1);
            }else if (hora == 2) {
                alert("Su turno es a las " + h2);
            }else if (hora == 3) {
                alert("Su turno es a las " + h3);
            }

        } else if (medico == 3) {
            alert("El medico " + m3 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h1
                + "\n2. " + h2
                + "\n3. " + h3).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h1);
            }else if (hora == 2) {
                alert("Su turno es a las " + h2);
            }else if (hora == 3) {
                alert("Su turno es a las " + h3);
            }

        } else {
            alert("Medico no encontrado");
        }

    } else if (turno == tarde) {
        alert("Turno tarde");

        let medico = prompt("Digite el numero del medico que desea atender: "
            + "\n1. " + m1
            + "\n2. " + m2
            + "\n3. " + m3).toUpperCase();

        if (medico == 1) {
            alert("El medico " + m1 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h4
                + "\n2. " + h5
                + "\n3. " + h6).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h4);
            } else if (hora == 2) {
                alert("Su turno es a las " + h5);
            } else if (hora == 3) {
                alert("Su turno es a las " + h6);
            }

        } else if (medico == 2) {
            alert("El medico " + m2 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h4
                + "\n2. " + h5
                + "\n3. " + h6).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h4);
            } else if (hora == 2) {
                alert("Su turno es a las " + h5);
            } else if (hora == 3) {
                alert("Su turno es a las " + h6);
            }

        } else if (medico == 3) {
            alert("El medico " + m3 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h4
                + "\n2. " + h5
                + "\n3. " + h6).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h4);
            } else if (hora == 2) {
                alert("Su turno es a las " + h5);
            } else if (hora == 3) {
                alert("Su turno es a las " + h6);
            }

        } else {
            alert("Medico no encontrado");
        }

    } else if (turno == noche) {

        alert("Turno noche");

        let medico = prompt("Digite el numero del medico que desea atender: "
            + "\n1. " + m1
            + "\n2. " + m2
            + "\n3. " + m3).toUpperCase();

        if (medico == 1) {
            alert("El medico " + m1 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h7
                + "\n2. " + h8
                + "\n3. " + h9).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h7);
            } else if (hora == 2) {
                alert("Su turno es a las " + h8);
            } else if (hora == 3) {
                alert("Su turno es a las " + h9);
            }

        } else if (medico == 2) {
            alert("El medico " + m2 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h7
                + "\n2. " + h8
                + "\n3. " + h9).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h7);
            } else if (hora == 2) {
                alert("Su turno es a las " + h8);
            } else if (hora == 3) {
                alert("Su turno es a las " + h9);
            } 

        } else if (medico == 3) {
            alert("El medico " + m3 + " atendera su turno");

            let hora = prompt("Digite el numero de la hora que desea atenderse: "
                + "\n1. " + h7
                + "\n2. " + h8
                + "\n3. " + h9).toUpperCase();

            if (hora == 1) {
                alert("Su turno es a las " + h7);
            } else if (hora == 2) {
                alert("Su turno es a las " + h8);
            } else if (hora == 3) {
                alert("Su turno es a las " + h9);
            } 
        }
        else {
            alert("Medico no encontrado");
        }
    } else {
        alert("Turno no encontrado");
    }

} else {
    alert("No puede ingresar numeros");
}
