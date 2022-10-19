// ingresar nombre, apellido, curso y preguntar si esta becado o no. luego ingresar las notas durante el curso e informar: 
//si logro o no aprobar la cursada, promedio, nota mas alta, nota mas baja y precio final dependiendo de si esta becado o no.

function nombreCurso(){
    let cursooo = validarCurso();
    return cursooo;
}

function cargarNotas(){
    for (let i = 0; i < 5; i++) {
        nota[i] = parseInt(prompt("Ingrese la nota numero "+ (i+1) +" de su proyecto de "+ curso));
        validarNum(i);
        total = total + nota[i];
        if (nota[i] > alta) {
            alta = nota[i];
            console.log(alta);
        }
        
        if (nota[i] < baja) {
            baja = nota[i];
        }
    }
    return;
}

function calcularPromedio() {
    let promedioo;

    promedioo = total / 5;

    return promedioo;
}

function imprimirTodo() {
    if (promedio >= 7) {
        console.log("Felicitaciones "+ nombre+" "+ apellido+"! Aprobo el curso de: "+curso);
    }else{
        console.log(nombre+" "+ apellido+" lamento informarle que no Aprobo el curso de: "+curso+". Debera recursar.");
    }

    console.log("El promedio de "+ nombre+" "+ apellido+" durante el curso de "+ curso+" fue: "+ promedio);

    console.log("La nota mas alta de "+ nombre+" "+ apellido+" durante el curso de "+ curso+" fue: "+ alta);

    console.log("La nota mas baja de "+ nombre+" "+ apellido+" durante el curso de "+ curso+" fue: "+ baja);

    console.log("El precio final del curso de "+ curso+" es de: "+precio);
}

function validarNum(i) {
    while (nota[i] > 10 || nota[i] < 0) {
        nota[i] = parseInt(prompt("Error, Ingrese la nota numero "+ (i+1) +" de su proyecto (0, 10)"));
    }
}

function validarCurso() {
    let cursoo = prompt("Ingrese el nombre del curso");
    while (cursoo != "javascript" && cursoo != "react" && cursoo != "fullstack" && cursoo != "backend" && cursoo != "frontend" && cursoo != "solidity" && cursoo != "c++" && cursoo != "python" && cursoo != "java") {
        cursoo = prompt("Error, Ingrese un curso valido (javascript, react, fullstack, backend, frontend, solidity, c++, python, java)");
    }
    return cursoo;
}

function becado() {
    let resultado;
    do {
        let becaaa = prompt("Esta becado en el curso de "+ curso+"?(S/N)");
        resultado = becaaa.toUpperCase();
        if (resultado !== "S" && resultado !== "N") {
            console.log("Error, Esta becado en el curso de "+ curso+"?(S/N)")
        }
    } while (resultado !== "S" && resultado !== "N");
    return resultado;
    if(resultado === "S"){
        return true;
    }else{
        return false;
    }
}

function calcularPrecio(){
    switch (curso) {
        case "javascript":
            precio = 17000;
            break;
        case "react":
            precio = 18000;
            break;
        case "fullstack":
            precio = 28000;
            break;
        case "backend":
            precio = 23000;
            break;
        case "frontend":
            precio = 23000;
            break;
        case "solidity":
            precio = 20000;
            break;
        case "c++":
            precio = 19000;
            break;
        case "python":
            precio = 16000;
            break;
        case "java":
            precio = 16500;
            break;
        default:
            break;
    }
    return precio;
}

let nota = [5];
let total = 0;
let alta = 0;
let baja = nota[0];
let precio;

let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

let curso = nombreCurso();

let beca = becado();

cargarNotas();

let promedio = calcularPromedio();

precio = calcularPrecio();

if (beca === true) {
    precio = precio * 0.70;
}

imprimirTodo();

