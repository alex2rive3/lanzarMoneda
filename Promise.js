function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
/*function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");
*/
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                return resolve(`Ha caido heads 5 veces seguidas y la moneda fue lanzada ${attempts} veces`);
            }
        }
        return reject(`La moneda se ha lanzado ${attempts} veces`)
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
