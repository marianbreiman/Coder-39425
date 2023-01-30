// Super calculadora con while y switch

let operacion;

while (operacion != 5) {

    operacion = Number(prompt(
        `Ingrese la operación a realizar
        1. Suma
        2. Resta
        3. Multiplicación
        4. División
        5. Salir
        `));

    if(isNaN(operacion)){
        alert("No podes ingresar texto");
        continue;
    }

    if(operacion < 1 || operacion > 5){
        alert("Ingresar el rango de 1 a 5");
        continue;
    }
    let cantidad = Number(prompt(
        "Ingrese la cantidad de números a operar"));
        
    if(cantidad < 1){
        alert("No podes ingresar numeros negativos");
        continue;
    }

    if (operacion == 5) {
        alert("Hasta luego");
        break;
    }



    if(isNaN(cantidad)){
        alert("No podes ingresar texto");
        continue;
    }

    if(cantidad < 1){
        alert("No podes ingresar numeros negativos");
        continue;
    }

    let resultado = 0;

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt("Ingrese el número"));
        switch (operacion) {
            case 1:
                resultado += numero;
                break;
            case 2:
                resultado -= numero;
                break;
            case 3:
                resultado *= numero;
                break;
            case 4:
                resultado /= numero;
                break;
            default:
                alert("Operación no válida");
                break;
        }
    }

    alert(`El resultado de la operación es ${resultado}`);

}

