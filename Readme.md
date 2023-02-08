# Lanzamiento de monedas

Digamos que tenemos una función que simula lanzar una moneda

```
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
```

Y queremos usarlo en una función que vea cuánto tiempo tomará una moneda en salir "cara" cinco veces seguidas.

```
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );
```

Esto tomará una cantidad de tiempo indeterminada. Si ejecutamos la función síncrona anterior, evitará que se ejecute cualquier código que viene después mientras se lleva a cabo la misma.

Tu misión es tomar el código de ejemplo anterior y convertirlo en una Promesa. Asegúrate de que tu función fiveHeads llamará a la función resolve cuando la moneda haya salido "cara" cinco veces seguidas.

```
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // tu código aquí!
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );copy
```

## Requerimientos del Programa

-   Toma la función fiveHeads y conviértela en una promesa.
-   Completa la función fiveHeads para que resuelva() cuando "heads" haya sido volteado cinco veces.
-   Permite que la función fiveHeads rechace() cuando la moneda se haya lanzado más de 100 veces.
