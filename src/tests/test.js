const suma = (a, b) => {
    return a + b;
}

const resultado = suma(1, 0);
const esperado = 0;

if (resultado === esperado) {
    console.log('Correcto');
} else {
    console.assert(
        false, 
        'Se esperaba que la suma sea igual a 0, pero obtuvimos ' + resultado
    );
}
